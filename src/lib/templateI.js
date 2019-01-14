import { Base_Template, util } from './baseTemplate';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding.top = 70;
  this.padding.bottom = 70;
  this.padding.left = 400;
  this.padding.right = 105;
  this.width = 400;
  this.height = Math.sqrt(this.width * this.width - (this.width / 2) * (this.width / 2));

  this.rowHeight = 40;
  this.y = d3.scaleLinear();
  this.x = d3.scaleLinear();
  this.selected = null;
  this.list;
  this.matrix;
  this.gutter = 200;
  this.yAxis = [];
  this.max = 0;
  this.dotContainer;

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

  const x = d3
    .scaleLinear()
    .range([0, this.width])
    .domain([-1, 1]);
  const y = d3
    .scaleLinear()
    .range([this.height, 0])
    .domain([0, 1]);

  const line = d3
    .line()
    .x(d => x(d.x))
    .y(d => y(d.y));

  const triangleData = [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }];

  const gridLinesData = [
    [{ x: -0.9, y: 0.1 }, { x: -0.8, y: 0 }],
    [{ x: -0.8, y: 0.2 }, { x: -0.6, y: 0 }],
    [{ x: -0.7, y: 0.3 }, { x: -0.4, y: 0 }],
    [{ x: -0.6, y: 0.4 }, { x: -0.2, y: 0 }],
    [{ x: -0.5, y: 0.5 }, { x: 0.0, y: 0 }],
    [{ x: -0.4, y: 0.6 }, { x: 0.2, y: 0 }],
    [{ x: -0.3, y: 0.7 }, { x: 0.4, y: 0 }],
    [{ x: -0.2, y: 0.8 }, { x: 0.6, y: 0 }],
    [{ x: -0.1, y: 0.9 }, { x: 0.8, y: 0 }],

    [{ x: 0.1, y: 0.9 }, { x: -0.8, y: 0 }],
    [{ x: 0.2, y: 0.8 }, { x: -0.6, y: 0 }],
    [{ x: 0.3, y: 0.7 }, { x: -0.4, y: 0 }],
    [{ x: 0.4, y: 0.6 }, { x: -0.2, y: 0 }],
    [{ x: 0.5, y: 0.5 }, { x: 0.0, y: 0 }],
    [{ x: 0.6, y: 0.4 }, { x: 0.2, y: 0 }],
    [{ x: 0.7, y: 0.3 }, { x: 0.4, y: 0 }],
    [{ x: 0.8, y: 0.2 }, { x: 0.6, y: 0 }],
    [{ x: 0.9, y: 0.1 }, { x: 0.8, y: 0 }],

    [{ x: -0.9, y: 0.1 }, { x: 0.9, y: 0.1 }],
    [{ x: -0.8, y: 0.2 }, { x: 0.8, y: 0.2 }],
    [{ x: -0.7, y: 0.3 }, { x: 0.7, y: 0.3 }],
    [{ x: -0.6, y: 0.4 }, { x: 0.6, y: 0.4 }],
    [{ x: -0.5, y: 0.5 }, { x: 0.5, y: 0.5 }],
    [{ x: -0.4, y: 0.6 }, { x: 0.4, y: 0.6 }],
    [{ x: -0.3, y: 0.7 }, { x: 0.3, y: 0.7 }],
    [{ x: -0.2, y: 0.8 }, { x: 0.2, y: 0.8 }],
    [{ x: -0.1, y: 0.9 }, { x: 0.1, y: 0.9 }],
  ];

  this.getTick = function(x1, y1, angle, dist) {
    let s = d3
      .scaleLinear()
      .domain([0, 1])
      .range([0, this.height]);
    let rad = angle * (Math.PI / 180);
    let distX = s(dist) * Math.cos(rad);
    let distY = s(dist) * Math.sin(rad);
    let x2 = x.invert(distX + x(x1));
    let y2 = y.invert(distY + y(y1));
    return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
  };

  let tickData = [
    // group 1
    this.getTick(-0.9, 0.1, 180, 0.02),
    this.getTick(-0.8, 0.2, 180, 0.02),
    this.getTick(-0.7, 0.3, 180, 0.02),
    this.getTick(-0.6, 0.4, 180, 0.02),
    this.getTick(-0.5, 0.5, 180, 0.02),
    this.getTick(-0.4, 0.6, 180, 0.02),
    this.getTick(-0.3, 0.7, 180, 0.02),
    this.getTick(-0.2, 0.8, 180, 0.02),
    this.getTick(-0.1, 0.9, 180, 0.02),
    // group 2
    this.getTick(0.1, 0.9, 300, 0.02),
    this.getTick(0.2, 0.8, 300, 0.02),
    this.getTick(0.3, 0.7, 300, 0.02),
    this.getTick(0.4, 0.6, 300, 0.02),
    this.getTick(0.5, 0.5, 300, 0.02),
    this.getTick(0.6, 0.4, 300, 0.02),
    this.getTick(0.7, 0.3, 300, 0.02),
    this.getTick(0.8, 0.2, 300, 0.02),
    this.getTick(0.9, 0.1, 300, 0.02),
    // group 3
    this.getTick(0.8, 0, 60, 0.02),
    this.getTick(0.6, 0, 60, 0.02),
    this.getTick(0.4, 0, 60, 0.02),
    this.getTick(0.2, 0, 60, 0.02),
    this.getTick(0.0, 0, 60, 0.02),
    this.getTick(-0.2, 0, 60, 0.02),
    this.getTick(-0.4, 0, 60, 0.02),
    this.getTick(-0.6, 0, 60, 0.02),
    this.getTick(-0.8, 0, 60, 0.02),
  ];

  // Draw the triangle, grid lines, labels etc on screen
  this.drawGrid = function() {
    this.matrix = this.canvas.append('g').attr('class', 'matrix');
    this.dotContainer = this.canvas.append('g').attr('class', 'dotcontainer');

    // Labels left
    this.matrix
      .selectAll('text.label-1')
      .data(tickData.filter((d, i) => i < 9))
      .enter()
      .append('text')
      .text((d, i) => (i + 1) * 10)
      .attr('text-anchor', 'end')
      .style('font-size', 13)
      .style('font-weight', 'bold')
      .attr('x', (d, i) => x(d[1].x) - 6)
      .attr('y', (d, i) => y(d[1].y) + 4);

    // Labels right
    this.matrix
      .selectAll('text.label-2')
      .data(tickData.filter((d, i) => i >= 9 && i < 18))
      .enter()
      .append('text')
      .attr('class', 'label-2')
      .attr('x', (d, i) => x(d[1].x) + 4)
      .attr('y', (d, i) => y(d[1].y) + 4)
      .attr('transform', d => `rotate(300, ${x(d[1].x)}, ${y(d[1].y)})`)
      .text((d, i) => (i + 1) * 10)
      .attr('text-anchor', 'start')
      .style('font-size', 13)
      .style('font-weight', 'bold');

    // Labels bottom
    this.matrix
      .selectAll('text.label-3')
      .data(tickData.filter((d, i) => i >= 18))
      .enter()
      .append('text')
      .attr('class', 'label-3')
      .attr('x', (d, i) => x(d[1].x) + 4)
      .attr('y', (d, i) => y(d[1].y) + 4)
      .attr('transform', d => `rotate(60, ${x(d[1].x)}, ${y(d[1].y)})`)
      .text((d, i) => (i + 1) * 10)
      .attr('text-anchor', 'start')
      .style('font-size', 13)
      .style('font-weight', 'bold');

    // Tick marks
    this.matrix
      .selectAll('.tickLine')
      .data(tickData)
      .enter()
      .append('path')
      .attr('class', 'tickLine')
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
      .attr('d', d => line(d));

    // Triangle background
    this.matrix
      .append('path')
      .datum(triangleData)
      .attr('d', line)
      .attr('fill', '#eee');

    // Grid lines
    this.matrix
      .selectAll('.line')
      .data(gridLinesData)
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('stroke-width', 2)
      .attr('stroke', 'white')
      .attr('d', d => line(d));

    // Triangle frame
    this.matrix
      .append('path')
      .datum(triangleData)
      .attr('d', line)
      .attr('stroke-width', 2)
      .attr('stroke', 'black')
      .attr('fill', 'none');

    // Axis 2 label
    this.matrix
      .append('text')
      .attr('class', 'label2')
      .text('% sand')
      .attr('text-anchor', 'middle')
      .style('font-size', 15)
      .style('font-weight', 'bold')
      .attr('x', x(tickData[4][1].x) - 12)
      .attr('y', y(tickData[4][1].y) - 40)
      .attr('transform', `rotate(300, ${x(tickData[4][1].x)}, ${y(tickData[4][1].y)})`);

    // Axis 3 label
    this.matrix
      .append('text')
      .attr('class', 'label3')
      .text('% dirt')
      .attr('text-anchor', 'middle')
      .style('font-size', 15)
      .style('font-weight', 'bold')
      .attr('x', x(tickData[13][1].x) - 12)
      .attr('y', y(tickData[13][1].y) - 32)
      .attr('transform', `rotate(60, ${x(tickData[13][1].x)}, ${y(tickData[4][1].y)})`);

    // Axis 1 label
    this.matrix
      .append('text')
      .attr('class', 'label1')
      .text('% water')
      .attr('text-anchor', 'middle')
      .style('font-size', 15)
      .style('font-weight', 'bold')
      .attr('x', x(tickData[22][1].x))
      .attr('y', y(tickData[22][1].y) + 42);
  };

  // Draw and position nodes inside the matrix
  this.drawMatrix = function() {
    let dot = this.dotContainer.selectAll('g').data(this.data.data);
    dot.exit().remove();
    let dotE = dot.enter().append('g');
    dotE.append('circle');
    dotE.append('rect');
    dotE.append('text');
    dot = dot.merge(dotE);

    dot.attr('transform', d => {
      let pos_y = y(d.values[1].ratio);
      let pos_x = x(d.values[2].ratio - d.values[0].ratio);

      return `translate(${pos_x}, ${pos_y})`;
      // return `translate(
      //   ${x((d.values[2].antall[0] - d.values[0].antall[0]) / 100)},
      //   ${y(d.values[1].antall[0] / 100)})`;
    });
    // .attr('data-x', d => x((d.data[2].antall[0] - d.data[0].antall[0]) / 100))
    // .attr('data-y', d => y(d.data[1].antall[0] / 100));

    dot
      .select('circle')
      .attr('stroke-width', 2)
      .attr('fill', '#6EE9FF')
      // .attr('data-0', d => +d.data[0].antall[0] / 100)
      // .attr('data-1', d => +d.data[1].antall[0] / 100)
      // .attr('data-2', d => +d.data[2].antall[0] / 100)
      .transition()
      .attr('r', (d, i) => (i === this.selected ? 9 : 6))
      .attr('fill-opacity', (d, i) => (i === this.selected ? 1 : 0.3))
      .attr('stroke-opacity', (d, i) => (i === this.selected ? 1 : 0.6))
      .attr('stroke', '#292858');
  };

  this.updateAxisLabels = function() {
    this.matrix.select('text.label1').text(`% ${this.data.meta.series[0]}`);
    this.matrix.select('text.label2').text(`% ${this.data.meta.series[1]}`);
    this.matrix.select('text.label3').text(`% ${this.data.meta.series[2]}`);
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

    this.drawGrid();
  };

  this.render = function(data, selected) {
    if (!data) return;
    this.data = data;
    this.selected =
      selected == null || selected == -1 ? this.data.data.findIndex(el => el.avgRow || el.totalRow) : selected;

    this.heading.text(data.meta.heading);

    this.drawMatrix();
    this.drawList();
    this.updateAxisLabels();

    this.canvas.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);
  };

  this.init(svg);
}

export default Template;
