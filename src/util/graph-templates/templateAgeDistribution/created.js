import { color } from '@/util/graph-templates/colors';

import drawHandles from './helpers/drawHandles';
import createAgeSelector from './helpers/createAgeSelector';
import initLowerHeading from './helpers/initLowerHeading';

// Runs once after initialization. Creates elements that are
// unique to this template
export default function() {
  createAgeSelector.call(this);

  this.upper = this.canvas.append('g').attr('class', 'upper');
  this.middle = this.canvas
    .append('g')
    .attr('class', 'middle')
    .attr('transform', `translate(0, ${this.height2 + 40})`);
  this.lower = this.canvas.append('g').attr('class', 'lower');

  this.lower.append('text').call(initLowerHeading.bind(this));

  this.brushSmall.extent([
    [0, 0],
    [this.width + this.padding.right, 19],
  ]);

  this.upper.append('g').attr('class', 'lines');

  this.upper
    .append('rect')
    .classed('selection', true)
    .attr('height', this.height2)
    .attr('width', 200)
    .attr('fill', color.yellow)
    .attr('fill-opacity', 0.2)
    .attr('stroke', color.yellow)
    .attr('transform', `translate(${this.paddingUpperLeft}, 0)`);

  this.gBrushSmall = this.middle
    .append('g')
    .attr('class', 'brush')
    .attr('transform', `translate(${this.paddingUpperLeft}, 0)`)
    .call(this.brushSmall);

  this.gBrushSmall
    .select('.selection')
    .attr('fill', color.yellow)
    .attr('fill-opacity', 1);
  this.gBrushSmall
    .select('.overlay')
    .attr('stroke', color.purple)
    .attr('rx', 2);

  this.upperXAxis = this.upper
    .append('g')
    .attr('class', 'axis x')
    .attr('transform', `translate(${this.paddingUpperLeft}, ${this.height2})`);

  this.upperYAxis = this.upper
    .append('g')
    .attr('class', 'axis y')
    .attr('transform', `translate(${this.paddingUpperLeft}, 0)`);

  this.lowerXAxis = this.lower
    .append('g')
    .attr('class', 'axis x')
    .attr('transform', `translate(${this.paddingLowerLeft}, 0)`);

  drawHandles.call(this);

  this.gBrushSmall
    .transition()
    .duration(this.duration)
    .call(this.brushSmall.move, [0, 50].map(this.age));
}
