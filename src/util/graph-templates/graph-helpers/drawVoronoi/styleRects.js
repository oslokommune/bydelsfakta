import { color } from '@/util/graph-templates/colors';
import util from '@/util/graph-templates/template-utils';

export default function(selection, dataAccessor) {
  selection
    .select('rect')
    .attr('height', 25)
    .attr('data-value', dataAccessor)
    .attr('width', (d, i, j) => util.getTextWidth(j[i].dataset.value) + 12)
    .attr('x', d => d.data.x + this.x.bandwidth() / 2 - 2)
    .attr('y', d => d.data.y - 26)
    .attr('fill', color.yellow)
    .attr('stroke', 'white')
    .attr('rx', 12.5)
    .attr('opacity', 0)
    .style('pointer-events', 'none');
}
