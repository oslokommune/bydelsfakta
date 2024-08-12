/**
 * Template for comparing 8 different variables
 */

import { legendColor } from 'd3-svg-legend';
import d3 from '@/assets/d3';
import BaseTemplate from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import { showTooltipOver, showTooltipMove, hideTooltip } from '../tooltip';

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'livingConditions';

  this.padding = { top: 140, left: 200, right: 20, bottom: 50 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;

  // Scales for the two charts
  this.colPos = d3.scaleBand().paddingInner(0.25);
  this.x = [];

  this.render = function (data, options = {}) {
    data.data = data.data.filter((d) => !d.totalRow);

    options.highlight = options.highlight || 0;
    if (!this.commonRender(data, options)) return;

    // Sort data on the highlighted series
    this.data.data.sort((a, b) => {
      return b.values[this.highlight][this.mode] - a.values[this.highlight][this.mode];
    });

    // Set height + width to the SVG
    this.svg.call(updateSvgSize.bind(this)).call(updateLegend.bind(this));

    // Set scales for each of the series
    this.x = updateScales.call(this);

    // Update columns and rows
    this.canvas.call(drawColumns.bind(this)).call(drawRows.bind(this));

    // Update table data
    util.drawTable.apply(this, generateTableData.call(this));
  };

  this.created = function () {
    this.svg.append('g').attr('class', 'legend');
    this.canvas.append('g').classed('rows', true);
    this.canvas.append('g').classed('columns', true);
  };

  this.init(svg);
}

export default Template;

const colorScale = d3
  .scaleThreshold()
  .domain([0.7, 0.85, 0.96, 1.04, 1.4, 1.8])
  .range([
    d3.interpolateRdBu(0.95),
    d3.interpolateRdBu(0.8),
    d3.interpolateRdBu(0.7),
    d3.color(d3.interpolateRdBu(0.5)).darker(0.3),
    d3.interpolateRdBu(0.3),
    d3.interpolateRdBu(0.15),
    d3.interpolateRdBu(0),
  ]);

function updateLegend(svg) {
  const shapeWidth = 90;
  const count = colorScale.range().length;
  const padding = 2;
  const legendWidth = shapeWidth * count + padding * (count - 1);

  const districtGeo = this.data.data.filter((geo) => geo.avgRow)[0]
    ? this.data.data.filter((geo) => geo.avgRow)[0].geography
    : 'bydelen';
  const compareWith = this.mode === 'osloRatio' ? 'Oslo' : districtGeo;

  const legend = legendColor()
    .scale(colorScale)
    .orient('horizontal')
    .labels(
      colorScale.range().map((d, i, j) => {
        if (i === 0) return `Lavere forekomst enn i ${compareWith}`;
        if (i === j.length - 1) return `Høyere forekomst enn i ${compareWith}`;
        return '';
      })
    )
    .shapeHeight(10)
    .labelDelimiter('–')
    .labelAlign('start')
    .shapeWidth(shapeWidth);

  const w = (this.width + this.padding.left + this.padding.right) / 2 - legendWidth / 2;
  const h = this.padding.top + this.height + this.padding.bottom - 16;

  svg
    .select('.legend')
    .attr('transform', `translate(${w}, ${h})`)
    .call(legend)
    .selectAll('text')
    .filter((d, i, j) => i === j.length - 1)
    .style('text-anchor', 'end')
    .attr('x', shapeWidth);
}

function updateRows(g) {
  g.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
  // Dynamic styling, sizing and positioning based on data and container size

  g.select('rect.rowFill')
    .attr('fill-opacity', (d) => (d.avgRow || d.totalRow ? 0 : 0))
    .attr('width', this.padding.left + this.width + this.padding.right);

  g.select('rect.divider')
    .attr('fill-opacity', () => {
      if (this.data.meta.series.length === 1) return 0;
      return this.isMobileView ? 0 : 0.2;
    })
    .attr('width', this.padding.left + this.width + this.padding.right);

  g.select('text.geography')
    .attr('x', -this.padding.left)
    .text((d) => d.geography);

  g.select('.bars')
    .selectAll('rect')
    .data((d) => d.values)
    .join('rect')
    .call(updateBars.bind(this))
    .call(handleMouseEvents.bind(this));

  g.select('.comparisonMarkers')
    .selectAll('line')
    .data((d) => d.values)
    .join((enter) => {
      return enter
        .append('line')
        .attr('y1', 11)
        .attr('y2', this.rowHeight - 11)
        .attr('stroke', 'black')
        .attr('opacity', 0.5);
    })
    .attr('x1', (d, i) => this.colPos(this.data.meta.series[i].heading) + this.x[i](1))
    .attr('x2', (d, i) => this.colPos(this.data.meta.series[i].heading) + this.x[i](1));
}

