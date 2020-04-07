import { norwegianLocale } from '@/util/graph-templates/locale';

export function initMeanText(selection) {
  selection
    .attr('class', 'mean-value')
    .attr('text-anchor', 'start')
    .attr('font-size', 12)
    .attr('font-weight', 700)
    .attr('y', this.rowHeight / 2 + 5);
}

export function updateRowMeanText(selection) {
  selection
    .select('.mean-value')
    .text(d => `${norwegianLocale.format(',.2f')(d.mean)} år`)
    .transition()
    .duration(this.duration)
    .attr('x', d => this.x(d.mean) + 6);
}
