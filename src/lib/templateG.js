import { Base_Template, util } from './baseTemplate';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding = { top: 90, left: 0, right: 20, bottom: 1 };
  this.paddingLeft = 180;
  this.height = 0; // set during render
  this.width = 850;
  this.y = d3.scaleLinear();
  this.x = d3.scaleBand();

  this.created = function() {};

  this.initRowElements = function(rowsE) {
    // Row fill
    rowsE
      .append('rect')
      .attr('class', 'rowFill')
      .attr('fill', util.color.purple)
      .attr('height', this.rowHeight)
      .attr('width', this.width);

    // Row divider
    rowsE
      .append('rect')
      .attr('class', 'divider')
      .attr('fill', util.color.purple)
      .attr('width', this.width)
      .attr('height', 1)
      .attr('y', this.rowHeight);

    // Row Geography
    rowsE
      .append('text')
      .attr('class', 'geography')
      .attr('fill', util.color.purple)
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
      .attr('fill', util.color.purple)
      .attr('height', this.barHeight)
      .attr('y', (this.rowHeight - this.barHeight) / 2);

    // Density
    rowsE
      .append('text')
      .attr('class', 'density__value')
      .attr('text-anchor', 'end')
      .attr('y', this.rowHeight / 2 + 6);
    rowsE
      .append('rect')
      .attr('class', 'density__bar')
      .attr('fill', util.color.purple)
      .attr('height', this.barHeight)
      .attr('y', (this.rowHeight - this.barHeight) / 2);

    // Progress (year)
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
      .attr('stroke', util.color.purple)
      .attr('stroke-width', 2);
  };

  this.renderPopulation = function(rows) {
    let x = d3
      .scaleLinear()
      .range([0, this.x.bandwidth() / 2])
      .domain([0, d3.max(this.data.data.map(d => d.values[0]))]);

    rows
      .select('text.population__value')
      .attr('font-weight', d => (d.avgRow || d.totalRow ? 500 : 400))
      .text(d => d.values[0])
      .attr('x', this.x(0) + this.x.bandwidth() / 2 - 8);

    rows
      .filter(d => !d.avgRow && !d.totalRow)
      .select('rect.population__bar')
      .attr('x', this.x(0) + this.x.bandwidth() / 2)
      .attr('width', d => x(d.values[0]));
  };

  this.renderDensity = function(rows) {
    let x = d3
      .scaleLinear()
      .range([0, this.x.bandwidth() / 2])
      .domain([0, d3.max(this.data.data.map(d => d.values[1]))]);

    rows
      .select('text.density__value')
      .attr('font-weight', d => (d.avgRow || d.totalRow ? 500 : 400))
      .attr('x', this.x(1) + this.x.bandwidth() / 2 - 8)
      .text(d => d.values[1]);
    rows
      .select('rect.density__bar')
      .attr('x', this.x(1) + this.x.bandwidth() / 2)
      .attr('width', d => x(d.values[1]));
  };

  this.renderProgressYear = function(rows) {
    let x = d3
      .scaleLinear()
      .range([0, this.x.bandwidth() / 2])
      .domain([0, d3.max(this.data.data.map(d => Math.abs(d.values[2])))]);

    rows
      .select('text.progress-year__value')
      .attr('font-weight', d => (d.avgRow || d.totalRow ? 500 : 400))
      .attr('x', this.x(2) + this.x.bandwidth() / 2 - 30)
      .text(d => d.values[2]);
    rows
      .filter(d => !d.avgRow && !d.totalRow)
      .select('rect.progress-year__bar')
      .attr('fill', d => (d.values[2] > 0 ? util.color.positive : util.color.red))
      .attr('x', this.x(2) + this.x.bandwidth() / 2)
      .attr('width', d => x(Math.abs(d.values[2])));
    rows
      .select('g.progress-year__arrow path')
      .attr('fill', d => (d.values[2] > 0 ? util.color.positive : util.color.red))
      .attr(
        'transform',
        `translate(${this.x(2) + this.x.bandwidth() / 2 - 22}, ${(this.rowHeight - this.barHeight) / 2 + 4})`
      )
      .attr('d', d =>
        d.values[2] > 0
          ? 'M1 2V1 0h12v12l-1 1h-1v-1h-1V5l-8 8H1l-1-1v-1l8-8H1V2z'
          : 'M11 1h2v12H1v-2l1-1h6L0 2V1l1-1h1l8 8V2l1-1z'
      );
  };

  this.renderProgressPeriod = function(rows) {
    let min = d3.min(this.data.data.map(bydel => d3.min(bydel.values[3])));
    let max = d3.max(this.data.data.map(bydel => d3.max(bydel.values[3])));

    let x = d3
      .scaleLinear()
      .range([0, this.x.bandwidth() / 2])
      .domain([0, this.data.data[0].values[3].length]);

    let y = d3
      .scaleLinear()
      .range([this.rowHeight, 0])
      .domain([min, max]);

    let line = d3
      .line()
      .x((d, i) => x(i))
      .y(d => y(d));

    rows
      .select('text.progress-period__value')
      .attr('x', this.x(3) + this.x.bandwidth() / 2 - 30)
      .attr('font-weight', d => (d.avgRow || d.totalRow ? 500 : 400))
      .text(d => d.values[3][d.values[3].length - 1] - d.values[3][0]);

    rows
      .select('g.progress-period__arrow path')
      .attr('fill', d => (d.values[2] > 0 ? util.color.positive : util.color.red))
      .attr(
        'transform',
        `translate(${this.x(3) + this.x.bandwidth() / 2 - 22}, ${(this.rowHeight - this.barHeight) / 2 + 4})`
      )
      .attr('d', d =>
        d.values[3][d.values[3].length - 1] - d.values[3][0] > 0
          ? 'M1 2V1 0h12v12l-1 1h-1v-1h-1V5l-8 8H1l-1-1v-1l8-8H1V2z'
          : 'M11 1h2v12H1v-2l1-1h6L0 2V1l1-1h1l8 8V2l1-1z'
      );

    rows
      .select('path.progress-year__line')
      .attr('d', d => line(d.values[3]))
      .attr('transform', `translate(${this.x(3) + this.x.bandwidth() / 2}, 0)`);
  };

  this.drawRows = function() {
    let rows = this.canvas.selectAll('g.row').data(this.data.data.sort((a, b) => a.avgRow - b.avgRow));
    let rowsE = rows
      .enter()
      .append('g')
      .attr('class', 'row');
    rows.exit().remove();
    rows = rows.merge(rowsE);

    // Create elements on each row that's created on enter
    this.initRowElements(rowsE);

    // Update row geography, style and position
    rows.select('text.geography').attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));
    rows
      .select('rect.rowFill')
      .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.05 : 0))
      .attr('width', this.width);
    rows
      .select('rect.divider')
      .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2))
      .attr('width', this.width);
    rows.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
    rows.select('text.geography').text(d => util.truncate(d.geography, this.paddingLeft));

    this.renderPopulation(rows);
    this.renderDensity(rows);
    this.renderProgressYear(rows);
    this.renderProgressPeriod(rows);
  };

  this.drawColumnHeaders = function() {
    let column = this.canvas.selectAll('g.column').data(this.data.meta.series);
    let columnE = column
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

  this.render = function(data, method = 'ratio', range) {
    if (data === undefined) return;
    data.data = data.data.sort((a, b) => a.avgRow - b.avgRow);
    data.data = data.data.sort((a, b) => a.totalRow - b.totalRow);
    this.data = data;
    this.method = method;
    this.heading.text(this.data.meta.heading);
    this.canvas.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);
    this.height = this.rowHeight * this.data.data.length;
    this.width = this.parentWidth() - this.padding.left - this.padding.right;
    this.svg
      .transition()
      .attr('height', this.padding.top + this.height + this.padding.bottom)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.x.domain(this.data.meta.series.map((d, i) => i)).range([this.paddingLeft, this.width]);

    this.drawRows();
    this.drawColumnHeaders();
  };

  this.init(svg);
}

export default Template;
