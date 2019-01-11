import { Base_Template, util } from './baseTemplate';
import d3 from '@/assets/d3';

function Template_A(svg) {
  Base_Template.apply(this, arguments);

  this.padding.top = 30;
  this.padding.left = 0;
  this.padding.right = 25;
  this.height = 100;
  this.height2 = 350;
  this.yGutter = 50;
  this.width = 1050;
  this.paddingUpperLeft = 200;
  this.paddingLowerLeft = 400;
  this.rowHeight = 43;
  this.barHeight = 24;
  this.y = d3.scaleLinear();
  this.handle;

  let extent = [0, 119];
  let gBrushSmall, gBrushLarge;

  this.age = d3
    .scaleLinear()
    .range([0, this.width - this.paddingUpperLeft])
    .domain(extent);

  let brushed = function(self) {
    var s = d3.event.selection || self.age.range();
    extent = s.map(val => Math.round(self.age.invert(val)));

    if (d3.event.selection === null) {
      gBrushSmall.call(brushSmall.move, self.age.range());
      gBrushLarge.call(brushLarge.move, self.age.range());
    }

    // Resize and move both selections to new location
    d3.selectAll('rect.selection')
      .attr('x', s[0])
      .attr('opacity', 1)
      .attr('width', s[1] - s[0]);

    // Move invisible handles
    d3.selectAll('.handle--e')
      .attr('width', 21)
      .attr('x', s[1]);
    d3.selectAll('.handle--w')
      .attr('width', 21)
      .attr('x', s[0] - 21);

    // Move visible handles
    self.handle.attr('transform', d => (d.type === 'e' ? `translate(${s[1]}, -9)` : `translate(${s[0] - 21}, -9)`));

    if (self.data && self.data.meta) {
      self.render(self.data, self.method);
    }
  };

  this.line = d3
    .line()
    .curve(d3.curveBasis)
    .x((d, i) => this.age(i))
    .y(d => this.y(d.menn + d.kvinner));

  const brushLarge = d3
    .brushX()
    .extent([[0, 0], [this.width - this.paddingUpperLeft, this.height]])
    .on('brush end', () => {
      brushed(this);
    });

  const brushSmall = d3
    .brushX()
    .extent([[0, 0], [this.width - this.paddingUpperLeft, 19]])
    .on('brush end', () => {
      brushed(this);
    });

  this.drawDropdown = function() {
    let choices = [{ label: '', value: [0, 5] }, { label: '', value: [1, 5] }, { label: '', value: [1, 10] }];

    let container = this.upper.append('g').attr('class', 'dropdown');
    let list = container.append('g').attr('class', 'list');
    let active = container.append('g').attr('class', 'active');

    active.append('rect');
    active.append('text');

    let elements = list
      .selectAll('g.element')
      .data(choices)
      .enter()
      .append('g')
      .attr('class', 'element');

    elements.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
    elements
      .append('rect')
      .attr('width', this.paddingUpperLeft - 50)
      .attr('height', this.rowHeight)
      .attr('stroke', util.color.purple)
      .attr('fill', 'white');
    elements
      .append('text')
      .text((d, i) => `element ${i}`)
      .attr('x', 15)
      .attr('y', 25);
  };

  this.drawHandles = function() {
    this.handle = gBrushSmall
      .selectAll('path.handle')
      .data([{ type: 'w' }, { type: 'e' }])
      .enter()
      .append('g')
      .attr('class', 'handleIcon')
      .attr('transform', 'translate(0, -9)');

    this.handle
      .append('path')
      .attr('fill', util.color.purple)
      .style('pointer-events', 'none')
      .attr('d', d => {
        return d.type === 'e'
          ? 'M0 0h11c6 0 10 4 10 10v17c0 6-4 10-10 10H0V0z'
          : 'M21 0H10C4 0 0 4 0 10v17c0 6 4 10 10 10h11V0z';
      });

    this.handle
      .append('rect')
      .style('pointer-events', 'none')
      .attr('height', 11)
      .attr('width', 1)
      .attr('x', 6)
      .attr('y', 13)
      .attr('fill', 'white')
      .attr('fill-opacity', '0.75');

    this.handle
      .append('rect')
      .style('pointer-events', 'none')
      .attr('height', 11)
      .attr('width', 1)
      .attr('x', 10)
      .attr('y', 13)
      .attr('fill', 'white')
      .attr('fill-opacity', '0.75');

    this.handle
      .append('rect')
      .style('pointer-events', 'none')
      .attr('height', 11)
      .attr('width', 1)
      .attr('x', 14)
      .attr('y', 13)
      .attr('fill', 'white')
      .attr('fill-opacity', '0.75');
  };

  this.created = function() {
    this.upper = this.canvas.append('g').attr('class', 'upper');
    this.middle = this.canvas
      .append('g')
      .attr('class', 'middle')
      .attr('transform', `translate(0, ${this.height + 50})`);
    this.lower = this.canvas
      .append('g')
      .attr('class', 'lower')
      .attr('transform', `translate(0, ${this.height + 150})`);

    gBrushLarge = this.upper
      .append('g')
      .attr('class', 'brush')
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`)
      .call(brushLarge);

    gBrushLarge
      .select('.selection')
      .attr('fill', util.color.yellow)
      .attr('stroke', util.color.yellow)
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 1)
      .attr('fill-opacity', 0.15);

    gBrushSmall = this.middle
      .append('g')
      .attr('class', 'brush')
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`)
      .call(brushSmall);

    gBrushSmall
      .select('.selection')
      .attr('fill', util.color.yellow)
      .attr('fill-opacity', 1);
    gBrushSmall
      .select('.overlay')
      .attr('stroke', util.color.purple)
      .attr('rx', 6);

    this.upperXAxis = this.upper
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(${this.paddingUpperLeft}, ${this.height})`);

    this.upperYAxis = this.upper
      .append('g')
      .attr('class', 'axis y')
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`);

    this.lowerXAxis = this.lower
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(${this.paddingLowerLeft}, 0)`);

    // this.drawDropdown();
    this.drawHandles();

    gBrushLarge.call(brushLarge.move, [0, 50].map(this.age));
    gBrushSmall.call(brushSmall.move, [0, 50].map(this.age));
  };

  this.drawRows = function() {
    let rows = this.lower.selectAll('g.row').data(this.data.data);
    let rowsE = rows
      .enter()
      .append('g')
      .attr('class', 'row');
    rows.exit().remove();
    rows = rows.merge(rowsE);

    rowsE
      .append('rect')
      .attr('class', 'rowFill')
      .attr('fill', util.color.purple)
      .attr('height', this.rowHeight)
      .attr('width', this.width);
    rowsE
      .append('text')
      .attr('class', 'geography')
      .attr('fill', util.color.purple)
      .attr('y', this.rowHeight / 2 + 7);
    rowsE
      .append('text')
      .attr('class', 'value')
      .attr('y', this.rowHeight / 2 + 7)
      .attr('fill', util.color.purple)
      .attr('x', this.paddingLowerLeft - 40)
      .attr('text-anchor', 'end');
    rowsE
      .append('rect')
      .attr('class', 'bar')
      .attr('height', this.barHeight);

    rowsE
      .append('rect')
      .attr('class', 'divider')
      .attr('fill', util.color.purple)
      .attr('width', this.width)
      .attr('height', 1)
      .attr('y', this.rowHeight);

    rows.select('text.geography').attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));
    rows.select('rect.rowFill').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.05 : 0));
    rows.select('rect.divider').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2));
    rows.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
    rows.select('text.geography').text(d => d.geography);
    rows
      .select('text.value')
      .text(bydel =>
        d3.sum(bydel.values.filter((val, i) => i >= extent[0] && i <= extent[1]).map(d => d.menn + d.kvinner))
      );

    rows
      .select('rect.bar')
      .attr('width', bydel => {
        return this.x(
          d3.sum(bydel.values.filter((val, i) => i >= extent[0] && i <= extent[1]).map(d => d.menn + d.kvinner))
        );
      })
      .attr('x', this.paddingLowerLeft)
      .attr('y', (this.rowHeight - this.barHeight) / 2 + 1)
      .attr('fill', d => {
        return d.totalRow || d.avgRow ? util.color.purple : util.color.blue;
      });
  };

  this.drawLines = function() {
    let lines = this.upper.selectAll('path.line').data(this.data.data);
    let linesE = lines
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`);

    linesE
      .attr('fill', 'none')
      .attr('stroke-width', d => (d.avgRow || d.totalRow ? 3 : 2))
      .attr('stroke', d => (d.avgRow || d.totalRow ? util.color.purple : util.color.blue))
      .attr('stroke-opacity', d => (d.avgRow || d.totalRow ? 1 : 0.5));

    lines.exit().remove();
    lines = lines.merge(linesE);

    lines.attr('d', d => this.line(d.values));
  };

  this.render = function(data, method = 'ratio', range) {
    if (range) {
      extent = JSON.parse(range);
      gBrushLarge.call(brushLarge.move, extent.map(this.age));
      gBrushSmall.call(brushSmall.move, extent.map(this.age));
    }

    if (!data) return;

    this.data = data;
    this.method = method;
    this.heading.text(data.meta.heading);

    let maxSum =
      d3.max(
        data.data.map(bydel =>
          d3.sum(bydel.values.filter((val, i) => i >= extent[0] && i <= extent[1]).map(val => val.menn + val.kvinner))
        )
      ) * 1.05;

    let max = d3.max(data.data.map(bydel => d3.max(bydel.values.map(val => val.menn + val.kvinner)))) * 1.05;

    this.y.domain([0, max]).range([this.height, 0]);
    this.x.domain([0, maxSum]).range([0, this.width - this.paddingLowerLeft]);
    this.xAxis;

    this.drawRows();
    this.drawLines();

    this.canvas.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

    this.upperYAxis.call(d3.axisLeft(this.y).ticks(4));
    this.upperXAxis.call(d3.axisBottom(this.age).tickFormat(d => d + ' år'));
    this.lowerXAxis.call(d3.axisTop(this.x));
  };

  this.init(svg);
}

export default Template_A;
