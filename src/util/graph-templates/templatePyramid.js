/**
 * Template for population pyramid chart for age distributions.
 * The shape of the pyramid can be altered using various d3.curve functions
 * on the area() method.
 * The height of this chart is fixed to ensure a consistent shape of the
 * pyramid.
 *
 * The chart must be rendered with a selected geography.
 *
 */

import d3 from '@/assets/d3';
import BaseTemplate from './baseTemplate';
import { color } from './colors';
import util from './template-utils';

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'pyramid';

  this.padding = { top: 70, right: 85, bottom: 50, left: 360 };
  this.y = d3.scaleLinear();
  this.gutter = 140;
  this.yAxis = []; // three yAxis (left, right and gridlines)
  this.tooltips = null;

  this.render = function (data, options) {
    if (!this.commonRender(data, options)) return;

    this.selected =
      options.selected === null || options.selected === undefined
        ? this.data.data.findIndex((el) => el.avgRow || el.totalRow)
        : options.selected;

    this.width = d3.max([this.width, 360]);

    this.height = 500;
    this.svg
      .transition()
      .duration(this.duration)
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.drawAxis();
    this.drawPyramid();
    this.drawList();
    this.drawTable();
  };

  // Runs once after init() and is called from base template.
  // Creates neccessary DOM elements required for this template.
  this.created = function () {
    // Clears the contents of the canvas element
    this.canvas.selectAll('*').remove();

    // Holds the list of available geographies
    this.list = this.canvas.append('g').attr('class', 'list').attr('transform', 'translate(-357, 0)');

    // Create heading (label) for the list
    this.list
      .append('text')
      .text('Velg geografi')
      .attr('font-size', 12)
      .style('text-transform', 'uppercase')
      .attr('font-weight', 700)
      .attr('fill', color.purple)
      .attr('transform', 'translate(10, -16)');

    // Holds the pyramid elements
    this.pyramid = this.canvas.append('g').attr('class', 'pyramid');

    this.pyramid.append('rect').attr('class', 'pyramidbg');

    this.pyramid.on('mousemove', (e) => {
      moveTooltip(e, this);
    });

    this.pyramid.on('mouseleave', () => {
      hideTooltip(this);
    });

    // Append three yAxis groups
    // - One on the left side
    // - One on the right side
    // - One in the center to hold the grid lines
    this.yAxis = this.canvas
      .selectAll('g.axis.y')
      .data([{ type: 'left' }, { type: 'right' }, { type: 'lines' }])
      .enter()
      .append('g')
      .attr('class', (d) => `axis y axis-${d.type}`);

    // Holds the xAxis
    this.xAxis = this.canvas.append('g').attr('class', 'axis x').attr('transform', `translate(0, ${this.height})`);

    // Group to hold the label for the y axis
    // and inside that group there's a rotated text label
    this.canvas
      .append('g')
      .attr('class', 'yAxis-title')
      .append('text')
      .attr('font-size', '1em')
      .attr('fill', color.purple)
      .text('Alder')
      .attr('text-anchor', 'middle')
      .attr('transform', `rotate(-90) translate(0, -20)`);

    // Label for the x axis
    this.canvas
      .append('text')
      .attr('class', 'xAxis-title')
      .attr('font-size', '1em')
      .attr('fill', color.purple)
      .attr('text-anchor', 'middle')
      .attr('transform', `translate(${this.width / 2}, ${this.height + 40})`)
      .text('Folkemengde');

    this.tooltips = createTooltipElements(this);
  };

  this.drawTable = function () {
    const ageInterval = 5; // must be 2 or more

    const ageRanges = [];
    for (let i = 0; i < 120; i += ageInterval) {
      ageRanges.push({
        label: `${i}–${i + ageInterval - 1} år`,
        range: [i, i + ageInterval - 1],
      });
    }

    const tableHead = [];
    const cols = ['mann', 'kvinne', 'value'];
    tableHead[0] = ['Geografi', 'Menn', 'Kvinner', 'Totalt'];
    tableHead[1] = cols.flatMap(() => ageRanges.map((age) => age.label));

    const tableData = JSON.parse(JSON.stringify(this.data.data));
    const tableBody = tableData.map((d) => {
      return {
        key: d.geography,
        values: cols.flatMap((col) => {
          return ageRanges.map((age) => {
            const { range } = age;
            let agg = 0;
            for (let i = range[0]; i <= range[1]; i += 1) {
              agg += d.values[i][col];
            }
            return agg;
          });
        }),
      };
    });

    const tableGenerator = util.drawTable.bind(this);
    tableGenerator(tableHead, tableBody);
  };

  this.drawList = function () {
    const active = this.selected;

    const row = this.list
      .selectAll('g.row')
      .data(this.data.data)
      .join((enter) => {
        const g = enter.append('g').attr('class', 'row');

        // Create background fill for row
        g.append('rect')
          .attr('class', 'fill')
          .attr('width', this.padding.left - this.gutter)
          .attr('height', this.rowHeight)
          .attr('fill', color.blue)
          .style('cursor', 'pointer')
          .attr('rx', 3);

        // Create geography label
        g.append('text').attr('class', 'label');

        return g;
      })
      .attr('tabindex', 0)
      .attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

    row.on('click keyup', (e) => {
      if (e && e.type === 'keyup' && e.key !== 'Enter') return;
      if (e && e.type === 'click') e.currentTarget.blur();
      const i = row.nodes().indexOf(e.currentTarget);
      this.render(this.data, { selected: i });
    });

    row
      .select('rect.fill')
      .attr('fill-opacity', (d, i) => (i === this.selected ? 1 : 0))
      .on('mouseenter', ({ currentTarget }) => {
        const i = row.nodes().indexOf(currentTarget.parentNode);
        if (i === active) return;
        d3.select(currentTarget).attr('fill-opacity', 0.15);
      })
      .on('mouseleave', ({ currentTarget }) => {
        const i = row.nodes().indexOf(currentTarget.parentNode);
        if (i === active) return;
        d3.select(currentTarget).attr('fill-opacity', 0);
      });

    row
      .select('text.label')
      .text((d) => d.geography)
      .attr('y', this.rowHeight / 2 + 5)
      .attr('x', 10)
      .attr('font-weight', (d) => (d.totalRow || d.avgRow ? 700 : 400))
      .attr('fill', color.purple)
      .style('pointer-events', 'none');
  };

  this.area = d3
    .area()
    .curve(d3.curveStep)
    .x0(() => this.x(0))
    .x1((d) => (d.gender === 'kvinne' ? this.x(d.value) : this.x(-d.value)))
    .y((d, i) => this.y(i));

  this.drawPyramid = function () {
    const genderData = ['mann', 'kvinne'].map((gender) =>
      this.data.data[this.selected].values.map((d) => ({ gender, value: d[gender] }))
    );

    this.pyramid.select('.pyramidbg').attr('height', this.height).attr('width', this.width).attr('fill', 'white');

    const genderGroup = this.pyramid
      .selectAll('g.gender')
      .data(genderData)
      .join((enter) => {
        const g = enter.append('g').attr('class', 'gender');

        // create labels
        g.append('text')
          .datum((d) => d)
          .attr('transform', `translate(${this.width / 2}, 23)`)
          .attr('x', (d, i) => (i === 0 ? -20 : 20));

        // Create area
        g.append('path').datum((d) => d);

        return g;
      });

    // Style the text
    genderGroup
      .select('text')
      .text((d) => util.capitalize(d[0].gender))
      .attr('text-anchor', (d, i) => (i === 0 ? 'end' : 'start'))
      .attr('font-size', 16)
      .attr('font-weight', 700)
      .attr('fill', color.purple)
      .transition()
      .duration(this.duration)
      .attr('transform', `translate(${this.width / 2}, 5)`)
      .attr('x', (d, i) => (i === 0 ? -20 : 20));

    // Style the path
    genderGroup
      .select('path')
      .attr('fill', color.purple)
      .attr('fill-opacity', (d) => (d[0].gender === 'kvinne' ? 0.45 : 0.35))
      .transition()
      .duration(this.duration)
      .attr('d', this.area);
  };

  this.drawAxis = function () {
    const max = d3.max(this.data.data[this.selected].values.map((d) => d.value)) / 1.75;
    this.y.range([this.height, 0]).domain([0, 105]);

    this.x.range([0, this.width]).domain([-max, max]).nice();

    this.xAxis
      .attr('transform', `translate(0, ${this.height})`)
      .transition()
      .duration(this.duration)
      .call(
        d3
          .axisBottom(this.x)
          .ticks(this.width / 65)
          .tickFormat((d) => Math.abs(d))
      );
    this.yAxis.each((d, i, j) => {
      if (d.type === 'left') {
        d3.select(j[i])
          .call(d3.axisLeft(this.y).tickFormat((dj) => `${dj} år`))
          .selectAll('text');
      } else if (d.type === 'right') {
        d3.select(j[i])
          .call(d3.axisRight(this.y).tickFormat((dj) => `${dj} år`))
          .attr('transform', `translate(${this.width}, 0)`)
          .selectAll('text');
      } else if (d.type === 'lines') {
        const axis = d3.select(j[i]);

        axis.call(d3.axisLeft(this.y).tickSize(-this.width));
        axis.selectAll('text').remove();
        axis.selectAll('.tick').attr('opacity', 0.15).style('pointer-events', 'none');
        axis.selectAll('.domain').remove();
      }
    });

    // Reposition axis title
    this.canvas
      .select('text.xAxis-title')
      .transition()
      .duration(this.duration)
      .attr('transform', `translate(${this.width / 2}, ${this.height + 36})`);

    // Reposition axis title
    this.canvas
      .select('g.yAxis-title')
      .transition()
      .duration(this.duration)
      .attr('transform', `translate(-50, ${this.height / 2})`);
  };

  this.init(svg);
}

