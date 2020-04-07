import { select, line, curveBasis } from 'd3';
import { color } from '@/util/graph-templates/colors';
import { showTooltipOver, showTooltipMove, hideTooltip } from '@/util/tooltip';

import { enterLines } from './enter';

export default function() {
  const lineGenerator = line()
    .curve(curveBasis)
    .x((d, i) => (i > this.ageCap ? this.age(this.ageCap) : this.age(i)))
    .y(d => this.y(d[this.method]));

  const lines = this.upper
    .select('.lines')
    .selectAll('path.line')
    .data(this.data.data.filter(d => (this.method === 'ratio' ? d : !d.avgRow && !d.totalRow)))
    .join(enterLines.bind(this));

  lines
    .attr('opacity', 1)
    .attr('d', d => lineGenerator(d.values))
    .attr('stroke-width', d => (d.avgRow || d.totalRow ? 3 : 2))
    .attr('stroke', d => (d.avgRow || d.totalRow ? color.purple : color.blue))
    .attr('stroke-opacity', d => (d.avgRow || d.totalRow ? 1 : 0.5))
    .style('stroke-dasharray', d => (d.totalRow && this.method === 'ratio' ? '4,3' : false));

  lines.on('mouseover', (d, i, j) => {
    lines.attr('opacity', 0.1).attr('stroke', color.blue);
    select(j[i])
      .attr('opacity', 1)
      .attr('stroke', color.purple);

    showTooltipOver(d.geography);
  });

  lines.on('mousemove', showTooltipMove);

  lines.on('mouseleave', () => {
    lines.attr('opacity', 1).attr('stroke', color.blue);
    hideTooltip();
  });
}
