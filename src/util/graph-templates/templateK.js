/**
 * Template for comparing 8 different variables
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import d3 from '@/assets/d3';
import { showTooltipOver, showTooltipMove, hideTooltip } from '../tooltip';
import { state } from '@/store';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'k';

  this.padding = { top: 140, left: 200, right: 20, bottom: 50 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;
  this.legendBox;

  // Scales for the two charts
  this.colPos = d3.scaleBand().paddingInner(0.25);
  this.x = [];

  this.render = function(data, options = {}) {
    data.data = data.data.filter(d => !d.totalRow);
    if (!this.commonRender(data, options)) return;

    this.width = d3.max([this.width, 360]);
    this.svg
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.width + this.padding.left + this.padding.right);

    this.drawScales();
    drawColumns(this);
    drawRows(this);
    this.drawSource(
      'Statistisk sentralbyrå (test)',
      this.padding.top + this.height + this.padding.bottom + this.sourceHeight
    );
    this.drawTable();

    if (state.ie11) {
      this.drawIeLegend();
    } else {
      this.drawFlexLegend();
    }
  };

  this.created = function() {
    // Create container for legend box
    if (state.ie11) {
      this.legendBox = this.svg.append('g').attr('class', 'legend');
    } else {
      this.legendBox = this.svg.append('foreignObject').attr('height', 40);
    }
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

  this.drawTable = function() {
    const thead = this.table.select('thead');
    const tbody = this.table.select('tbody');

    thead.selectAll('*').remove();
    tbody.selectAll('*').remove();

    const hrow = thead.append('tr');

    hrow
      .selectAll('th')
      .data(() => ['Geografi', ...this.data.meta.series.map(d => d.heading)])
      .join('th')
      .attr('scope', 'col')
      .text(d => d);

    const tableData = JSON.parse(JSON.stringify(this.data.data));

    const rows = tbody
      .selectAll('tr')
      .data(tableData.sort(this.tableSort))
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
      .data(d => d.values.map(value => this.format(value[this.mode], this.method, false, true)))
      .join('td')
      .text(d => d);
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

  // Updates the legends on each render
  this.drawFlexLegend = function() {
    const districtGeo = this.data.data.filter(geo => geo.avgRow)[0]
      ? this.data.data.filter(geo => geo.avgRow)[0].geography
      : 'bydelen';
    const compareWith = this.mode === 'osloRatio' ? 'Oslo' : districtGeo;

    let legendHtml = `<div class="graphlegend">`;

    legendHtml += `<div class="graphlegend__item"><span class="graphlegend__swatch" style="background:${fill(
      0.7
    )};"></span><span class="graphlegend__label">${'Lavere forekomst enn i '}${compareWith}</span></div>`;
    legendHtml += `<div class="graphlegend__item"><span class="graphlegend__swatch" style="background:${fill(
      1.5
    )};"></span><span class="graphlegend__label">${'Høyere forekomst enn i '}${compareWith}</span></div>`;
    legendHtml += '</div>';

    // Resize and re-position the legend box based on the height of the svg
    this.legendBox
      .attr('width', this.width + this.padding.left + this.padding.right)
      .html(legendHtml)
      .attr('transform', `translate(0, ${this.height + this.padding.top + this.padding.bottom / 2 - 8})`);
  };

  this.drawIeLegend = function() {
    const districtGeo = this.data.data.filter(geo => geo.avgRow)[0]
      ? this.data.data.filter(geo => geo.avgRow)[0].geography
      : 'bydelen';
    const compareWith = this.mode === 'osloRatio' ? 'Oslo' : districtGeo;

    // Re-position the legend box based on the height of the svg
    this.legendBox.attr('transform', `translate(0, ${this.height + this.padding.top + this.padding.bottom / 2 - 8})`);

    // Standard select/enter/update/exit pattern for each series
    let group = this.legendBox
      .selectAll('g.group')
      .data([`Lavere forekomst enn i ${compareWith}`, `Høyere forekomst enn i ${compareWith}`]);
    const groupE = group
      .enter()
      .append('g')
      .attr('class', 'group');
    group.exit().remove();
    group = group.merge(groupE);

    // Create DOM elements for newly created legend groups (series)
    groupE
      .append('rect')
      .attr('height', 16)
      .attr('width', 16)
      .attr('rx', 3)
      // Cheap trick to ensure correct colors on the legend
      .attr('fill', (d, i) => (i === 0 ? fill(0.7) : fill(1.5)));
    groupE.append('text').attr('y', 8);

    // Update the label for each series in the legend
    group
      .select('text')
      .text(d => d)
      .attr('y', 12)
      .attr('x', 20)
      .attr('font-size', 12);
    group.attr(
      'transform',
      (d, i) => `translate(${i * ((this.width + this.padding.left + this.padding.right) / 4)}, 0)`
    );
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

function drawColumns(self) {
  let columns = self.canvas
    .select('.columns')
    .selectAll('g.column')
    .data(self.data.meta.series)
    .join(
      enter => enterColumns(self, enter),
      update => update.attr('transform', d => `translate(${self.colPos(d.heading)}, 0)`)
    );

  columns.select('.heading').text(d => d.heading);

  columns
    .select('line')
    .attr('stroke', 'black')
    .attr('y1', -10)
    .attr('y2', self.height)
    .attr('x1', (d, i) => self.x[i](0))
    .attr('x2', (d, i) => self.x[i](0));

  columns.each((d, i, j) => {
    d3.select(j[i])
      .select('.axis')
      .call(
        d3
          .axisTop(self.x[i])
          .ticks(2)
          .tickFormat(d3.format(',.0p'))
      );
  });
}

// Update the contents for each row on each
// render
function drawRows(self) {
  let rows = self.canvas
    .select('.rows')
    .selectAll('g.row')
    .data(self.data.data)
    .join(g => self.initRowElements(g));

  updateRows(self, rows);
}
