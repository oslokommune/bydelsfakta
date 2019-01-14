import { Base_Template, util } from './baseTemplate';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding.top = 70;
  this.padding.left = 300;
  this.padding.right = 25;
  this.height = 700;
  this.width = 650;
  this.rowHeight = 40;
  this.y = d3.scaleLinear();
  this.selected = null;
  this.list, this.pyramid;
  this.gutter = 40;
  this.yAxis = [];

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

    this.yAxis = this.canvas
      .selectAll('g.axis.y')
      .data([{ type: 'left' }, { type: 'right' }, { type: 'lines' }])
      .enter()
      .append('g');

    this.yAxis.attr('class', d => `axis y axis-${d.type}`);
  };

  this.render = function(data, selected) {
    if (!data) return;
    this.data = data;
    this.selected = selected == null ? this.data.data.findIndex(el => el.avgRow || el.totalRow) : selected;

    this.heading.text(data.meta.heading);

    this.drawList();

    this.canvas.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);
  };

  this.init(svg);
}

export default Template;
