export default function positionColumns(selection) {
  selection
    .transition()
    .duration(this.duration)
    .attr('transform', (d, i) => `translate(${this.x[i](0)},0)`);
}
