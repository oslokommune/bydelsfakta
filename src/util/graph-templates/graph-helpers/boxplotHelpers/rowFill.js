import { color } from '@/util/graph-templates/colors';

export function initRowFill(selection) {
  selection
    .attr('class', 'rowFill')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('x', -this.padding.left);
}

export function updateRowFill(selection) {
  selection
    .select('.rowFill')
    .transition()
    .duration(this.duration)
    .attr('fill-opacity', (d) => (d.avgRow || d.totalRow ? 0.05 : 0))
    .attr('width', this.width + this.padding.left + this.padding.right);
}
