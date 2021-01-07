import { color } from '@/util/graph-templates/colors';

export function initRowDivider(selection) {
  selection
    .attr('class', 'divider')
    .attr('fill', color.purple)
    .attr('x', -this.padding.left)
    .attr('height', 1)
    .attr('y', this.rowHeight);
}

export function updateRowDivider(selection) {
  selection
    .select('.divider')
    .transition()
    .duration(this.duration)
    .attr('fill-opacity', (d) => (d.avgRow || d.totalRow ? 0.5 : 0.2))
    .attr('width', this.width + this.padding.left + this.padding.right);
}
