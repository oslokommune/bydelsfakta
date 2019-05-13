/**
 * Template for single series multi-line chart.
 *
 * A details box appears when rendered with 'highlight' parameter
 * defined in the options object
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import d3 from '@/assets/d3';
import positionLabels from '../positionLabels';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'b';

  this.padding = { top: 50, right: 190, bottom: 32, left: 60 };

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    this.data.data = this.data.data.map((geo, i, j) => {
      geo.color = d3.interpolateRainbow(i / j.length);
      return geo;
    });

    this.width = d3.max([this.width, 300]);
    this.height = d3.max([480, this.width * 0.5]);

    this.svg
      .transition()
      .duration(this.duration)
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.setScales();
    this.drawLines();
    this.drawAxis();
    this.drawLabels();
    this.drawDots();
    this.drawVoronoi();
    this.drawSource(
      'Statistisk sentralbyrå (test)',
      this.padding.top + this.height + this.padding.bottom + this.sourceHeight
    );
    this.drawTable();
  };

  this.created = function() {
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

  this.drawVoronoi = function() {
    const flattenData = this.data.data
      .filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow)))
      .map(geo => geo.values.map(val => ({ date: val['date'], value: val[this.method], geography: geo.geography })))
      .flat();

    const voronoiData = d3
      .voronoi()
      .extent([[1, 1], [this.width, this.height]])
      .x(d => this.x(this.parseYear(d['date'])))
      .y(d => this.y(d.value))
      .polygons(flattenData)
      .filter(d => (d ? d : false))
      .map(arr => {
        arr.forEach((d, i) => {
          d[0] = Math.round(d[0]);
          d[1] = Math.round(d[1]);
          arr[i] = d;
        });
        return arr;
      });

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
      const date = j[i]['__data__']['data']['date'];

      if (this.highlight === -1 || this.data.data.findIndex(d => d.geography === geography) === this.highlight) {
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
          .filter(dot => dot['date'] === date)
          .attr('opacity', 1);
      }
    });

    // Remove highlight on mouse leave
    voronoiCells.on('mouseleave', () => {
      if (this.highlight === -1) {
        this.canvas.selectAll('g.dot').attr('opacity', 0);
        this.handleMouseleave();
      }
    });

    // When clicking a voronoi cell, the graph should re-render
    // with the selected geography highlighted. If the geography
    // is alredady selected, then we re-render with no highlight.
    voronoiCells.on('click', (d, i, j) => {
      const geography = j[i].__data__.data.geography;

      if (this.highlight >= 0 && this.data.data.findIndex(d => d.geography === geography) === this.highlight) {
        this.render(this.data, { method: this.method, highlight: -1 });
      } else {
        this.render(this.data, {
          method: this.method,
          highlight: this.data.data.findIndex(d => d.geography === geography),
        });
      }
    });
  };

  this.drawTable = function() {
    const thead = this.table.select('thead');
    const tbody = this.table.select('tbody');

    thead.selectAll('*').remove();
    tbody.selectAll('*').remove();

    const hRow1 = thead.append('tr');
    const hRow2 = thead.append('tr');

    let dates = new Set();
    this.data.data.forEach(row => {
      row.values.forEach(d => {
        dates.add(d['date']);
      });
    });
    dates = [...dates];

    hRow1
      .selectAll('th')
      .data(() => [
        'Geografi',
        (() => {
          return this.method === 'ratio' ? 'Andel (%)' : 'Antall';
        })(),
      ])
      .join('th')
      .attr('rowspan', (d, i) => (i === 0 ? 2 : 1))
      .attr('colspan', (d, i) => (i === 1 ? dates.length : 1))
      .attr('scope', 'col')
      .text(d => d);

    hRow2
      .selectAll('th')
      .data(dates)
      .join('th')
      .text(d => this.formatYear(this.parseYear(d)));

    const rows = tbody
      .selectAll('tr')
      .data(this.data.data)
      .join('tr');

    // Geography cells
    rows
      .selectAll('th')
      .data(d => [d.geography])
      .join('th')
      .attr('scope', 'row')
      .text(d => d);

    // Value cells
    rows
      .selectAll('td')
      .data(d => dates.map(date => d.values.find(obj => obj.date === date) || { date, ratio: 'N/A', value: 'N/A' }))
      .join('td')
      .text(d => this.format(d[this.method], this.method, false, true));
  };

  this.drawDots = function() {
    const dotgroup = this.canvas
      .select('g.dots')
      .selectAll('g.dotgroup')
      .data(this.data.data.filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow))), d => d.geography)
      .join('g')
      .attr('class', 'dotgroup');

    const dot = dotgroup
      .selectAll('g.dot')
      .data(d => d.values, d => d.geography)
      .join('g')
      .attr('class', 'dot')
      .attr('opacity', 0)
      .style('pointer-events', 'none');

    dot
      .append('text')
      .text(d => {
        if (d && d[this.method]) {
          return this.format(d[this.method], this.method);
        }
      })
      .attr('x', d => this.x(this.parseYear(d['date'])))
      .attr('y', d => this.y(d[this.method]))
      .attr('font-size', 11)
      .attr('transform', `translate(0, -7)`)
      .attr('text-anchor', 'middle')
      .style('pointer-events', 'none');

    dot
      .append('circle')
      .attr('r', 4)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('cx', d => this.x(this.parseYear(d['date'])))
      .attr('cy', d => this.y(d[this.method]));
  };

  this.handleMouseover = function(geo) {
    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .attr('opacity', 0.5);

    this.canvas.selectAll('text.direct').attr('opacity', 0);

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
      .attr('stroke-opacity', 0.2)
      .attr('stroke-width', 2)
      .filter(d => d.geography === geo)
      .attr('stroke-opacity', 1)
      .attr('stroke-width', 4);
  };

  this.handleMouseleave = function() {
    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .attr('opacity', d => (d.avgRow || d.totalRow ? 1 : 0.45));

    this.canvas.selectAll('text.direct').attr('opacity', 0.6);

    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .select('text')
      .attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));

    this.canvas
      .select('g.lines')
      .selectAll('path.row')
      .attr('stroke-width', d => (d.avgRow ? 5 : 2))
      .attr('stroke-opacity', d => (d.totalRow || d.avgRow ? 1 : 0.4));
  };

  // Updates labels on the right hand side
  this.drawLabels = function() {
    const labelPositions = positionLabels(
      JSON.parse(
        JSON.stringify(
          this.data.data
            .filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow)))
            .map(row => {
              row.y = this.y(row.values[row.values.length - 1][this.method]);
              return row;
            }),
          this.height
        )
      )
    );

    const labels = this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .data(labelPositions, d => d.geography)
      .join(
        enter => {
          const g = enter.append('g');
          g.append('line')
            .attr('stroke-width', 9)
            .attr('x1', this.width + 22)
            .attr('x2', this.width + 31);
          g.append('text').attr('x', this.width + 35);
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
    labels.on('click', d => {
      const i = this.data.data.findIndex(row => row.geography === d.geography);

      if (i === this.highlight) {
        this.render(this.data, { method: this.method, highlight: -1 });
      } else {
        this.render(this.data, { method: this.method, highlight: i });
      }
    });

    // Hover label to highlight itself and its corresponding line
    labels.on('mouseover', d => {
      if (this.highlight === -1) {
        this.handleMouseover(d.geography);
      }
    });

    //
    labels.on('mouseleave', () => {
      if (this.highlight === -1) {
        this.handleMouseleave();
      }
    });

    labels
      .select('line')
      .transition()
      .duration(this.duration)
      .attr('x1', this.width + 22)
      .attr('x2', this.width + 31)
      .attr('stroke', d => (d.totalRow ? 'black' : d.avgRow ? color.yellow : d.color))
      .style('stroke-dasharray', d => (d.totalRow ? '2,1' : false));

    // Update the text string and position.
    // Default opacity is low to allow labels overlapping
    labels
      .select('text')
      .transition()
      .duration(this.duration)
      .text(d => util.truncate(d.geography, this.padding.right - 40))
      .attr('x', this.width + 35)
      .attr('y', 5)
      .attr('font-weight', (d, i) => {
        if (this.highlight >= 0) {
          return this.highlight === i ? 700 : 400;
        }

        if (d.avgRow || d.totalRow) return 700;
        return 400;
      });

    labels
      .transition()
      .duration(this.duration)
      .attr('transform', d => `translate(0, ${d.start})`)
      .attr('opacity', (d, i) => {
        if (this.highlight >= 0) {
          return this.highlight === i ? 1 : 0.6;
        }
        if (d.avgRow || d.totalRow) return 1;
        return 0.6;
      });

    // Update content in the <title> element
    labels.select('title').html(d => d.geography);
  };

  // Updates the shape and style of the lines in the line chart
  this.drawLines = function() {
    // Subtract 1 from highlight when method id 'value'
    // because we're removing 'Oslo' i alt with filter
    if (this.highlight >= 0 && this.method === 'value') {
      this.highlight--;
    }

    // Each line is a path element
    this.canvas
      .select('g.lines')
      .selectAll('path.row')
      .data(this.data.data.filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow))), d => d.geography)
      .join('path')
      .attr('class', 'row')
      .style('pointer-events', 'none')
      .attr('fill', 'none')
      .transition()
      .duration(250)
      .delay((d, i) => i * 30)
      .attr('d', d => this.line(d.values))
      .attr('stroke', d => (d.totalRow ? 'black' : d.avgRow ? color.yellow : d.color))
      .attr('stroke-width', (d, i) => (this.highlight === i ? 5 : d.avgRow ? 5 : 3))
      .attr('stroke-opacity', (d, i) => {
        if (this.highlight >= 0 && this.highlight !== i) return 0.25;
        if (this.highlight >= 0 && this.highlight === i) return 1;
        if (d.totalRow || d.avgRow) return 1;
        return 0.2;
      })
      .style('stroke-dasharray', d => (d.totalRow ? '4,3' : false))
      .each((d, i, j) => {
        if (this.highlight >= 0 && i === this.highlight) {
          d3.select(j[i]).raise();
        }
      });
  };

  // Resets the scales based on the provided data on each render
  this.setScales = function() {
    // Find the min and max values and add some padding
    this.y.max =
      d3.max(
        this.data.data
          .filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow)))
          .map(row => d3.max(row.values.map(d => d[this.method])))
      ) * 1.1;

    this.y.min =
      d3.min(
        this.data.data
          .filter(d => !(this.method === 'value' && (d.avgRow || d.totalRow)))
          .map(row => d3.min(row.values.map(d => d[this.method])))
      ) * 0.8;

    const minDate = d3.min(this.data.data.map(d => d.values[0].date).map(this.parseYear));
    const maxDate = d3.max(this.data.data.map(d => d.values[d.values.length - 1].date).map(this.parseYear));

    // Set the xScale (time dimension) range and domain
    this.x = d3
      .scaleTime()
      .domain([minDate, maxDate])
      .range([0, this.width]);

    // Set the y scale based on max and min values
    this.y = d3
      .scaleLinear()
      .domain([this.y.min, this.y.max])
      .range([this.height, 0])
      .nice();
  };

  // Renders axis based on the updated scales
  this.drawAxis = function() {
    this.yAxis.transition().call(
      d3
        .axisLeft(this.y)
        .ticks(this.height / 30)
        .tickFormat(d => this.format(d, this.method, true))
    );

    // Years between start and end dates
    const yearCount = d3.timeYear.count(...this.x.domain());

    this.xAxis
      .transition()
      .call(
        d3
          .axisBottom(this.x)
          .ticks(d3.min([this.width / 60, yearCount]))
          .tickFormat(this.formatYear)
      )
      .attr('transform', `translate(0, ${this.height})`);
  };

  this.init(svg);
}

export default Template;
