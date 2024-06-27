/**
 * Template for ternary plot (triangular 2d-diagram with three axis/dimensions
 * which sum is 1)
 *
 * Highlight a specific series by adding the selected parameter in the
 * options object.
 */

import d3 from '@/assets/d3';
import BaseTemplate from './baseTemplate';
import { color } from './colors';
import util from './template-utils';

// Coordinates for the three corners of the triangle.
// First corner duplicated to complete the path
// prettier-ignore
const triangleData = [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }];

// Coordinates for the grid lines (starting and ending positions)
// prettier-ignore
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

// Helper function to move an element to front
// by appending it to last position of parent.
d3.selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'ternaryPlot';

  this.padding = { top: 70, bottom: 70, left: 200, right: 105 };
  this.width = 400;
  this.height = Math.sqrt(this.width * this.width - (this.width / 2) * (this.width / 2));
  this.y = d3.scaleLinear();
  this.x = d3.scaleLinear();
  this.selected = null;
  this.list = null;
  this.matrix = null;
  this.values = null;
  this.gutter = (this.parentWidth() - this.padding.left - this.width) / 2;
  this.yAxis = [];
  this.max = 0;
  this.dotContainer = null;
  this.lineContainer = null;
  this.arrows = null;

  const fillOpacity = 0.6;
  const strokeOpacity = 0.8;

  /**
   * The x position inside of the matrix
   * is calculated from -1 on the left
   * to 1 on the right with 0 being the
   * center of the triangle's x axis.
   * Finding the x-value is achieved
   * by subtracting the value on the
   * right hand axis with the value on
   * the bottom axis.
   */
  const x = d3.scaleLinear().range([0, this.width]).domain([-1, 1]);

  /**
   * The y position is easier to visualize
   * as it ranges from 0 on the bottom to
   * 1 on the top.
   */
  const y = d3.scaleLinear().range([this.height, 0]).domain([0, 1]);

  const line = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y));

  this.render = function (data, options = {}) {
    if (!this.commonRender(data, options)) return;

    // Template only supports 'ratio' method
    this.method = 'ratio';

    // The gutter is the left hand side padding
    // inside of the canvas towards the matrix
    this.gutter = (this.parentWidth() - this.padding.left - 400) / 2;
    this.gutter = d3.max([this.gutter, 10]);

    this.matrix.transition().duration(this.duration).attr('transform', `translate(${this.gutter}, 0)`);
    this.dotContainer.transition().duration(this.duration).attr('transform', `translate(${this.gutter}, 0)`);
    this.lineContainer.transition().duration(this.duration).attr('transform', `translate(${this.gutter}, 0)`);

    this.svg
      .transition()
      .duration(this.duration)
      .attr('height', 500 + this.sourceHeight)
      .attr('width', d3.max([this.parentWidth(), 650]));

    this.drawMatrix();
    this.drawList();
    this.updateAxisLabels();
    this.drawGuideLines();
    this.drawValues();
    this.drawTable();
  };

  this.created = function () {
    this.list = this.svg.append('g').attr('class', 'list').attr('transform', `translate(0, 36)`);

    this.canvas.selectAll('*').remove();

    this.canvas.attr('transform', `translate(${this.padding.left + this.gutter}, ${this.padding.top})`);

    this.drawGrid();

    this.lineContainer = this.canvas.append('g').attr('class', 'lineContainer');
    this.dotContainer = this.canvas.append('g').attr('class', 'dotcontainer');
  };

  this.drawTable = function () {
    const tableHead = [];
    tableHead[0] = ['Geografi', this.method === 'value' ? 'Antall' : 'Prosentandel'];
    tableHead[1] = [
      ...this.data.meta.series.map((d) => {
        let str = '';
        if (typeof d === 'string') {
          str += d;
        } else if (d.heading) {
          str += `${d.heading} ${d.subheading}`;
        }
        return str;
      }),
    ];

    const tableData = JSON.parse(JSON.stringify(this.data.data)).sort(this.tableSort);

    const tableBody = tableData.map((row) => {
      return {
        key: row.geography,
        values: row.values.map((d) => d[this.method]),
      };
    });

    const tableGenerator = util.drawTable.bind(this);
    tableGenerator(tableHead, tableBody);
  };

  this.drawList = function () {
    const active = this.selected;
    const dots = this.dotContainer.selectAll('g');

    let row = this.list.selectAll('g.row').data(this.data.data);
    const rowE = row.enter().append('g').attr('class', 'row');
    row.exit().remove();
    row = row.merge(rowE);

    rowE
      .append('rect')
      .attr('class', 'fill')
      .attr('width', this.padding.left)
      .attr('height', this.rowHeight - 4)
      .attr('fill', color.blue)
      .style('cursor', 'pointer')
      .attr('rx', 3);
    rowE.append('text').attr('class', 'label');

    row
      .attr('transform', (d, i) => `translate(0, ${i * (this.rowHeight - 4)})`)
      .on('click keyup', (e) => {
        if (e && e.type === 'keyup' && e.key !== 'Enter') return;
        if (e && e.type === 'click') e.currentTarget.blur();
        const i = row.nodes().indexOf(e.currentTarget);
        if (this.selected === i) {
          this.render(this.data, { selected: null });
        } else {
          this.render(this.data, { selected: i });
        }
      })
      .attr('tabindex', 0);

    row
      .select('rect.fill')
      .attr('fill-opacity', (d, i) => (i === this.selected ? 1 : 0))
      .on('mouseenter', function ({ currentTarget }) {
        const i = row.nodes().indexOf(currentTarget.parentNode);
        if (i === active) return;
        d3.select(this).attr('fill-opacity', 0.25);
        dots
          .filter((dj, index) => i === index)
          .select('circle')
          .attr('r', 8)
          .attr('fill-opacity', 1)
          .attr('stroke-opacity', 1);
      })
      .on('mouseleave', function ({ currentTarget }) {
        const i = row.nodes().indexOf(currentTarget.parentNode);
        if (i === active) return;
        d3.select(this).attr('fill-opacity', 0);
        dots
          .filter((dj, index) => i === index)
          .select('circle')
          .attr('r', 6)
          .attr('fill-opacity', fillOpacity)
          .attr('stroke-opacity', strokeOpacity);
      });

    row
      .select('text.label')
      .text((d) => d.geography)
      .attr('y', this.rowHeight / 2 + 3)
      .attr('x', 10)
      .attr('font-weight', (d) => (d.totalRow || d.avgRow ? 700 : 400))
      .attr('fill', color.purple)
      .style('pointer-events', 'none');
  };

  this.drawValues = function () {
    const values = this.values.attr('transform', `translate(${x(0)}, ${y(0.333)})`).selectAll('g');

    values.attr(`transform`, (d, i) => {
      if (i === 1) {
        return `translate(${-x(-0.2)}, -${y(0.7)}) rotate(-60)`;
      }
      if (i === 2) {
        return `translate(${x(-0.2)}, -${y(0.7)}) rotate(60)`;
      }
      if (i === 0) {
        return `translate(0, ${y(0.45)})`;
      }
      return null;
    });

    values
      .select('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', 18)
      .attr('font-weight', '900')
      .attr('fill', color.purple)
      .text((d, i) => {
        if (this.selected === -1) return '';
        return this.format(this.data.data[this.selected].values[i][this.method], this.method);
      });
  };

  // Renders the angled tick marks and tick labels
  // using the tickData generated before
  this.drawTicks = function () {
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
      .attr('x', (d) => x(d[1].x) - 6)
      .attr('y', (d) => y(d[1].y) + 4);

    // Labels right
    this.matrix
      .selectAll('text.label-2')
      .data(tickData.filter((d, i) => i >= 9 && i < 18))
      .enter()
      .append('text')
      .attr('class', 'label-2')
      .attr('x', (d) => x(d[1].x) + 4)
      .attr('y', (d) => y(d[1].y) + 4)
      .attr('transform', (d) => `rotate(300, ${x(d[1].x)}, ${y(d[1].y)})`)
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
      .attr('x', (d) => x(d[1].x) + 4)
      .attr('y', (d) => y(d[1].y) + 4)
      .attr('transform', (d) => `rotate(60, ${x(d[1].x)}, ${y(d[1].y)})`)
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
      .attr('d', (d) => line(d));
  };

  // Draws the labes for each of the three
  // axis and their angled arrows
  this.drawAxisLabels = function () {
    // Axis 2 label
    this.matrix
      .append('text')
      .attr('class', 'label2')
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
      .attr('text-anchor', 'middle')
      .style('font-size', 15)
      .style('font-weight', 'bold')
      .attr('x', x(tickData[22][1].x))
      .attr('y', y(tickData[22][1].y) + 42);

    // Position the arrows' parent group to the center
    // of the matrix
    this.arrows.attr('transform', `translate(${x(0)},${y(0.333)})`);

    // Create the arrow parent and arrow DOM elements
    const arrow = this.arrows
      .selectAll('g.arrow')
      .data([1, 3, 5])
      .join((enter) => {
        const g = enter.append('g').attr('class', 'arrow');
        g.append('path')
          .attr('d', () => {
            return `M0,0 h70 l-10,-4 v8 l10,-4 Z`;
          })
          .attr('stroke', 'black')
          .attr('fill', 'black');
        return g;
      });

    // Rotate and position the arrow parent group
    arrow.attr(`transform`, (d) => {
      return `rotate(${60 * d}) translate(${this.width * 0.3},${this.width * -0.39})`;
    });
  };

  // Draw the triangle, grid lines, labels etc on screen
  this.drawGrid = function () {
    this.matrix = this.canvas.append('g').attr('class', 'matrix');
    this.arrows = this.matrix.append('g').attr('class', 'arrows');
    this.values = this.matrix.append('g').attr('class', 'values');

    this.values.append('g').append('text');
    this.values.append('g').append('text');
    this.values.append('g').append('text');

    this.drawTicks();
    this.drawAxisLabels();

    // Triangle background
    this.matrix.append('path').datum(triangleData).attr('d', line).attr('fill', color.light_grey);

    // Grid lines
    this.matrix
      .selectAll('.line')
      .data(gridLinesData)
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('stroke-width', 2)
      .attr('stroke', 'white')
      .attr('d', (d) => line(d));

    // Triangle frame
    this.matrix
      .append('path')
      .datum(triangleData)
      .attr('d', line)
      .attr('stroke-width', 2)
      .attr('stroke', 'black')
      .attr('fill', 'none');
  };

  // Draws the helper lines when a node is selected
  this.drawGuideLines = function () {
    if (this.selected === null || this.selected === -1 || this.selected === undefined) {
      this.lineContainer.selectAll('path.lines').transition().duration(this.duration).attr('opacity', 0);
      return;
    }

    // Find the node element on the selected index
    // and store its coordinates (m, n)
    const el = this.dotContainer.selectAll('g').filter((d, i) => i === this.selected);
    const circ = el.select('circle');
    const m = +el.attr('data-x');
    const n = +el.attr('data-y');

    const xx = d3.scaleLinear().range([-1, 1]).domain([1, 0]);

    // Generate the data to draw the guide lines
    // based on the coordinates of the selected node
    const lineData = [
      [
        { x: x.invert(m), y: y.invert(n) },
        { x: xx(circ.attr('data-0')), y: 0 },
      ],
      [
        { x: x.invert(m), y: y.invert(n) },
        { x: circ.attr('data-1') - 1, y: circ.attr('data-1') },
      ],
      [
        { x: x.invert(m), y: y.invert(n) },
        { x: circ.attr('data-2'), y: 1 - circ.attr('data-2') },
      ],
    ];

    // Create, update, remove pattern for
    // the guide lines using the lineData
    let lines = this.lineContainer.selectAll('path.lines').data(lineData);
    lines.exit().remove();
    const linesE = lines.enter().append('path').attr('class', 'lines');
    lines = lines.merge(linesE);
    lines
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
      .style('pointer-events', 'none')
      .transition()
      .duration(this.duration)
      .attr('opacity', 1)
      .attr('d', line);
  };

  // Draw and position nodes inside the matrix
  this.drawMatrix = function () {
    // Create dots (groups)
    let dot = this.dotContainer.selectAll('g').data(this.data.data);
    dot.exit().remove();
    const dotE = dot
      .enter()
      .append('g')
      .attr('transform', () => `translate(${x(0)}, ${y(0.5)})`);
    dotE.append('circle');
    dot = dot.merge(dotE);

    // Update position of the dot (group)
    dot
      .transition()
      .attr('transform', (d) => {
        const posY = y(d.values[1].ratio);
        const posX = x(d.values[2].ratio - d.values[0].ratio);
        return `translate(${posX}, ${posY})`;
      })
      .attr('data-x', (d) => x(d.values[2].ratio - d.values[0].ratio))
      .attr('data-y', (d) => y(d.values[1].ratio));

    // Update style of dot (circle)
    dot
      .select('circle')
      .attr('stroke-width', 2)
      .attr('data-0', (d) => +d.values[0].ratio)
      .attr('data-1', (d) => +d.values[1].ratio)
      .attr('data-2', (d) => +d.values[2].ratio)
      .transition()
      .duration(this.duration)
      .attr('fill', (d, i) => {
        if (d.avgRow) {
          return color.red;
        }
        if (d.totalRow) {
          return color.yellow;
        }
        return i === this.selected ? color.purple : color.blue;
      })
      .attr('r', (d, i) => (i === this.selected ? 9 : 6))
      .attr('fill-opacity', (d, i) => (i === this.selected ? 1 : fillOpacity))
      .attr('stroke-opacity', (d, i) => (i === this.selected ? 1 : strokeOpacity))
      .attr('stroke', (d, i) => (i === this.selected ? color.light_grey : color.purple));

    dot
      .on('mouseover', ({ currentTarget }) => {
        const i = dot.nodes().indexOf(currentTarget);
        this.render(this.data, { selected: i });
      })
      .on('mouseleave', () => {
        this.render(this.data, { selected: this.selected });
      });
  };

  this.updateAxisLabels = function () {
    let label1Text;
    let label2Text;
    let label3Text;

    if (typeof this.data.meta.series === 'string') {
      label1Text = `Andel ${this.data.meta.series[0].toLowerCase()} (%)`;
      label2Text = `Andel ${this.data.meta.series[1].toLowerCase()} (%)`;
      label3Text = `Andel ${this.data.meta.series[2].toLowerCase()} (%)`;
    } else {
      label1Text = `Andel ${this.data.meta.series[0].heading.toLowerCase()} (%)`;
      label2Text = `Andel ${this.data.meta.series[1].heading.toLowerCase()} (%)`;
      label3Text = `Andel ${this.data.meta.series[2].heading.toLowerCase()} (%)`;
    }

    this.matrix.select('text.label1').text(label1Text);
    this.matrix.select('text.label2').text(label2Text);
    this.matrix.select('text.label3').text(label3Text);
  };

  // Calculate the starting and ending coordinates
  // for the angled ticks
  this.getTick = function (x1, y1, angle, dist) {
    const s = d3.scaleLinear().domain([0, 1]).range([0, this.height]);
    const rad = angle * (Math.PI / 180);
    const distX = s(dist) * Math.cos(rad);
    const distY = s(dist) * Math.sin(rad);
    const x2 = x.invert(distX + x(x1));
    const y2 = y.invert(distY + y(y1));
    return [
      { x: x1, y: y1 },
      { x: x2, y: y2 },
    ];
  };

  const tickData = [
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

  this.init(svg);
}

export default Template;
