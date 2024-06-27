/**
 * Template for stacked bar charts with positive and negative values
 * aligned at 0.
 */

import { legendColor } from 'd3-svg-legend';
import d3 from '@/assets/d3';
import BaseTemplate from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import { showTooltipOver, showTooltipMove, hideTooltip } from '../tooltip';

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'stackedBars';

  this.padding = { top: 90, left: 240, right: 20, bottom: 58 };
  this.x = d3.scaleLinear();
  this.bars = null;
  this.colors = d3
    .scaleOrdinal()
    .domain([1, 0, 2, 3])
    .range([d3.interpolateRdBu(0.1), d3.interpolateRdBu(0.25), d3.interpolateRdBu(0.75), d3.interpolateRdBu(0.9)]);

  this.render = function (data, options = {}) {
    if (options.method === 'value') {
      data.data = data.data.filter((row) => {
        return !row.avgRow && !row.totalRow ? row : false;
      });
    }

    if (!this.commonRender(data, options)) return;

    // Convert first two values into negative numbers
    // to support the concept of 'positive' and 'negative'
    // values in this chart.
    this.data.data = data.data.map((district) => {
      district.values.forEach((val, i) => {
        if (i === 0 || i === 1) {
          district.values[i][this.method] = Math.abs(district.values[i][this.method]) * -1;
        }
      });
      return district;
    });

    this.width = d3.max([this.width, 420]);

    // Resize svg based on number of rows and container width
    this.svg
      .transition()
      .duration(this.duration)
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.width + this.padding.left + this.padding.right);

    this.drawRows();
    this.drawTable();

    // Move the 'zero line' to the x's zero position
    this.canvas
      .select('line.zero')
      .attr('y1', 0)
      .attr('y2', this.height)
      .transition()
      .duration(this.duration)
      .attr('x1', this.x(0))
      .attr('x2', this.x(0));

    // Move the x labels to either side of the x's 0 position
    this.canvas.select('text.label-min').attr('x', this.x(0) - 15);
    this.canvas.select('text.label-max').attr('x', this.x(0) + 15);

    updateLegend.call(this);
  };

  this.created = function () {
    // Add two labels above the xAxis
    this.canvas
      .append('text')
      .attr('class', 'label-min')
      .attr('font-size', 13)
      .attr('y', -34)
      .attr('text-anchor', 'end')
      .text('Under 1 rom per person');

    this.canvas
      .append('text')
      .attr('class', 'label-max')
      .attr('font-size', 13)
      .attr('y', -34)
      .attr('text-anchor', 'start')
      .text('1 rom eller mer per person');

    // Containers for rows and bars need to be in this order
    // to allow pointer events on bars
    this.canvas.append('g').attr('class', 'rows');
    this.bars = this.canvas.append('g').attr('class', 'bars');

    // Create the 'zero line' last to ensure it's always on top (thus visible)
    this.canvas.append('line').attr('class', 'zero').attr('stroke-width', 1.5).attr('stroke', 'black');

    this.canvas.append('g').classed('legend', true);
  };

  this.drawTable = function () {
    const tableData = JSON.parse(JSON.stringify(this.data.data)).sort(this.tableSort);
    const tableHead = ['Geografi', ...this.data.meta.series.map((d) => `${d.heading} ${d.subheading}`)];
    const tableBody = tableData.map((row) => {
      return {
        key: row.geography,
        values: row.values.map((d) => Math.abs(d[this.method])),
      };
    });

    const tableGenerator = util.drawTable.bind(this);
    tableGenerator(tableHead, tableBody);
  };

  // Updates the rows
  this.drawRows = function () {
    const rows = this.canvas.select('g.rows').selectAll('g.row').data(this.data.data).join(enterRows.bind(this));

    rows.select('text.geography').call(styleRowGeography.bind(this));
    rows.select('rect.rowFill').call(styleRowFill.bind(this));
    rows.select('rect.divider').call(styleRowDivider.bind(this));

    // Vertically position the rows
    rows.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

    // Update the row label (geography)
    rows.select('text.geography').text((d) => util.truncate(d.geography, this.padding.left));

    // Create the stack data using the .offset method to create negative values
    // The order of keys in the .keys() method determines the order of the series
    // in the stack
    const seriesData = d3.stack().keys([1, 0, 2, 3]).offset(d3.stackOffsetDiverging)(
      this.data.data.map((district) => district.values.map((d) => d[this.method]))
    );

    // Update the xAxis using the seriesData
    this.xAxis.call(updateXAxis.bind(this), seriesData);

    // Create series
    const series = this.bars
      .selectAll('g.series')
      .data(seriesData)
      .join('g')
      .classed('series', true)
      .attr('fill', (d, i) => this.colors(i));

    // Create bars
    const bar = series
      .selectAll('rect')
      .data((d) => d)
      .join('rect')
      .attr('y', (d, i) => i * this.rowHeight + (this.rowHeight - this.barHeight) / 2)
      .attr('height', this.barHeight);

    bar
      .transition()
      .duration(this.duration)
      .attr('x', (d) => this.x(d[0]))
      .attr('width', (d) => this.x(d[1]) - this.x(d[0]));

    // Show and hide tooltips
    bar.call(handleMouseEvents.bind(this));
  };

  this.init(svg);
}

