/**
 * Template for comparing 8 different variables
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import d3 from '@/assets/d3';
import { showTooltipOver, showTooltipMove, hideTooltip } from '../tooltip';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'k';

  this.padding = { top: 140, left: 200, right: 20, bottom: 10 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;

  // Scales for the two charts
  this.colPos = d3.scaleBand().paddingInner(0.25);
  this.x = [];

  this.render = function(data, options = {}) {
    data.data = data.data.filter(d => !d.avgRow && !d.totalRow);
    if (!this.commonRender(data, options)) return;

    this.width = d3.max([this.width, 360]);
    this.svg
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.width + this.padding.left + this.padding.right);

    this.drawScales();
    // this.drawAxisLabels();
    this.drawColumns();
    this.drawRows();
    this.drawSource(
      'Statistisk sentralbyrå (test)',
      this.padding.top + this.height + this.padding.bottom + this.sourceHeight
    );
    // this.drawTable();
  };

  this.created = function() {
    this.canvas.append('g').classed('rows', true);
    this.canvas.append('g').classed('columns', true);
  };

  // Updates the scales
  this.drawScales = function() {
    this.colPos.rangeRound([0, this.width]).domain(this.data.meta.series.map(d => d.heading));

    const bw = this.colPos.bandwidth();

    this.x = this.data.meta.series.map((series, i) => {
      const max = d3.max([...this.data.data.map(geo => geo.values[i][this.mode]), 2]);

      return d3
        .scaleLinear()
        .range([0, bw])
        .domain([0, max])
        .nice();
    });
  };

  this.drawColumns = function() {
    let columns = this.canvas
      .select('.columns')
      .selectAll('g.column')
      .data(this.data.meta.series)
      .join(
        enter => enterColumns(this, enter),
        update => update.attr('transform', d => `translate(${this.colPos(d.heading)}, 0)`)
      );

    columns.select('.heading').text(d => d.heading);

    columns
      .select('line')
      .attr('stroke', 'black')
      .attr('y1', -10)
      .attr('y2', this.height)
      .attr('x1', (d, i) => this.x[i](0))
      .attr('x2', (d, i) => this.x[i](0));

    columns.each((d, i, j) => {
      d3.select(j[i])
        .select('.axis')
        .call(
          d3
            .axisTop(this.x[i])
            .ticks(2)
            .tickFormat(d3.format(',.0p'))
        );
    });
  };

  // Update the contents for each row on each
  // render
  this.drawRows = function() {
    let rows = this.canvas
      .select('.rows')
      .selectAll('g.row')
      .data(this.data.data)
      .join(g => this.initRowElements(g));

    updateRows(this, rows);
  };

  this.initRowElements = function(el) {
    const g = el.append('g').attr('class', 'row');

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

    g.append('text')
      .attr('class', 'valueText')
      .attr('fill', color.purple);

    return g;
  };

  this.init(svg);
}

export default Template;

const fill = d3
  .scaleThreshold()
  .domain([0.7, 0.9, 1.15, 1.5])
  .range([
    d3.color('#4F4E6A'),
    d3.color('#838296'),
    d3.color(color.grey).darker(0.3),
    d3.color('#834B44'),
    d3.color('#C57066'),
  ]);

function updateRows(self, g) {
  g.attr('transform', (d, i) => `translate(0, ${i * self.rowHeight})`);
  // Dynamic styling, sizing and positioning based on data and container size
  g.select('rect.rowFill')
    .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0 : 0))
    .attr('width', self.padding.left + self.width + self.padding.right);
  g.select('rect.divider')
    .attr('fill-opacity', d => {
      if (self.data.meta.series.length === 1) return 0;
      return self.isMobileView ? 0 : d.avgRow || d.totalRow ? 0.5 : 0.2;
    })
    .attr('width', self.padding.left + self.width + self.padding.right);
  g.select('text.geography')
    .attr('x', -self.padding.left)
    .text(d => d.geography);

  let bars = g
    .select('.bars')
    .selectAll('rect')
    .data(d => d.values)
    .join('rect');

  bars
    .attr('height', self.rowHeight - 8)
    .attr('width', (d, i) => {
      return self.x[i](d[self.mode]);
    })
    .attr('y', 4)
    .attr('x', (d, i) => self.colPos(self.data.meta.series[i].heading))
    .attr('fill', d => fill(d[self.mode]));

  bars
    .on('mouseover', d => showTooltipOver(self.format(d[self.mode], 'ratio')))
    .on('mousemove', showTooltipMove)
    .on('mouseleave', hideTooltip);
}

function enterColumns(self, g) {
  const group = g.append('g').classed('column', true);
  group.append('line');
  group
    .append('g')
    .attr('transform', `translate(0,-40) rotate(-12)`)
    .classed('textgroup', true)
    .append('text')
    .classed('heading', true);
  group
    .append('g')
    .classed('axis', true)
    .attr('transform', `translate(0, -10)`);
  return group;
}