export default Template;

function createTooltipElements(self) {
  const g = self.canvas.append('g').attr('class', 'tooltips').attr('opacity', 0);

  const yearG = g.append('g').attr('class', 'year');
  yearG.append('rect').attr('width', 60).attr('height', 30).attr('x', -60).attr('y', -15).attr('fill', color.yellow);
  yearG
    .append('text')
    .attr('fill', color.purple)
    .attr('text-anchor', 'end')
    .attr('x', -10)
    .attr('y', 5)
    .attr('font-weight', 600)
    .attr('font-size', 12);

  g.append('line')
    .attr('class', 'yearline')
    .attr('stroke', color.yellow)
    .attr('stroke-width', 2)
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('y2', 0)
    .style('pointer-events', 'none');

  g.append('text').attr('class', 'value men').attr('y', -4).attr('x', 10);
  g.append('text').attr('class', 'value women').attr('y', -4).attr('x', -10).attr('text-anchor', 'end');

  return g;
}

function moveTooltip(e, self) {
  const g = self.tooltips;
  const container = self.pyramid.select('.pyramidbg').node();
  const yearline = g.select('.yearline');
  const pos = d3.pointer(e, container);
  const age = Math.round(self.y.invert(pos[1]));
  const labelYear = g.select('text');
  const labelMen = g.select('.men');
  const labelWomen = g.select('.women');
  const valueMen = self.data.data[self.selected].values[age].mann;
  const valueWomen = self.data.data[self.selected].values[age].kvinne;

  labelMen.text(self.formatDecimal(valueMen));
  labelWomen.text(self.formatDecimal(valueWomen));
  labelYear.text(`${age} år`);

  g.attr('opacity', 1).attr('transform', `translate(0, ${pos[1]})`);
  labelWomen.attr('transform', `translate(${self.width}, 0)`);
  yearline.attr('x2', self.width);
}

function hideTooltip(self) {
  self.tooltips.attr('opacity', 0);
}
