/**
 * Template for single series multi-line chart.
 *
 * A details box appears when rendered with 'highlight' parameter
 * defined in the options object
 */

import { voronoi } from 'd3-voronoi';
import d3 from '@/assets/d3';
import BaseTemplate from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import positionLabels from '../positionLabels';

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'lines';

  this.padding = { top: 50, right: 190, bottom: 32, left: 70 };

  this.render = function (data, options = {}) {
    if (!this.commonRender(data, options)) return;

    // temp fix until highlight is id-based in all templates
    if (this.highlight === -1) {
      this.highlight = false;
    }

    this.data.data.forEach((geo, i, j) => {
      // Add colors to geographies if they don't already exist
      geo.color = d3.interpolateTurbo(i / j.length);

      // Sort values by year
      geo.values.sort((a, b) => {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      });
    });

    this.width = d3.max([this.width, 300]);
    this.height = d3.max([480, this.width * 0.5]);

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
    }
    this.hideMessage();

    this.drawLines();
    this.drawAxis();
    this.drawLabels();
    this.drawDots();
    this.drawVoronoi();
  };

  this.created = function () {
    this.canvas.append('g').attr('class', 'lines');
    this.canvas.append('g').attr('class', 'dots');
    this.canvas.append('g').attr('class', 'voronoi');
    this.canvas.append('g').attr('class', 'labels');
  };

  // Line generator for converting values to a data string for svg:paths
  this.line = d3
    .line()
    .x((d) => this.x(this.parseYear(d.date)))
    .y((d) => this.y(d[this.method]));

  this.drawVoronoi = function () {
    const flattenData = this.data.data
      .filter((d) => !(this.method === 'value' && (d.avgRow || d.totalRow)))
      .map((geo) => geo.values.map((val) => ({ date: val.date, value: val[this.method], geography: geo.geography })))
      .reduce((acc, val) => acc.concat(val), []);

    // TODO: The `d3-voronoi` module is now obsolete, and d3@6 bundles the `d3-delaunay` module instead.
    // It can still be loaded as an independent module, but should be replaced by `d3-delaunay`. The
    // API, algorithms, and data structure have been changed.
    // See https://observablehq.com/@d3/d3v6-migration-guide#delaunay.
    const voronoiData = voronoi()
      .extent([
        [1, 1],
        [this.width, this.height],
      ])
      .x((d) => this.x(this.parseYear(d.date)))
      .y((d) => this.y(d.value))
      .polygons(flattenData)
      .filter((d) => d || false)
      .map((arr) => {
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
      .attr('d', (d) => `M${d.join('L')}Z`)
      .attr('fill-opacity', 0);

    // Highlight a geography when hovering the chart. If the
    // chart is rendered with a geography highlighted, then only
    // the selected geography will be affected by hover.
    voronoiCells.on('mouseover', (e, d) => {
      const { geography } = e.currentTarget.__data__.data;
      const { date } = e.currentTarget.__data__.data;

      if (!this.highlight || this.highlight === d.data.geography) {
        this.canvas.selectAll('g.dot').attr('opacity', 0);
        this.canvas
          .selectAll('g.dotgroup')
          .filter((dot) => {
            if (dot.geography === geography) {
              this.handleMouseover(dot.geography);
              return true;
            }
            return false;
          })
          .selectAll('g.dot')
          .filter((dot) => dot.date === date)
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
    voronoiCells.on('click', (e, d) => {
      if (this.highlight === d.data.geography) {
        this.render(this.data, { method: this.method, highlight: false });
      } else {
        this.render(this.data, {
          method: this.method,
          highlight: d.data.geography,
        });
      }
    });
  };

  this.drawTable = function () {
    let dates = new Set();
    this.data.data.forEach((row) => {
      row.values.forEach((d) => {
        dates.add(d.date);
      });
    });
    dates = [...dates].map((d) => this.formatYear(this.parseYear(d)));

    const tableHead = [['Geografi', this.method === 'ratio' ? 'Prosentandel' : 'Antall'], dates];

    const tableBody = JSON.parse(JSON.stringify(this.data.data))
      .sort(this.tableSort)
      .map((d) => {
        d.values = dates.map(
          (date) => d.values.find((obj) => +obj.date === +date) || { date, ratio: 'N/A', value: 'N/A' }
        );
        return d;
      })
      .map((row) => {
        return {
          key: row.geography,
          values: row.values.map((d) => d[this.method]),
        };
      });

    const tableGenerator = util.drawTable.bind(this);
    tableGenerator(tableHead, tableBody);
  };

  this.drawDots = function () {
    const dotgroup = this.canvas
      .select('g.dots')
      .selectAll('g.dotgroup')
      .data(
        this.data.data.filter((d) => !(this.method === 'value' && (d.avgRow || d.totalRow))),
        (d) => d.geography
      )
      .join('g')
      .attr('class', 'dotgroup');

    const dot = dotgroup
      .selectAll('g.dot')
      .data(
        (d) => d.values,
        (d) => d.geography
      )
      .join((enter) => {
        const g = enter.append('g');
        g.append('text');
        g.append('circle');
        return g;
      })
      .attr('class', 'dot')
      .attr('opacity', 0)
      .style('pointer-events', 'none');

    dot
      .select('text')
      .text((d) => {
        if (d && d[this.method]) {
          return this.format(d[this.method], this.method);
        }
        return '';
      })
      .attr('x', (d) => this.x(this.parseYear(d.date)))
      .attr('y', (d) => this.y(d[this.method]))
      .attr('font-size', 11)
      .attr('transform', `translate(0, -11)`)
      .attr('text-anchor', (d) => {
        const pos = this.x(this.parseYear(d.date));
        if (pos < 50) {
          return 'start';
        }
        if (pos > this.width - 50) {
          return 'end';
        }
        return 'middle';
      })
      .style('pointer-events', 'none');

    dot
      .select('circle')
      .attr('r', 4)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('cx', (d) => this.x(this.parseYear(d.date)))
      .attr('cy', (d) => this.y(d[this.method]));
  };

  this.handleMouseover = function (geo) {
    this.canvas.select('g.labels').selectAll('g.label').attr('opacity', 0.5);

    this.canvas.selectAll('text.direct').attr('opacity', 0);

    this.canvas.select('g.labels').selectAll('g.label').select('text').attr('font-weight', 400);

    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .filter((d) => d.geography === geo)
      .attr('opacity', 1)
      .select('text')
      .attr('font-weight', 700);

    this.canvas
      .select('g.lines')
      .selectAll('path.row')
      .attr('stroke-opacity', 0.1)
      .attr('stroke-width', 3)
      .filter((d) => d.geography === geo)
      .attr('stroke-opacity', 1)
      .attr('stroke-width', 5);
  };

  this.handleMouseleave = function () {
    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .attr('opacity', (d) => (d.avgRow || d.totalRow ? 1 : 0.45));

    this.canvas.selectAll('text.direct').attr('opacity', 0.6);

    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .select('text')
      .attr('font-weight', (d) => (d.avgRow || d.totalRow ? 700 : 400));

    this.canvas
      .select('g.lines')
      .selectAll('path.row')
      .attr('stroke-width', (d) => (d.avgRow ? 5 : 3))
      .attr('stroke-opacity', (d) => (d.totalRow || d.avgRow ? 1 : 0.4));
  };

  // Updates labels on the right hand side
  this.drawLabels = function () {
    const labelPositions = positionLabels(
      this.data.data
        .filter((d) => {
          if (d.avgRow || d.totalRow) {
            return this.y(d.values[d.values.length - 1][this.method]) > 0;
          }
          return true;
        })
        .map((row) => {
          row.y = this.y(row.values[row.values.length - 1][this.method]);
          return row;
        }),
      this.height
    );

    const labels = this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .data(labelPositions, (d) => d.geography)
      .join(
        (enter) => {
          const g = enter.append('g');
          g.append('line')
            .attr('stroke-width', 9)
            .attr('x1', this.width + 22)
            .attr('x2', this.width + 31);
          g.append('text').attr('x', this.width + 35);
          g.append('title');
          return g;
        },
        (update) => update,
        (exit) => exit.remove()
      )
      .attr('class', 'label')
      .style('cursor', 'pointer')
      .attr('tabindex', 0);

    // Click label to render with highlight
    labels.on('click', (e, d) => {
      const i = this.data.data.find((row) => row.geography === d.geography).geography;

      if (i === this.highlight) {
        this.render(this.data, { method: this.method, highlight: false });
      } else {
        this.render(this.data, { method: this.method, highlight: i });
      }
    });

    // Hover label to highlight itself and its corresponding line
    labels.on('mouseover', (e, d) => {
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

    labels
      .select('line')
      .transition()
      .duration(this.duration)
      .attr('x1', this.width + 22)
      .attr('x2', this.width + 31)
      .attr('stroke', (d) => {
        if (d.totalRow) return 'black';
        if (d.avgRow) return color.purple;
        return d.color;
      })
      .style('stroke-dasharray', (d) => (d.totalRow ? '2,1' : ''));

    // Update the text string and position.
    // Default opacity is low to allow labels overlapping
    labels
      .select('text')
      .transition()
      .duration(this.duration)
      .text((d) => util.truncate(d.geography, this.padding.right - 40))
      .attr('x', this.width + 35)
      .attr('y', 5)
      .attr('font-weight', (d) => {
        if (this.highlight) {
          return this.highlight === d.geography ? 700 : 400;
        }

        if (d.avgRow || d.totalRow) return 700;
        return 400;
      });

    labels
      .transition()
      .duration(this.duration)
      .attr('transform', (d) => `translate(0, ${d.start})`)
      .attr('opacity', (d) => {
        if (this.highlight) {
          return this.highlight === d.geography ? 1 : 0.6;
        }
        if (d.avgRow || d.totalRow) {
          return 1;
        }
        return 0.6;
      });

    // Update content in the <title> element
    labels.select('title').html((d) => d.geography);
  };

  // Updates the shape and style of the lines in the line chart
  this.drawLines = function () {
    // Each line is a path element
    this.canvas
      .select('g.lines')
      .selectAll('path.row')
      .data(
        this.data.data.filter((d) => {
          if (d.avgRow || d.totalRow) {
            return this.y(d.values[d.values.length - 1][this.method]) > 0;
          }
          return true;
        }),
        (d) => d.geography
      )
      .join('path')
      .attr('class', 'row')
      .style('pointer-events', 'none')
      .attr('fill', 'none')
      .transition()
      .duration(250)
      .delay((d, i) => i * 30)
      .attr('d', (d) => {
        if (d.values.length > 1) {
          return this.line(d.values);
        }
        const path = this.line(d.values).split('Z')[0];
        return `${path} h-15 Z`;
      })
      .attr('stroke', (d) => {
        if (d.totalRow) return 'black';
        if (d.avgRow) return color.purple;
        return d.color;
      })
      .attr('stroke-width', (d) => {
        if (this.highlight === d.geography) return 5;
        if (d.avgRow || d.totalRow) return 5;
        return 3;
      })
      .attr('stroke-opacity', (d) => {
        if (this.highlight) {
          return this.highlight === d.geography ? 1 : 0.15;
        }
        return d.totalRow || d.avgRow ? 1 : 0.4;
      })
      .style('stroke-dasharray', (d) => (d.totalRow ? '4,3' : ''))
      .each((d, i, j) => {
        if (this.highlight === d.geography) {
          d3.select(j[i]).raise();
        }
      });
  };

  // Resets the scales based on the provided data on each render
  this.setScales = function () {
    // Find the min and max values and add some padding
    this.y.max =
      d3.max(
        this.data.data
          .filter((d) => !(this.method === 'value' && (d.avgRow || d.totalRow)))
          .map((row) => d3.max(row.values.map((d) => d[this.method])))
      ) * 1.1;

    this.y.min =
      d3.min(
        this.data.data
          .filter((d) => !(this.method === 'value' && (d.avgRow || d.totalRow)))
          .map((row) => d3.min(row.values.map((d) => d[this.method])))
      ) * 0.8;

    const dates = this.data.data.map((geo) => geo.values.map((val) => val.date)).flat();
    const dateExtent = d3.extent(dates).map(this.parseYear);

    // Set the xScale (time dimension) range and domain
    this.x = d3.scaleTime().domain(dateExtent).range([0, this.width]);

    // Set the y scale based on max and min values
    this.y = d3.scaleLinear().domain([this.y.min, this.y.max]).range([this.height, 0]).nice();
  };

  // Renders axis based on the updated scales
  this.drawAxis = function () {
    this.yAxis.transition().call(
      d3
        .axisLeft(this.y)
        .ticks(this.height / 40)
        .tickFormat((d) => this.format(d, this.method, true))
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
