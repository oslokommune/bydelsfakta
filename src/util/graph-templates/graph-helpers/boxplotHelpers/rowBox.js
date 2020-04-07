import { color } from '@/util/graph-templates/colors';

export function initRowBox(selection) {
  selection
    .attr('class', 'box')
    .attr('fill', color.purple)
    .attr('stroke', color.purple)
    .attr('stroke-width', 1)
    .attr('fill-opacity', 0.2)
    .attr('rx', 2)
    .attr('shape-rendering', 'geometricPrecision')
    .attr('height', this.barHeight)
    .attr('y', (this.rowHeight - this.barHeight) / 2);
}

export function updateRowBox(selection) {
  selection
    .select('.box')
    .transition()
    .duration(this.duration)
    .attr('x', d => this.gapX + this.width1 + this.x2(d.low))
    .attr('width', d => this.x2(d.high) - this.x2(d.low));
}