function enterColumns(enter) {
  const group = enter.append('g').classed('column', true);
  group.append('line');
  group
    .append('g')
    .attr('transform', `translate(0,-40) rotate(-12)`)
    .classed('textgroup', true)
    .append('text')
    .classed('heading', true);
  group.append('g').classed('axis', true).attr('transform', `translate(0, -10)`);

  group
    .append('rect')
    .attr('class', 'clicky')
    .append('title')
    .text((d) => `Sorter etter ${d.heading}`);

  return group;
}

function drawColumns(selection) {
  selection
    .select('.columns')
    .selectAll('g.column')
    .data(this.data.meta.series, (d) => d.heading)
    .join(enterColumns.bind(this))
    .call(updateColPosition.bind(this))
    .call(updateColClicky.bind(this))
    .call(updateColHeading.bind(this))
    .call(updateColLine.bind(this))
    .call(updateColAxis.bind(this))
    .on('click', ({ currentTarget }) => {
      const i = selection.selectAll('g.column').nodes().indexOf(currentTarget);
      this.render(this.data, { highlight: i });
    });
}

function updateBars(selection) {
  selection
    .attr('height', this.rowHeight - 8)
    .attr('width', (d, i) => this.x[i](d[this.mode]))
    .attr('y', 4)
    .attr('x', (d, i) => this.colPos(this.data.meta.series[i].heading))
    .attr('fill', (d) => colorScale(d[this.mode]));
}

// Update the contents for each row on each
// render
function drawRows(selection) {
  selection
    .select('.rows')
    .selectAll('g.row')
    .data(this.data.data, (d) => d.geography)
    .join(enterRows.bind(this))
    .call(updateRows.bind(this));
}

function enterRows(enter) {
  const g = enter.append('g').attr('class', 'row');

  // Row fill
  g.insert('rect')
    .attr('class', 'rowFill')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('x', -this.padding.left)
    .attr('width', this.width + this.padding.left);

  // Row divider
  g.insert('rect')
    .attr('class', 'divider')
    .attr('fill', color.purple)
    .attr('x', -this.padding.left)
    .attr('width', this.width + this.padding.left)
    .attr('height', 1)
    .attr('y', this.rowHeight);

  // Text element
  g.append('text')
    .attr('class', 'geography')
    .attr('fill', color.purple)
    .attr('y', this.rowHeight / 2 + 6)
    .on('click', util.goto);

  g.append('g').attr('class', 'bars');
  g.append('g').attr('class', 'comparisonMarkers');

  g.append('text').attr('class', 'valueText').attr('fill', color.purple);

  return g;
}

function handleMouseEvents(selection) {
  selection
    .on('mouseover', (e, d) => showTooltipOver(d3.format('.0%')(d[this.mode])))
    .on('mousemove', showTooltipMove)
    .on('mouseleave', hideTooltip);
}

function updateColPosition(selection) {
  selection.attr('transform', (d) => `translate(${this.colPos(d.heading)}, 0)`);
}

function updateColClicky(selection) {
  selection
    .select('rect.clicky')
    .attr('fill', 'transparent')
    .attr('height', 110)
    .attr('width', this.colPos.bandwidth())
    .attr('y', -120)
    .attr('cursor', 'pointer');
}

function updateColHeading(selection) {
  selection
    .select('.heading')
    .text((d) => d.heading)
    .style('cursor', 'normal');
}

function updateColLine(selection) {
  selection
    .select('line')
    .attr('stroke', 'black')
    .attr('y1', -10)
    .attr('y2', this.height)
    .attr('x1', (d, i) => this.x[i](0))
    .attr('x2', (d, i) => this.x[i](0));
}

function updateColAxis(selection) {
  selection.each((d, i, j) => {
    d3.select(j[i])
      .select('.axis')
      .call(d3.axisTop(this.x[i]).ticks(2).tickFormat(d3.format(',.1p')));
  });
}

function generateTableData() {
  const tableData = JSON.parse(JSON.stringify(this.data.data)).sort(this.tableSort);
  const tableHead = [['Geografi', 'Prosentandel'], [...this.data.meta.series.map((d) => `${d.heading}`)]];
  const tableBody = tableData.map((row) => {
    return {
      key: row.geography,
      values: row.values.map((value) => value[this.mode]),
    };
  });

  return [tableHead, tableBody];
}

function updateScales() {
  this.colPos.rangeRound([0, this.width]).domain(this.data.meta.series.map((d) => d.heading));
  const bw = this.colPos.bandwidth();

  return this.data.meta.series.map((series, i) => {
    const max = d3.max([...this.data.data.map((geo) => geo.values[i][this.mode]), 2]);
    return d3.scaleLinear().range([0, bw]).domain([0, max]).nice();
  });
}

function updateSvgSize(selection) {
  const minWidth = 360; // The SVG's minimum allowed width

  this.width = d3.max([this.width, minWidth]);

  const h = this.padding.top + this.height + this.padding.bottom + this.sourceHeight;
  const w = this.width + this.padding.left + this.padding.right;

  selection.attr('height', h).attr('width', w);
}
