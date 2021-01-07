import { color } from '@/util/graph-templates/colors';

export function initMeanRect(selection) {
  selection
    .attr('class', 'mean-stroke')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('width', 3)
    .attr('shape-rendering', 'geometricPrecision')
    .attr('transform', `translate(-1.5, 0)`)
    .attr('y', 0);
}

export function updateRowMeanRect(selection) {
  selection
    .select('.mean-stroke')
    .transition()
    .duration(this.duration)
    .attr('x', (d) => this.x(d.mean));
}
