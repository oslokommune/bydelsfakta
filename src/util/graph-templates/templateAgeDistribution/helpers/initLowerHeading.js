import { color } from '@/util/graph-templates/colors';

export default function(selection) {
  selection
    .classed('xAxis-title', true)
    .attr('font-size', '1em')
    .attr('font-weight', 500)
    .attr('fill', color.purple)
    .attr('transform', `translate(${this.paddingLowerLeft}, ${-32})`);
}
