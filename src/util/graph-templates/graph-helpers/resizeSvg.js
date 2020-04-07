export default function resizeSvg(selection) {
  selection
    .transition()
    .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
    .attr('width', this.padding.left + this.width + this.padding.right);
}
