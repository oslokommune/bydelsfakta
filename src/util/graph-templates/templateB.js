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

function intersects(a, b) {
  var det, gamma, lambda;
  det = (a.x2 - a.x1) * (b.y2 - b.y1) - (b.x2 - b.x1) * (a.y2 - a.y1);
  if (det === 0) {
    return false;
  } else {
    lambda = ((b.y2 - b.y1) * (b.x2 - a.x1) + (b.x1 - b.x2) * (b.y2 - a.y1)) / det;
    gamma = ((a.y1 - a.y2) * (b.x2 - a.x1) + (a.x2 - a.x1) * (b.y2 - a.y1)) / det;
    return 0 < lambda && lambda < 1 && (0 < gamma && gamma < 1);
  }
}

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding = { top: 50, right: 190, bottom: 32, left: 60 };

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

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
    this.drawDirectLabels();
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
    .curve(d3.curveCardinal)
    .x(d => this.x(this.parseYear(d.date)))
    .y(d => {
      return this.y(d[this.method]);
    });

  this.drawVoronoi = function() {
    let flattenData = this.data.data
      .map(geo => geo.values.map(val => ({ date: val['date'], value: val[this.method], geography: geo.geography })))
      .flat();

    let voronoiData = d3
      .voronoi()
      .extent([[1, 1], [this.width, this.height]])
      .x(d => this.x(this.parseYear(d['date'])))
      .y(d => this.y(d.value))
      .polygons(flattenData);

    let voronoiCells = this.canvas
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
      let geography = j[i].__data__.data.geography;
      let date = j[i]['__data__']['data']['date'];

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
      let geography = j[i].__data__.data.geography;

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
    let thead = this.table.select('thead');
    let tbody = this.table.select('tbody');
    this.table.select('caption').text(this.data.meta.heading);

    thead.selectAll('*').remove();
    tbody.selectAll('*').remove();

    let hRow1 = thead.append('tr');
    let hRow2 = thead.append('tr');

    let dates = new Set();
    this.data.data.forEach(row => {
      row.values.forEach(d => {
        dates.add(d['date']);
      });
    });
    dates = [...dates];

    hRow1
      .selectAll('th')
      .data(() => ['Geografi', 'År'])
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

    let rows = tbody
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
      .data(d => d.values)
      .join('td')
      .text(d => this.format(d[this.method], this.method));
  };

  /**
   * Direct labels are drawn near lines where there's room
   * for them. This is acheived by finding the largest
   * voronoi cell for each line and sorting them, storing only
   * the 4 largest to limit to maximum 4 direct labels.
   * The labels are offset by shifting them towards the center
   * point its voronoi cell (centroid) by the distance
   * stored in the local 'distance' constant.
   * To calculate if there's room for the label to be drawn
   * we check for collisions with (each part of) each line,
   * and remove the ones who collide.
   */
  this.drawDirectLabels = function() {
    // Find the voronoi cells
    let cells = this.canvas.select('g.voronoi').selectAll('path');

    // Find each cell's area and centroid and sort by area
    let areas = [];
    cells.each(d => {
      areas.push({
        area: d3.polygonArea(d),
        centroid: d3.polygonCentroid(d),
        data: d.data,
      });
    });
    areas.sort((a, b) => b.area - a.area);

    // Nest cells by their geography and save only
    // the labels for the largest 4 cells
    areas = d3
      .nest()
      .key(d => d.data.geography)
      .entries(areas)
      .filter((d, i) => i < 4);

    // Create the text labels for each of these geographies
    // and for each of them check to see if they collide
    // with any lines and offset them in the right direction
    // towards the voronoi's centroid point.
    let label = this.canvas
      .selectAll('g.direct')
      .data(areas, d => d)
      .join(
        enter => {
          let g = enter
            .append('g')
            .attr('class', 'direct')
            .attr('opacity', 0);
          g.append('rect');
          g.append('text');
          return g;
        },
        update => update
      )
      .style('pointer-events', 'none')
      .each((d, i, j) => {
        const el = d3.select(j[i]);
        const position = [this.x(this.parseYear(d.values[0]['data']['date'])), this.y(d.values[0].data.value)];
        const centroid = d.values[0].centroid;
        const angle = Math.atan2(centroid[1] - position[1], centroid[0] - position[0]);
        const distance = 20;
        const box = el.node().getBBox();

        // Location of the position where it should sit
        const target = {
          x: Math.cos(angle) * distance + position[0],
          y: Math.sin(angle) * distance + position[1],
        };

        // Coordinates bottom two corners of text box
        let a = {
          x1: target.x - box.width / 2,
          y1: target.y + box.height,
          x2: target.x + box.width / 2,
          y2: target.y + box.height,
        };

        // If angle is negative, use the top corners instead
        if (angle < 0) {
          a.y1 = target.y;
          a.y2 = target.y;
        }

        // Counter for number of collisions
        let collisions = 0;

        // Test if the label collides any lines
        this.canvas.selectAll('path.row').each(d => {
          let val = d.values;
          for (let i = 0; i < val.length - 1; i++) {
            let b = {
              x1: this.x(this.parseYear(val[i]['date'])),
              y1: this.y(val[i].value),
              x2: this.x(this.parseYear(val[i + 1]['date'])),
              y2: this.y(val[i + 1].value),
            };
            if (intersects(a, b)) collisions++;
          }
        });

        // Do not use the label if it collides with
        // the canvas's edges
        if (a.x2 > this.width || a.x1 < 0) {
          el.remove();
        }

        // Move the label to the target position if there's
        // no collisions, or remove it if there are any.
        if (collisions < 2) {
          el.attr('transform', `translate(${target.x}, ${target.y})`);
        } else {
          el.remove();
        }
      });

    label
      .attr('opacity', 0.6)
      .select('text')
      .attr('font-size', 11)
      .attr('text-anchor', 'middle')
      .attr('y', 5)
      .text(d => d.key);

    label
      .select('rect')
      .attr('height', '1.5em')
      .attr('y', -10)
      .attr('fill', 'white')
      .attr('x', (d, i, j) => {
        let textWidth = d3
          .select(j[i].parentNode)
          .select('text')
          .node()
          .getBBox().width;
        return (textWidth / 2 + 5) * -1;
      })
      .attr('width', (d, i, j) => {
        let textWidth = d3
          .select(j[i].parentNode)
          .select('text')
          .node()
          .getBBox().width;
        return textWidth + 10;
      })
      .attr('rx', 3);
  };

  this.drawDots = function() {
    let dotgroup = this.canvas
      .select('g.dots')
      .selectAll('g.dotgroup')
      .data(this.data.data, d => d.geography)
      .join('g')
      .attr('class', 'dotgroup');

    let dot = dotgroup
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
      .attr('y', d => this.y(d.value))
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
      .attr('cy', d => this.y(d.value));
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
      .attr('opacity', d => {
        if (d.avgRow || d.totalRow) return 1;
        return 0.45;
      });

    this.canvas.selectAll('text.direct').attr('opacity', 0.6);

    this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .select('text')
      .attr('font-weight', d => {
        if (d.avgRow || d.totalRow) return 700;
        return 400;
      });

    this.canvas
      .select('g.lines')
      .selectAll('path.row')
      .attr('stroke-width', d => {
        if (d.avgRow) return 5;
        return 2;
      })
      .attr('stroke-opacity', d => {
        if (d.totalRow || d.avgRow) return 1;
        return 0.2;
      });
  };

  // Updates labels on the right hand side
  this.drawLabels = function() {
    let labelPositions = positionLabels(
      this.data.data.map(row => {
        row.y = this.y(row.values[row.values.length - 1][this.method]);
        return row;
      }),
      this.height
    );

    let labels = this.canvas
      .select('g.labels')
      .selectAll('g.label')
      .data(labelPositions, d => d.geography)
      .join(
        enter => {
          let g = enter.append('g');
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
    labels.on('click keyup', (d, i, j) => {
      if (d3.event && d3.event.type === 'click') j[i].blur();
      if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
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
      .attr('stroke', (d, i, j) => {
        if (d.totalRow) return 'black';
        if (d.avgRow) return color.yellow;
        return d3.interpolateRainbow(i / j.length);
      })
      .style('stroke-dasharray', d => {
        if (d.totalRow) return '2,1';
      });

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
      .attr('transform', (d, i) => `translate(0, ${labelPositions[i].start})`)
      .attr('opacity', (d, i) => {
        if (this.highlight >= 0) {
          return this.highlight === i ? 1 : 0.1;
        }
        if (d.avgRow || d.totalRow) return 1;
        return 0.45;
      });

    // Update content in the <title> element
    labels.select('title').html(d => d.geography);
  };

  // Updates the shape and style of the lines in the line chart
  this.drawLines = function() {
    // Each line is a path element
    this.canvas
      .select('g.lines')
      .selectAll('path.row')
      .data(this.data.data, d => d.geography)
      .join(enter => {
        return enter.append('path').attr('d', d => {
          let initialData = d.values.map(val => {
            return {
              date: val['date'],
              value: 0,
            };
          });
          return this.line(initialData);
        });
      })
      .attr('class', 'row')
      .style('pointer-events', 'none')
      .attr('fill', 'none')
      .transition()
      .duration(250)
      .delay((d, i) => i * 30)
      .attr('d', d => this.line(d.values))
      .attr('stroke', (d, i, j) => {
        if (d.totalRow) return 'black';
        if (d.avgRow) return color.yellow;
        return d3.interpolateRainbow(i / j.length);
      })
      .attr('stroke-width', (d, i) => {
        if (this.highlight === i) return 5;
        if (d.avgRow) return 5;
        return 2;
      })
      .attr('stroke-opacity', (d, i) => {
        if (this.highlight >= 0 && this.highlight !== i) return 0.1;
        if (this.highlight >= 0 && this.highlight === i) return 1;
        if (d.totalRow || d.avgRow) return 1;
        return 0.2;
      })
      .style('stroke-dasharray', d => {
        if (d.totalRow) return '4,3';
      });
  };

  // Resets the scales based on the provided data on each render
  this.setScales = function() {
    // Find the min and max values and add some padding
    this.y.max =
      d3.max(
        this.data.data.map(row => {
          return d3.max(row.values.map(d => d[this.method]));
        })
      ) * 1.1;

    this.y.min = d3.min(this.data.data.map(row => d3.min(row.values.map(d => d[this.method])))) * 0.8;

    let minDate = d3.min(this.data.data.map(d => d.values[0].date).map(this.parseYear));
    let maxDate = d3.max(this.data.data.map(d => d.values[d.values.length - 1].date).map(this.parseYear));

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
    let yearCount = d3.timeYear.count(...this.x.domain());

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
