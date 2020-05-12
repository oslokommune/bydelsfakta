export default function(selection, scale) {
  selection
    .raise()
    .attr('x1', 0)
    .attr('x2', this.width)
    .transition()
    .attr('y1', scale(0))
    .attr('y2', scale(0))
    .attr('opacity', scale.domain()[0] < 0 ? 0.75 : 0);
}
