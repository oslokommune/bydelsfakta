// Updates the text and position for both axis labels on each render
export default function() {
  this.canvas
    .select('text.label-median')
    .transition()
    .duration(this.duration)
    .attr('x', this.width1 + this.gapX + this.width2 / 2);

  this.canvas
    .select('text.label-mean')
    .transition()
    .duration(this.duration)
    .attr('x', this.width1 / 2);
}
