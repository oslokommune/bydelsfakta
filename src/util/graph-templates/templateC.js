/**
 * Template for multi series multi-line chart.
 *
 * A details box appears when rendered with highlight parameter
 * defined in the options object.
 *
 * Change tabs by rendering with the series parameter defined
 * in the options object.
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import d3 from '@/assets/d3';
import positionLabels from '../positionLabels';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'c';
  this.isMobileView = false;
  this.mobileWidth = 420;

  this.padding = { top: 140, left: 60, right: 190, bottom: 32 };

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    // temp fix until highlight is id-based in all templates
    if (this.highlight === -1) {
      this.highlight = false;
    }

    this.isMobileView = this.parentWidth() < this.mobileWidth;

    // Add colors to geographies if they don't already exist
    this.data.data.forEach((geo, i, j) => {
      geo.color = d3.interpolateRainbow(i / j.length);
    });

    this.width = d3.max([this.width, 300]);
    this.height = 500;
    this.svg
      .transition()
      .duration(this.duration)
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.setScales();
    this.drawTable();
    const yearCount = d3.timeYear.count(...this.x.domain());
    if (!yearCount) {
      this.showMessage('Mangelfull data: Tidsserien inneholder for få datapunkter.');
      return;
    } else {
      this.hideMessage();
    }

    this.drawAxis();
    this.drawLines();
    this.drawTabs();
    this.drawLabels();
    this.drawDots();
    this.drawVoronoi();
  };

  // Creates elements for this template. Runs from base template along with init()
  this.created = function() {
    // Create tabs placeholder
    this.tabs = this.svg
      .insert('g')
      .attr('class', 'tabs')
      .attr('transform', 'translate(3, 50)');

    this.canvas.append('g').attr('class', 'lines');
    this.canvas.append('g').attr('class', 'dots');
    this.canvas.append('g').attr('class', 'voronoi');
    this.canvas.append('g').attr('class', 'labels');
  };

  // Line generator for converting values to a data string for svg:paths
  this.line = d3
    .line()
    .x(d => this.x(this.parseYear(d.date)))
    .y(d => this.y(d[this.method]));

  this.drawTable = function() {
    let dates = new Set();
    this.data.data.forEach(row => {
      row.values[0].forEach(d => {
        dates.add(d.date);
      });
    });
    dates = [...dates].sort((a, b) => a - b);

    const table_head = [];
    table_head[0] = [
      'Geografi',
      ...this.data.meta.series.map(d => {
        let str = '';

        if (typeof d === 'string') {
          str += d;
        } else if (d.heading) {
          str += `${d.heading} ${d.subheading}`;
        }

        str += this.method === 'ratio' ? ' (prosentandel)' : '(antall)';
        return str;
      }),
    ];

    table_head[1] = [];
    for (let i = 0; i < this.data.meta.series.length; i++) {
      table_head[1] = table_head[1].concat(dates);
    }

    const table_body = this.data.data.map(row => {
      return {
        key: row.geography,
        values: this.data.meta.series.flatMap((serie, serieIndex) =>
          dates.map(date => {
            if (!row.values[serieIndex]) return 'N/A';
            const cell = row.values[serieIndex].find(obj => obj.date === date);
            return cell && cell[this.method] ? cell[this.method] : 'N/A';
          })
        ),
      };
    });

    const tableGenerator = util.drawTable.bind(this);
    tableGenerator(table_head, table_body);
  };

  this.drawDots = function() {
    const dotgroup = this.canvas
      .select('g.dots')
      .selectAll('g.dotgroup')
      .data(this.data.data.filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow))), d => d.geography)
      .join('g')
      .attr('class', 'dotgroup');

    dotgroup.exit().remove();

    const dot = dotgroup
      .selectAll('g.dot')
      .data(d => d.values[this.series], d => d.geography)
      .join(enter => {
        const g = enter.append('g');
        g.append('text');
        g.append('circle');
        return g;
      })
      .attr('class', 'dot')
      .attr('opacity', 0);

    dot.exit().remove();

    dot
      .select('text')
      .text(d => (d && d[this.method] !== undefined ? this.format(d[this.method], this.method) : false))
      .attr('x', d => this.x(this.parseYear(d.date)))
      .attr('y', d => this.y(d[this.method]))
      .attr('font-size', 11)
      .attr('transform', `translate(0, -7)`)
      .attr('text-anchor', d => {
        const pos = this.x(this.parseYear(d.date));
        if (pos < 50) {
          return 'start';
        } else if (pos > this.width - 50) {
          return 'end';
        } else {
          return 'middle';
        }
      })
      .style('pointer-events', 'none');

    dot
      .select('circle')
      .attr('r', 4)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('cx', d => this.x(this.parseYear(d.date)))
      .attr('cy', d => this.y(d[this.method]));
  };

  this.drawVoronoi = function() {
    const flattenData = this.data.data
      .filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow)))
      .map(geo =>
        geo.values[this.series].map(val => ({ date: val.date, value: val[this.method], geography: geo.geography }))
      )
      .reduce((acc, val) => acc.concat(val), []);

    const voronoiData = d3
      .voronoi()
      .extent([[1, 1], [this.width, this.height]])
      .x(d => this.x(this.parseYear(d.date)))
      .y(d => this.y(d.value))
      .polygons(flattenData)
      .filter(Boolean);

    const voronoiCells = this.canvas
      .select('g.voronoi')
      .selectAll('path')
      .data(voronoiData)
      .join('path')
      .attr('d', d => 'M' + d.join('L') + 'Z')
      .attr('fill-opacity', 0);

    // Highlight a geography when hovering the chart. If the
    // chart is rendered with a geography highlighted, then only
    // the selected geography will be affected by hover.
    voronoiCells.on('mouseover', (d, i, j) => {
      const geography = j[i].__data__.data.geography;
      const date = j[i].__data__.data.date;

      if (!this.highlight || this.highlight === d.data.geography) {
        this.canvas.selectAll('g.dot').attr('opacity', 0);
        this.canvas
          .selectAll('g.dotgroup')
          .filter(dot => {
            if (dot.geography === geography) {
              this.handleMouseover(dot.geography);
              return true;
            }
          })
          .selectAll('g.dot')
          .filter(dot => dot.date === date)
          .attr('opacity', 1);
      }
    });

    // Remove highlight on mouse leave
    voronoiCells.on('mouseleave', () => {
      if (!this.highlight) {
        this.canvas.selectAll('g.dot').attr('opacity', 0);
        this.handleMouseleave();
      }
    });

    // When clicking a voronoi cell, the graph should re-render
    // with the selected geography highlighted. If the geography
    // is alredady selected, then we re-render with no highlight.
    voronoiCells.on('click', d => {
      if (this.highlight === d.data.geography) {
        this.render(this.data, { method: this.method, series: this.series, highlight: false });
      } else {
        this.render(this.data, {
          method: this.method,
          series: this.series,
          highlight: d.data.geography,
        });
      }
    });
  };

  // Updates the tabs. Highlights the active series
  this.drawTabs = function() {
    let g = this.tabs
      .selectAll('g.tab')
      .data(this.data.meta.series)
      .join(enter => enterTab(enter));

    g.exit().remove();

    const rowCount = this.isMobileView ? 3 : 2;
    const gapX = 36;
    const gapY = 24;
    const radio = g.select('g.radio');
    const inner = radio.select('.inner');
    const label = g.select('.label');
    const bg = g.select('.bg');
    const maxWidth = d3.max(g.nodes(), d => util.getTextWidth(d.__data__.heading + d.__data__.subheading)) + gapX;

    g.attr('transform', (d, i) => {
      const col = Math.floor(i / rowCount);
      const row = i % rowCount;
      return `translate(${col * maxWidth}, ${row * (gapY + 3)})`;
    });

    bg.attr('fill', 'white')
      .attr('height', gapX)
      .attr('width', maxWidth)
      .attr('y', -gapX / 2);

    radio.attr('transform', 'translate(5, 0)');
    label.attr('transform', 'translate(16, 5)').text(d => `${d.heading} ${d.subheading}`);

    inner.attr('transform', (d, i) => {
      return `scale(${i === this.series ? 1 : 0})`;
    });

    g.on('click keyup', (d, i) => {
      if (i === this.series) return;
      if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
      this.render(this.data, { method: this.method, series: i });
    })
      .attr('tabindex', 0)
      .style('cursor', 'pointer');

    function enterTab(enter) {
      const g = enter.append('g').attr('class', 'tab');

      g.append('rect')
        .classed('bg', true)
        .attr('height', 20);
      g.append('text').classed('label', true);
      const radio = g.append('g').classed('radio', true);

      radio
        .append('circle')
        .classed('outer', true)
        .attr('r', 6)
        .attr('stroke', color.purple)
        .attr('stroke-width', 1)
        .attr('fill', 'none');
      radio
        .append('circle')
        .classed('inner', true)
        .attr('r', 4)
        .attr('fill', color.purple);

      return g;
    }
  };

  this.handleMouseover = function(geo) {
    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .attr('opacity', 0.5);

    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .select('text')
      .attr('font-weight', 400);

    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .filter(d => d.geography === geo)
      .attr('opacity', 1)
      .select('text')
      .attr('font-weight', 700);

    this.canvas
      .select('g.lines')
      .selectAll('path.row')
      .attr('stroke-opacity', 0.1)
      .attr('stroke-width', 3)
      .filter(d => d.geography === geo)
      .attr('stroke-opacity', 1)
      .attr('stroke-width', 5);
  };

  this.handleMouseleave = function() {
    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .attr('opacity', d => (d.avgRow || d.totalRow ? 1 : 0.45));

    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .select('text')
      .attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));

    this.canvas
      .select('g.lines')
      .selectAll('path.row')
      .attr('stroke-width', d => (d.avgRow ? 5 : 3))
      .attr('stroke-opacity', d => (d.totalRow || d.avgRow ? 1 : 0.4));
  };

  // Updates the labels
  this.drawLabels = function() {
    // Get y-position for each label calculated using
    // simple collision detection algorithm. Passing in
    // the original y-position and the available height in pixels
    const labelPositions = positionLabels(
      this.data.data
        .filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow)))
        .map(row => {
          row.y = this.y(row.values[this.series][row.values[this.series].length - 1][this.method]);
          return row;
        }),
      this.height
    );

    const labels = this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .data(labelPositions)
      .join(
        enter => {
          const g = enter
            .append('g')
            .attr('class', 'label')
            .style('cursor', 'pointer');
          g.append('text').attr('x', this.width + 35);
          g.append('line')
            .attr('stroke-width', 9)
            .attr('x1', this.width + 22)
            .attr('x2', this.width + 31);
          g.append('title');
          return g;
        },
        update => update,
        exit => exit.remove()
      )
      .attr('class', 'label')
      .style('cursor', 'pointer')
      .attr('tabindex', 0);

    // Click label to render with highlight
    labels.on('click keyup', (d, i, j) => {
      if (d3.event && d3.event.type === 'click') j[i].blur();
      if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
      if (this.highlight === d.geography) {
        this.render(this.data, { series: this.series, method: this.method, highlight: false });
      } else {
        this.render(this.data, { series: this.series, method: this.method, highlight: d.geography });
      }
    });

    // Hover label to highlight itself and its corresponding line
    labels.on('mouseover', d => {
      if (!this.highlight) {
        this.handleMouseover(d.geography);
      }
    });

    //
    labels.on('mouseleave', () => {
      if (!this.highlight) {
        this.handleMouseleave();
      }
    });

    // Style the color swatch for each label
    labels
      .select('line')
      .transition()
      .duration(this.duration)
      .attr('x1', this.width + 22)
      .attr('x2', this.width + 31)
      .attr('stroke', d => (d.totalRow ? 'black' : d.avgRow ? color.purple : d.color))
      .style('stroke-dasharray', d => (d.totalRow ? '2,1' : ''));

    // Style the text label element
    labels
      .select('text')
      .transition()
      .duration(this.duration)
      .text(d => util.truncate(d.geography, this.padding.right - 40))
      .attr('x', this.width + 35)
      .attr('y', 5)
      .attr('font-weight', d => {
        if (this.highlight) {
          return this.highlight === d.geography ? 700 : 400;
        }

        if (d.avgRow || d.totalRow) return 700;
        return 400;
      });

    // Style each label group (text and color swatch)
    labels
      .transition()
      .duration(this.duration)
      .attr('transform', (d, i) => `translate(0, ${labelPositions[i].start})`)
      .attr('opacity', d => {
        if (this.highlight) {
          return this.highlight === d.geography ? 1 : 0.6;
        }
        if (d.avgRow || d.totalRow) return 1;
        return 0.6;
      });

    // Update content in the <title> element
    labels.select('title').html(d => d.geography);
  };

  // Updates the shape and style of the lines in the line chart
  this.drawLines = function() {
    // Each line is a path element
    const rows = this.canvas
      .select('g.lines')
      .selectAll('path.row')
      .data(this.data.data.filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow))), d => d.geography)
      .join(enter => enter.append('path'))
      .attr('class', 'row')
      .style('pointer-events', 'none')
      .attr('fill', 'none');

    rows.exit().remove();

    rows
      .transition()
      .duration(100)
      .delay((d, i) => i * 30)
      .attr('d', d => {
        if (d.values[this.series].length > 1) {
          return this.line(d.values[this.series]);
        } else {
          const path = this.line(d.values[this.series]).split('Z')[0];
          return `${path} h-15 Z`;
        }
      })
      .attr('stroke', d => (d.avgRow ? color.purple : d.totalRow ? 'black' : d.color))
      .attr('stroke-width', d => (this.highlight === d.geography ? 5 : d.avgRow || d.totalRow ? 5 : 3))
      .attr('stroke-opacity', d => {
        if (this.highlight) {
          return this.highlight === d.geography ? 1 : 0.15;
        } else {
          return d.totalRow || d.avgRow ? 1 : 0.4;
        }
      })
      .style('stroke-dasharray', d => (d.totalRow ? '4,3' : ''));
  };

  this.setScales = function() {
    this.y.max =
      d3.max(
        this.data.data
          .filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow)))
          .map(row => d3.max(row.values[this.series].map(d => d[this.method])))
      ) * 1.05;
    this.y.min =
      d3.min(
        this.data.data
          .filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow)))
          .map(row => d3.min(row.values[this.series].map(d => d[this.method])))
      ) / 1.05;

    // Find min and max years for the data
    const maxYear = this.parseYear(
      d3.max(
        this.data.data.map(row => {
          if (!row.values || !row.values.length) return;
          return row.values.map(val => val[val.length - 1].date);
        })
      )[0]
    );
    const minYear = this.parseYear(
      d3.min(
        this.data.data.map(row => {
          if (!row.values || !row.values.length) return;
          return row.values.map(val => val[0].date);
        })
      )[0]
    );

    this.x = d3
      .scaleTime()
      .domain([d3.timeMonth.offset(minYear, 0), d3.timeMonth.offset(maxYear, 0)])
      .range([0, this.width])
      .nice();

    this.y = d3
      .scaleLinear()
      .domain([this.y.min, this.y.max])
      .range([this.height, 0])
      .nice();
  };

  this.drawAxis = function() {
    this.yAxis
      .transition()
      .duration(this.duration)
      .call(
        d3
          .axisLeft(this.y)
          .ticks(this.height / 30)
          .tickFormat(d => this.format(d, this.method, true))
      );
    this.xAxis
      .attr('transform', `translate(0, ${this.height})`)
      .transition()
      .duration(this.duration)
      .call(d3.axisBottom(this.x).ticks(d3.timeYear));
  };

  this.init(svg);
}

export default Template;