export default Template;

function updateLegend() {
  const legend = legendColor()
    .scale(this.colors)
    .labels(['Under 0,5 rom', '0,5–0,9 rom', '1–1,9 rom', '2+ rom'])
    .orient('horizontal')
    .shapeHeight(10)
    .shapeWidth(90);

  this.svg
    .select('.legend')
    .attr('transform', `translate(${0}, ${this.height + 32})`)
    .call(legend);
}

function initRowFill(selection) {
  selection
    .attr('class', 'rowFill')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('x', -this.padding.left)
    .attr('width', this.width + this.padding.left);
}

function styleRowFill(selection) {
  selection
    .transition()
    .duration(this.duration)
    .attr('width', this.padding.left + this.width + this.padding.right)
    .attr('fill-opacity', (d) => (d.avgRow || d.totalRow ? 0.05 : 0));
}

function initRowDivider(selection) {
  selection
    .attr('class', 'divider')
    .attr('fill', color.purple)
    .attr('x', -this.padding.left)
    .attr('width', this.width + this.padding.left)
    .attr('height', 1)
    .attr('y', this.rowHeight);
}

function styleRowDivider(selection) {
  selection
    .transition()
    .duration(this.duration)
    .attr('width', this.padding.left + this.width + this.padding.right)
    .attr('fill-opacity', (d) => (d.avgRow || d.totalRow ? 0.5 : 0.2));
}

function initRowGeography(selection) {
  selection
    .attr('class', 'geography')
    .attr('fill', color.purple)
    .attr('y', this.rowHeight / 2 + 6)
    .attr('x', -this.padding.left + 10);
}

function styleRowGeography(selection) {
  selection.attr('font-weight', (d) => (d.avgRow || d.totalRow ? 700 : 400));
}

function handleMouseEvents(selection) {
  selection
    .on('mouseenter', (e, d) => {
      const value = this.method === 'ratio' ? `${Math.round((d[1] - d[0]) * 100)}%` : d[1] - d[0];
      showTooltipOver(value);
    })
    .on('mousemove', showTooltipMove)
    .on('mouseleave', hideTooltip);
}

function enterRows(enter) {
  const g = enter.append('g').attr('class', 'row');
  g.append('rect').call(initRowFill.bind(this));
  g.append('rect').call(initRowDivider.bind(this));
  g.append('text').call(initRowGeography.bind(this));
  return g;
}

function updateXAxis(selection, seriesData) {
  // Find the minimum and maximum values (and add a bit of padding) for the x scale
  const min = d3.min(seriesData.map((serie) => d3.min(serie.map((d) => d[0])))) * 1.1;
  const max = d3.max(seriesData.map((serie) => d3.max(serie.map((d) => d[1])))) * 1.1;

  // Set the x-scale's domain and range
  this.x.domain([min, max]).range([0, this.width]).nice();

  // Update the xAxis using the x-scale
  // Calculate the number of ticks based on the width.
  selection.call(
    d3
      .axisTop(this.x)
      .ticks(this.width / 60)
      .tickFormat((d) => this.format(Math.abs(d), this.method, true))
  );
}
