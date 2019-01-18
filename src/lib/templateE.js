import { Base_Template, util } from './baseTemplate';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding.top = 70;
  this.padding.bottom = 50;
  this.padding.left = 300;
  this.padding.right = 55;
  this.height = 400;
  this.width = 650;
  this.y = d3.scaleLinear();
  this.x = d3.scaleLinear();
  this.selected = null;
  this.list;
  this.pyramid;
  this.gutter = 100;
  this.yAxis = []; // three yAxis (left, right and gridlines)

  this.drawList = function() {
    let active = this.selected;

    let row = this.list.selectAll('g.row').data(this.data.data);
    let rowE = row
      .enter()
      .append('g')
      .attr('class', 'row');
    row.exit().remove();
    row = row.merge(rowE);

    rowE
      .append('rect')
      .attr('class', 'fill')
      .attr('width', this.padding.left - this.gutter)
      .attr('height', this.rowHeight)
      .attr('fill', util.color.blue)
      .style('cursor', 'pointer')
      .attr('rx', 3);
    rowE.append('text').attr('class', 'label');

    row.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

    row
      .select('rect.fill')
      .attr('fill-opacity', (d, i) => (i == this.selected ? 1 : 0))
      .on('click', (d, i) => {
        this.render(this.data, i);
      })
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
      .attr('fill', util.color.purple)
      .style('pointer-events', 'none');
  };

  this.created = function() {
    this.list = this.svg
      .append('g')
      .attr('class', 'list')
      .attr('transform', `translate(0, ${this.padding.top})`);
    this.list
      .append('text')
      .text('Velg delbydel')
      .attr('font-size', 12)
      .style('text-transform', 'uppercase')
      .attr('font-weight', 700)
      .attr('fill', util.color.purple)
      .attr('transform', 'translate(10, -16)');

    this.canvas.selectAll('*').remove();

    this.pyramid = this.canvas.append('g').attr('class', 'pyramid');

    this.y.range([this.height, 0]).domain([0, 120]);
    this.yAxis = this.canvas
      .selectAll('g.axis.y')
      .data([{ type: 'left' }, { type: 'right' }, { type: 'lines' }])
      .enter()
      .append('g');

    this.xAxis = this.canvas
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(0, ${this.height})`);

    this.yAxis.attr('class', d => `axis y axis-${d.type}`);

    this.canvas
      .append('g')
      .attr('class', 'yAxis-title')
      .attr('transform', `translate(-50, ${this.height / 2})`)
      .append('text')
      .attr('font-size', 12)
      .attr('font-weight', 700)
      .attr('fill', util.color.purple)
      .text('Alder')
      .attr('text-anchor', 'middle')
      .attr('transform', `rotate(-90)`);

    this.canvas
      .append('text')
      .attr('class', 'xAxis-title')
      .attr('font-size', 12)
      .attr('font-weight', 700)
      .attr('fill', util.color.purple)
      .attr('text-anchor', 'middle')
      .attr('transform', `translate(${this.width / 2}, ${this.height + 36})`)
      .text('Folkemengde');
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

    let genderGroup = this.pyramid.selectAll('g.gender').data(genderData);
    let genderGroupE = genderGroup
      .enter()
      .append('g')
      .attr('class', 'gender');
    genderGroup.exit().remove();
    genderGroup = genderGroup.merge(genderGroupE);

    let genderLabel = genderGroupE.append('text').datum(d => d);
    let genderPath = genderGroupE.append('path').datum(d => d);

    genderLabel
      .text(d => d[0].gender)
      .attr('text-anchor', (d, i) => (i === 0 ? 'end' : 'start'))
      .attr('font-size', 16)
      .attr('font-weight', 700)
      .attr('fill', util.color.purple)
      .attr('transform', `translate(${this.width / 2}, 23)`)
      .attr('x', (d, i) => (i === 0 ? -20 : 20));

    genderGroup
      .select('path')
      .attr('fill', d => {
        if (d[0].gender == 'Kvinne') {
          return util.color.red;
        } else {
          return util.color.positive;
        }
      })
      .transition()
      .attr('d', this.area);
  };

  this.drawAxis = function() {
    let max = d3.max(this.data.data[this.selected].values.map(d => d.value));

    this.x.range([0, this.width]).domain([-max, max]);
    this.xAxis.transition().call(d3.axisBottom(this.x).tickFormat(d => Math.abs(d)));
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
  };

  this.render = function(data, selected) {
    if (!data) return;
    data.data = data.data.sort((a, b) => a.totalRow - b.totalRow);
    this.data = data;
    this.selected =
      selected == null || selected == -1 ? this.data.data.findIndex(el => el.avgRow || el.totalRow) : selected;

    this.svg
      .transition()
      .attr('height', this.padding.top + this.height + this.padding.bottom)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.heading.text(data.meta.heading);

    this.drawAxis();
    this.drawPyramid();
    this.drawList();

    this.canvas.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);
  };

  this.init(svg);
}

export default Template;
