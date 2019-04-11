/**
 * Template for dot plot for mean age and box plot for median age
 * (the dots are rendered as lines)
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'f';

  this.padding = { top: 90, left: 250, right: 20, bottom: 1 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;

  // Define withs of both charts.
  // gapX is the space between them.
  this.gapX = 70;
  this.width1 = (this.width - this.gapX) / 2;
  this.width2 = (this.width - this.gapX) / 2;

  // Scales for the two charts
  this.x = d3.scaleLinear();
  this.x2 = d3.scaleLinear();

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    this.width = d3.max([this.width, 360]);

    // Find quartiles, mean and median for each geography
    data.data = data.data
      .map(district => {
        if (district.low) return district;
        let ages = [];
        district.values.forEach((val, age) => {
          for (let i = 0; i < val.value; i++) {
            ages.push(age);
          }
        });
        district.low = d3.quantile(ages, 0.25);
        district.median = d3.quantile(ages, 0.5);
        district.high = d3.quantile(ages, 0.75);
        district.mean = Math.round(d3.mean(ages) * 100) / 100;

        return district;
      })
      .sort((a, b) => {
        if (b.totalRow) return -3;
        if (b.avgRow) return -2;
        return a.mean - b.mean;
      });

    this.svg
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.width + this.padding.left + this.padding.right);

    this.drawScales();
    this.drawAxisLabels();
    this.drawRows();
    this.drawSource(
      'Statistisk sentralbyrå (test)',
      this.padding.top + this.height + this.padding.bottom + this.sourceHeight
    );
    this.drawTable();
  };

  this.created = function() {
    this.canvas
      .append('text')
      .attr('class', 'label-median')
      .attr('font-size', 13)
      .attr('y', -40)
      .attr('x', this.width1 + this.gapX + this.width2 / 2)
      .attr('text-anchor', 'middle')
      .text('Aldersfordeling og medianalder');

    this.canvas
      .append('text')
      .attr('class', 'label-mean')
      .attr('font-size', 13)
      .attr('y', -40)
      .attr('x', this.width1 / 2)
      .attr('text-anchor', 'middle')
      .text('Gjennomsnittsalder');
  };

  this.drawTable = function() {
    const thead = this.table.select('thead');
    const tbody = this.table.select('tbody');
    this.table.select('caption').text(this.data.meta.heading);

    thead.selectAll('*').remove();
    tbody.selectAll('*').remove();

    const hrow = thead.append('tr');

    hrow
      .selectAll('th')
      .data(() => ['Geografi', 'Gjennomsnittsalder', 'Medianalder'])
      .join('th')
      .attr('scope', 'col')
      .text(d => d);

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
      .data(d => [d.mean, d.median])
      .join('td')
      .text(d => d);
  };

  this.initRowElements = function(rowsE) {
    rowsE.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

    // Row fill
    rowsE
      .append('rect')
      .attr('class', 'rowFill')
      .attr('fill', color.purple)
      .attr('height', this.rowHeight)
      .attr('x', -this.padding.left)
      .attr('width', this.width + this.padding.left + this.padding.right);

    // Row divider
    rowsE
      .append('rect')
      .attr('class', 'divider')
      .attr('fill', color.purple)
      .attr('x', -this.padding.left)
      .attr('width', this.width + this.padding.left + this.padding.right)
      .attr('height', 1)
      .attr('y', this.rowHeight);

    // Row Geography
    rowsE
      .append('text')
      .attr('class', 'geography')
      .attr('fill', color.purple)
      .attr('y', this.rowHeight / 2 + 6)
      .attr('x', -this.padding.left + 10);

    // Box
    rowsE
      .append('rect')
      .attr('class', 'box')
      .attr('fill', color.purple)
      .attr('stroke', color.purple)
      .attr('stroke-width', 1)
      .attr('fill-opacity', 0.2)
      .attr('rx', 2)
      .attr('shape-rendering', 'geometricPrecision')
      .attr('height', this.barHeight)
      .attr('x', d => this.gapX + this.width1 + this.x2(d.low))
      .attr('y', (this.rowHeight - this.barHeight) / 2);

    // Median Age
    rowsE
      .append('text')
      .attr('class', 'median-value')
      .attr('text-anchor', 'start')
      .attr('font-size', 12)
      .attr('font-weight', 700)
      .attr('y', this.rowHeight / 2 + 5);

    // Median stroke
    rowsE
      .append('rect')
      .attr('class', 'median-stroke')
      .attr('fill', color.purple)
      .attr('height', this.rowHeight)
      .attr('width', 3)
      .attr('shape-rendering', 'geometricPrecision')
      .attr('transform', `translate(-1.5, 0)`)
      .attr('y', 0)
      .attr('x', this.gapX + this.width1);

    // Mean Age
    rowsE
      .append('text')
      .attr('class', 'mean-value')
      .attr('text-anchor', 'start')
      .attr('font-size', 12)
      .attr('font-weight', 700)
      .attr('y', this.rowHeight / 2 + 5);

    // Mean Stroke
    rowsE
      .append('rect')
      .attr('class', 'mean-stroke')
      .attr('fill', color.purple)
      .attr('height', this.rowHeight)
      .attr('width', 3)
      .attr('shape-rendering', 'geometricPrecision')
      .attr('transform', `translate(-1.5, 0)`)
      .attr('y', 0);
  };

  // Updates the text and position for both
  // axis labels on each render
  this.drawAxisLabels = function() {
    this.canvas
      .select('text.label-median')
      .transition()
      .duration(this.duration)
      .attr('x', this.width1 + this.gapX + this.width2 / 2);

    this.canvas
      .select('text.label-mean')
      .transition()
      .duration(this.duration)
      .attr('x', this.width1 / 2);
  };

  // Updates the scales and axis for the two
  // charts on each render.
  this.drawScales = function() {
    this.width1 = (this.width - this.gapX) / 2;
    this.width2 = (this.width - this.gapX) / 2;
    this.x2
      .range([0, this.width2])
      .domain([0, 70])
      .nice();
    this.x2Axis
      .transition()
      .duration(this.duration)
      .call(
        d3
          .axisTop(this.x2)
          .tickFormat(d => `${d} år`)
          .ticks(this.width2 / 60)
      )
      .attr('transform', `translate(${this.width1 + this.gapX})`);

    this.x
      .range([0, this.width1])
      .domain([d3.min(this.data.data.map(d => d.mean)), d3.max(this.data.data.map(d => d.mean))])
      .nice();
    this.xAxis
      .transition()
      .duration(this.duration)
      .call(
        d3
          .axisTop(this.x)
          .tickFormat(d => `${d} år`)
          .ticks(this.width2 / 60)
      );
  };

  // Update the contents for each row on each
  // render
  this.drawRows = function() {
    let rows = this.canvas.selectAll('g.row').data(this.data.data);
    const rowsE = rows
      .enter()
      .append('g')
      .attr('class', 'row');
    rows.exit().remove();
    rows = rows.merge(rowsE);

    // Create elements on each row that's created on enter
    this.initRowElements(rowsE);

    // Update row geography, style and position
    rows.select('text.geography').attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));
    rows.select('rect.rowFill').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.05 : 0));
    rows.select('rect.divider').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2));
    rows
      .transition()
      .duration(this.duration)
      .attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
    rows.select('text.geography').text(d => util.truncate(d.geography, this.padding.left));

    rows
      .select('text.median-value')
      .text(d => d.median)
      .transition()
      .duration(this.duration)
      .attr('x', d => this.gapX + this.width1 + this.x2(d.median) + 6);

    rows
      .select('text.mean-value')
      .text(d => d.mean)
      .transition()
      .duration(this.duration)
      .attr('x', d => this.x(d.mean) + 6);

    rows
      .select('rect.mean-stroke')
      .transition()
      .duration(this.duration)
      .attr('x', d => this.x(d.mean));
    rows
      .select('rect.median-stroke')
      .transition()
      .duration(this.duration)
      .attr('x', d => this.gapX + this.width1 + this.x2(d.median));
    rows
      .select('rect.box')
      .transition()
      .duration(this.duration)
      .attr('x', d => this.gapX + this.width1 + this.x2(d.low))
      .attr('width', d => this.x2(d.high) - this.x2(d.low));

    rows
      .select('rect.rowFill')
      .transition()
      .duration(this.duration)
      .attr('width', this.width + this.padding.left + this.padding.right);
    rows
      .select('rect.divider')
      .transition()
      .duration(this.duration)
      .attr('width', this.width + this.padding.left + this.padding.right);
  };

  this.init(svg);
}

export default Template;
