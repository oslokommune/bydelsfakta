export function initRowMedianText(selection) {
  selection
    .attr('class', 'median-value')
    .attr('text-anchor', 'start')
    .attr('font-size', 12)
    .attr('font-weight', 700)
    .attr('y', this.rowHeight / 2 + 5);
}

export function updateRowMedianText(selection) {
  selection
    .select('.median-value')
    .text((d) => `${d.median} år`)
    .transition()
    .duration(this.duration)
    .attr('x', (d) => this.gapX + this.width1 + this.x2(d.median) + 6);
}
