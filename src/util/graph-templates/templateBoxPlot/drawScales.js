import { axisTop, extent } from 'd3';

// Updates the scales and axis for the two charts on each render.
export default function() {
  this.width1 = (this.width - this.gapX) / 2;
  this.width2 = (this.width - this.gapX) / 2;

  this.x2
    .range([0, this.width2])
    .domain([0, 70])
    .nice();
  this.x2Axis
    .transition()
    .duration(this.duration)
    .call(
      axisTop(this.x2)
        .tickFormat(d => `${d} år`)
        .ticks(this.width2 / 60)
    )
    .attr('transform', `translate(${this.width1 + this.gapX})`);

  this.x
    .range([0, this.width1])
    .domain(extent(this.data.data.map(d => d.mean)))
    .nice();
  this.xAxis
    .transition()
    .duration(this.duration)
    .call(
      axisTop(this.x)
        .tickFormat(d => `${d} år`)
        .ticks(this.width2 / 60)
    );
}
