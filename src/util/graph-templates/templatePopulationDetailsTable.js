/**
 * Template for tabular chart with bar charts for population,
 * population density and population change last year plus
 * sparklines for population change last 10 years.
 */

import BaseTemplate from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import d3 from '@/assets/d3';

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'populationDetailsTable';

  this.padding = { top: 90, left: 180, right: 20, bottom: 1 };
  this.x = d3.scaleBand();

  // Data for svg paths for
  const arrowPaths = {
    up: 'M1 2V1 0h12v12l-1 1h-1v-1h-1V5l-8 8H1l-1-1v-1l8-8H1V2z',
    down: 'M11 1h2v12H1v-2l1-1h6L0 2V1l1-1h1l8 8V2l1-1z',
  };

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    this.width = d3.max([this.width, 560]);

    this.svg
      .transition()
      .duration(this.duration)
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.x.domain(this.data.meta.series.map((d, i) => i)).range([0, this.width]);

    this.drawRows();
    this.drawColumnHeaders();
    this.drawTable();
  };

  this.created = function() {};

  this.drawTable = function() {
    const tableData = JSON.parse(JSON.stringify(this.data.data));
    const tableHead = ['Geografi', ...this.data.meta.series.map(d => d.heading)];
    const tableBody = tableData.map(d => {
      return {
        key: d.geography,
        values: [d.values[0], d.values[1], d.values[2]],
      };
    });

    const tableGenerator = util.drawTable.bind(this);
    tableGenerator(tableHead, tableBody);
  };

  this.initRowElements = function(rowsE) {
    // Row fill
    rowsE
      .append('rect')
      .attr('class', 'rowFill')
      .attr('fill', color.purple)
      .attr('height', this.rowHeight);

    // Row divider
    rowsE
      .append('rect')
      .attr('class', 'divider')
      .attr('fill', color.purple)
      .attr('height', 1)
      .attr('y', this.rowHeight);

    // Row Geography
    rowsE
      .append('text')
      .attr('class', 'geography')
      .attr('fill', color.purple)
      .attr('y', this.rowHeight / 2 + 6)
      .attr('x', 10);

    // Population
    rowsE
      .append('text')
      .attr('class', 'population__value')
      .attr('text-anchor', 'end')
      .attr('y', this.rowHeight / 2 + 6);
    rowsE
      .append('rect')
      .attr('class', 'population__bar')
      .attr('fill', color.purple)
      .attr('height', this.barHeight)
      .attr('y', (this.rowHeight - this.barHeight) / 2);

    rowsE
      .append('text')
      .attr('class', 'progress-year__value')
      .attr('text-anchor', 'end')
      .attr('y', this.rowHeight / 2 + 6);

    rowsE
      .append('g')
      .attr('class', 'progress-year__arrow')
      .append('path');

    rowsE
      .append('rect')
      .attr('class', 'progress-year__bar')
      .attr('height', this.barHeight)
      .attr('y', (this.rowHeight - this.barHeight) / 2);

    // Progress (period)
    rowsE
      .append('text')
      .attr('class', 'progress-period__value')
      .attr('text-anchor', 'end')
      .attr('y', this.rowHeight / 2 + 6);

    rowsE
      .append('g')
      .attr('class', 'progress-period__arrow')
      .append('path');

    rowsE
      .append('path')
      .attr('class', 'progress-year__line')
      .attr('fill', 'none')
      .attr('stroke', color.purple)
      .attr('stroke-width', 2);
  };

  this.renderPopulation = function(rows) {
    const x = d3
      .scaleLinear()
      .range([0, this.x.bandwidth() / 2])
      .domain([0, d3.max(this.data.data.filter(d => (d.avgRow || d.totalRow ? false : d)).map(d => d.values[0]))]);

    rows
      .select('text.population__value')
      .attr('font-weight', d => (d.avgRow || d.totalRow ? 500 : 400))
      .text(d => this.format(d.values[0], 'value'))
      .attr('x', this.x(0) + this.x.bandwidth() / 2 - 8);

    rows
      .select('rect.population__bar')
      .attr('x', this.x(0) + this.x.bandwidth() / 2)
      .transition()
      .duration(this.duration)
      .attr('width', d => (d.avgRow || d.totalRow ? 0 : x(d.values[0])));
  };

  this.renderProgressYear = function(rows) {
    const x = d3
      .scaleLinear()
      .range([0, this.x.bandwidth() / 2])
      .domain([
        0,
        d3.max(this.data.data.filter(d => (d.avgRow || d.totalRow ? false : d)).map(d => Math.abs(d.values[1]))),
      ]);

    rows
      .select('text.progress-year__value')
      .attr('font-weight', d => (d.avgRow || d.totalRow ? 500 : 400))
      .attr('x', this.x(1) + this.x.bandwidth() / 2 - 30)
      .text(d => this.format(d.values[1], 'change'));
    rows
      .select('rect.progress-year__bar')
      .attr('fill', d => (d.values[1] > 0 ? color.positive : color.red))
      .attr('x', this.x(1) + this.x.bandwidth() / 2)
      .transition()
      .duration(this.duration)
      .attr('width', d => (d.avgRow || d.totalRow ? 0 : x(Math.abs(d.values[1]))));
    rows
      .select('g.progress-year__arrow path')
      .attr('fill', d => (d.values[1] > 0 ? color.positive : color.red))
      .attr(
        'transform',
        `translate(${this.x(1) + this.x.bandwidth() / 2 - 22}, ${(this.rowHeight - this.barHeight) / 2 + 4})`
      )
      .transition()
      .duration(100)
      .attr('d', d => {
        if (d.values[1] === 0) return '';
        if (d.values[1] > 0) return arrowPaths.up;
        return arrowPaths.down;
      });
  };

  /**
   * Period chart is called on each row in order to set a relative
   * scale on the y axis.
   */
  this.renderProgressPeriod = function(data, index, arr) {
    const min = d3.min(data.values[3]) / 1.05;
    const max = d3.max(data.values[3]) * 1.05;
    const row = d3.select(arr[index]);

    const x = d3
      .scaleLinear()
      .range([0, this.x.bandwidth() / 2])
      .domain([0, data.values[3].length]);

    const y = d3
      .scaleLinear()
      .range([this.rowHeight, 0])
      .domain([min, max]);

    const line = d3
      .line()
      .x((d, i) => x(i))
      .y(d => y(d));

    row
      .select('text.progress-period__value')
      .attr('x', this.x(2) + this.x.bandwidth() / 2 - 30)
      .attr('font-weight', d => (d.avgRow || d.totalRow ? 500 : 400))
      .text(d => this.format(d.values[2], 'change'));

    row
      .select('g.progress-period__arrow path')
      .attr('fill', d => (d.values[2] > 0 ? color.positive : color.red))
      .attr(
        'transform',
        `translate(${this.x(2) + this.x.bandwidth() / 2 - 22}, ${(this.rowHeight - this.barHeight) / 2 + 4})`
      )
      .transition()
      .duration(100)
      .attr('d', d => {
        if (d.values[2] === 0) return '';
        if (d.values[2] > 2) return arrowPaths.up;
        return arrowPaths.down;
      });

    row
      .select('path.progress-year__line')
      .attr('transform', `translate(${this.x(2) + this.x.bandwidth() / 2}, 0)`)
      .transition()
      .duration(this.duration)
      .attr('d', d => line(d.values[3]));
  };

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
    rows
      .select('text.geography')
      .attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400))
      .attr('transform', `translate(${-this.padding.left}, ${0})`);
    rows
      .select('rect.rowFill')
      .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.05 : 0))
      .attr('width', this.padding.left + this.width + this.padding.right)
      .attr('transform', `translate(${-this.padding.left}, ${0})`);
    rows
      .select('rect.divider')
      .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2))
      .attr('width', this.padding.left + this.width + this.padding.right)
      .attr('transform', `translate(${-this.padding.left}, ${0})`);
    rows.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
    rows.select('text.geography').text(d => util.truncate(d.geography, this.padding.left));

    this.renderPopulation(rows);
    this.renderProgressYear(rows);
    rows.each((row, index, array) => this.renderProgressPeriod(row, index, array));
  };

  this.drawColumnHeaders = function() {
    let column = this.canvas.selectAll('g.column').data(this.data.meta.series);
    const columnE = column
      .enter()
      .append('g')
      .attr('class', 'column');
    column.exit().remove();
    column = column.merge(columnE);

    columnE
      .append('text')
      .attr('class', 'heading')
      .attr('font-size', 14)
      .attr('font-weight', 400)
      .attr('text-anchor', 'middle');
    columnE
      .append('text')
      .attr('class', 'subHeading')
      .attr('font-size', 12.5)
      .attr('font-weight', 400)
      .attr('text-anchor', 'middle')
      .attr('y', 16);

    column.attr('transform', (d, i) => `translate(${this.x(i) + this.x.bandwidth() / 2}, -30)`);

    column.select('text.heading').text(d => (d.heading ? d.heading : ''));
    column.select('text.subHeading').text(d => (d.subheading ? d.subheading : ''));
  };

  this.init(svg);
}

export default Template;
