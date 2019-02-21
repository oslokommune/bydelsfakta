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

import Base_Template from './baseTemplate';
import color from './colors';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding = { top: 70, right: 55, bottom: 50, left: 300 };
  this.y = d3.scaleLinear();
  this.gutter = 100;
  this.yAxis = []; // three yAxis (left, right and gridlines)

  this.render = function(data, options) {
    if (!this.commonRender(data, options)) return;

    this.selected =
      options.selected == null || options.selected == undefined
        ? this.data.data.findIndex(el => el.avgRow || el.totalRow)
        : options.selected;

    this.width = d3.max([this.width, 360]);

    this.height = 400;
    this.svg
      .transition()
      .duration(this.duration)
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.drawAxis();
    this.drawPyramid();
    this.drawList();
    this.drawSource(
      'Statistisk sentralbyrå (test)',
      this.padding.top + this.height + this.padding.bottom + this.sourceHeight
    );
    this.drawTable();
  };

  // Runs once after init() and is called from base template.
  // Creates neccessary DOM elements required for this template.
  this.created = function() {
    // Clears the contents of the canvas element
    this.canvas.selectAll('*').remove();

    // Holds the list of available geographies
    this.list = this.svg
      .append('g')
      .attr('class', 'list')
      .attr('transform', `translate(3, ${this.padding.top})`);

    // Create heading (label) for the list
    this.list
      .append('text')
      .text('Velg delbydel')
      .attr('font-size', 12)
      .style('text-transform', 'uppercase')
      .attr('font-weight', 700)
      .attr('fill', color.purple)
      .attr('transform', 'translate(10, -16)');

    // Holds the pyradmid elements
    this.pyramid = this.canvas.append('g').attr('class', 'pyramid');

    // Append three yAxis groups
    // - One on the left side
    // - One on the right side
    // - One in the center to hold the grid lines
    this.yAxis = this.canvas
      .selectAll('g.axis.y')
      .data([{ type: 'left' }, { type: 'right' }, { type: 'lines' }])
      .enter()
      .append('g')
      .attr('class', d => `axis y axis-${d.type}`);

    // Holds the xAxis
    this.xAxis = this.canvas
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(0, ${this.height})`);

    // Group to hold the label for the y axis
    // and inside that group there's a rotated text label
    this.canvas
      .append('g')
      .attr('class', 'yAxis-title')
      .attr('transform', `translate(-50, ${this.height / 2})`)
      .append('text')
      .attr('font-size', 12)
      .attr('font-weight', 700)
      .attr('fill', color.purple)
      .text('Alder')
      .attr('text-anchor', 'middle')
      .attr('transform', `rotate(-90)`);

    // Label for the x axis
    this.canvas
      .append('text')
      .attr('class', 'xAxis-title')
      .attr('font-size', 12)
      .attr('font-weight', 700)
      .attr('fill', color.purple)
      .attr('text-anchor', 'middle')
      .attr('transform', `translate(${this.width / 2}, ${this.height + 36})`)
      .text('Folkemengde');
  };

  this.drawTable = function() {
    let ageRanges = [];
    for (let i = 0; i < 120; i += 5) {
      ageRanges.push({
        label: `${i}–${i + 4} år`,
        range: [i, i + 4],
      });
    }

    let thead = this.table.select('thead');
    let tbody = this.table.select('tbody');

    this.table.select('caption').text(this.data.meta.heading);

    thead.selectAll('*').remove();
    tbody.selectAll('*').remove();

    let hRow1 = thead.append('tr');
    let hRow2 = thead.append('tr');

    hRow1
      .selectAll('th')
      .data(() => ['Geografi', ...ageRanges.map(d => d.label)])
      .join('th')
      .attr('id', (d, i) => `th_2_${i}`)
      .attr('rowspan', (d, i) => (i === 0 ? 2 : 1))
      .attr('colspan', (d, i) => (i === 0 ? 1 : 2))
      .attr('scope', 'col')
      .attr('role', 'colgroup')
      .text(d => d);

    hRow2
      .selectAll('th')
      .data(() => ageRanges.map(d => ['Menn', 'Kvinner']).flat())
      .join('th')
      .attr('id', (d, i) => `th_1_${i}`)
      .attr('scope', 'col')
      .attr('headers', (d, i) => `th_1_${Math.floor(i / 2) + 1}`)
      .text(d => d);

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
      .data(d => {
        return ageRanges
          .map(age => {
            const range = age.range;
            let menn = 0;
            let kvinner = 0;
            for (let i = range[0]; i < range[1]; i++) {
              menn += d.values[i]['Mann'];
              kvinner += d.values[i]['Kvinne'];
            }
            return [menn, kvinner];
          })
          .flat();
      })
      .join('td')
      .attr('headers', (d, i) => {
        return `th_1_${Math.floor(i / 2) + 1} th_2_${i}`;
      })
      .text(d => this.format(d, this.method));
  };

  this.drawList = function() {
    let active = this.selected;

    let row = this.list
      .selectAll('g.row')
      .data(this.data.data)
      .join(enter => {
        let g = enter.append('g').attr('class', 'row');

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
      })
      .attr('tabindex', 0)
      .attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

    row.on('click keyup', (d, i, j) => {
      if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
      if (d3.event && d3.event.type === 'click') j[i].blur();
      this.render(this.data, { selected: i });
    });

    row
      .select('rect.fill')
      .attr('fill-opacity', (d, i) => (i == this.selected ? 1 : 0))
      .on('mouseenter', function(d, i) {
        if (i == active) return;
        d3.select(this).attr('fill-opacity', 0.15);
      })
      .on('mouseleave', function(d, i) {
        if (i == active) return;
        d3.select(this).attr('fill-opacity', 0);
      });

    row
      .select('text.label')
      .text(d => d.geography)
      .attr('y', this.rowHeight / 2 + 5)
      .attr('x', 10)
      .attr('font-weight', d => (d.totalRow || d.avgRow ? 700 : 400))
      .attr('fill', color.purple)
      .style('pointer-events', 'none');
  };

  this.area = d3
    .area()
    .curve(d3.curveStep)
    .x0(() => this.x(0))
    .x1(d => {
      if (d.gender == 'Kvinne') {
        return this.x(d.value);
      } else {
        return this.x(-d.value);
      }
    })
    .y((d, i) => this.y(i));

  this.drawPyramid = function() {
    let genderData = ['Mann', 'Kvinne'].map(gender => {
      return this.data.data[this.selected].values.map(d => {
        return { gender, value: d[gender] };
      });
    });

    let genderGroup = this.pyramid
      .selectAll('g.gender')
      .data(genderData)
      .join(enter => {
        let g = enter.append('g').attr('class', 'gender');

        // create labels
        g.append('text')
          .datum(d => d)
          .attr('transform', `translate(${this.width / 2}, 23)`)
          .attr('x', (d, i) => (i === 0 ? -20 : 20));

        // Create area
        g.append('path').datum(d => d);

        return g;
      });

    // Style the text
    genderGroup
      .select('text')
      .text(d => d[0].gender)
      .attr('text-anchor', (d, i) => (i === 0 ? 'end' : 'start'))
      .attr('font-size', 16)
      .attr('font-weight', 700)
      .attr('fill', color.purple)
      .transition()
      .duration(this.duration)
      .attr('transform', `translate(${this.width / 2}, 23)`)
      .attr('x', (d, i) => (i === 0 ? -20 : 20));

    // Style the path
    genderGroup
      .select('path')
      .attr('fill', d => (d[0].gender == 'Kvinne' ? color.red : color.positive))
      .transition()
      .duration(this.duration)
      .attr('d', this.area);
  };

  this.drawAxis = function() {
    let max = d3.max(this.data.data[this.selected].values.map(d => d.value));
    this.y
      .range([this.height, 0])
      .domain([0, 120])
      .nice();
    this.x
      .range([0, this.width])
      .domain([-max, max])
      .nice();
    this.xAxis
      .attr('transform', `translate(0, ${this.height})`)
      .transition()
      .duration(this.duration)
      .call(
        d3
          .axisBottom(this.x)
          .ticks(this.width / 65)
          .tickFormat(d => Math.abs(d))
      );
    this.yAxis.each((d, i, j) => {
      if (d.type == 'left') {
        d3.select(j[i])
          .call(d3.axisLeft(this.y).tickFormat(d => d + ' år'))
          .selectAll('text');
      } else if (d.type == 'right') {
        d3.select(j[i])
          .call(d3.axisRight(this.y).tickFormat(d => d + ' år'))
          .attr('transform', `translate(${this.width}, 0)`)
          .selectAll('text');
      } else if (d.type == 'lines') {
        let axis = d3.select(j[i]);

        axis.call(d3.axisLeft(this.y).tickSize(-this.width));
        axis.selectAll('text').remove();
        axis.selectAll('.tick').attr('opacity', 0.15);
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
