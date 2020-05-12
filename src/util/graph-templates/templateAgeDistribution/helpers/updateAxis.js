import { axisLeft, axisBottom, axisTop } from 'd3';

import { getMax, getMaxAccumulated } from './getMax';

export default function() {
  // Find the larges accumulated number within the selected range
  const maxAccumulated = getMaxAccumulated.call(this);

  // Find the largest single age to scale y axis behind brush within the selected range
  const max = getMax.call(this);

  // Set axis and scales based on these max values (for the bars()
  this.y
    .domain([0, max])
    .range([this.height2, 0])
    .nice();
  this.x
    .domain([0, maxAccumulated])
    .range([0, this.width - this.paddingLowerLeft])
    .nice();

  this.upperYAxis
    .transition()
    .duration(this.duration)
    .call(
      axisLeft(this.y)
        .ticks(4)
        .tickFormat(d => this.format(d, this.method, true))
    );
  this.upperXAxis
    .transition()
    .duration(this.duration)
    .call(
      axisBottom(this.age)
        .ticks((this.width - this.paddingUpperLeft) / 100)
        .tickFormat(d => `${d} år`)
    );
  this.lowerXAxis
    .transition()
    .duration(this.duration)
    .call(
      axisTop(this.x)
        .ticks((this.width - this.paddingLowerLeft) / 70)
        .tickFormat(d => this.format(d, this.method, true))
    );
}
