import { color } from '@/util/graph-templates/colors';

export function initRowMedianRect(selection) {
  selection
    .attr('class', 'median-stroke')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('width', 3)
    .attr('shape-rendering', 'geometricPrecision')
    .attr('transform', `translate(-1.5, 0)`)
    .attr('y', 0);
}

export function updateRowMedianRect(selection) {
  selection
    .select('.median-stroke')
    .transition()
    .duration(this.duration)
    .attr('x', d => this.gapX + this.width1 + this.x2(d.median));
}
