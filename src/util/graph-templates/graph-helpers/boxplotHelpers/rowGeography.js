import { color } from '@/util/graph-templates/colors';
import util from '@/util/graph-templates/template-utils';

export function initRowGeography(selection) {
  selection
    .attr('class', 'geography')
    .attr('fill', color.purple)
    .attr('y', this.rowHeight / 2 + 6)
    .attr('x', -this.padding.left + 10);
}

export function updateRowGeography(selection) {
  selection
    .select('.geography')
    .attr('font-weight', (d) => (d.avgRow || d.totalRow ? 700 : 400))
    .text((d) => util.truncate(d.geography, this.padding.left));
}
