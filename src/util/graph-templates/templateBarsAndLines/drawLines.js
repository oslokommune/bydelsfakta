import { line } from 'd3';

export default function(selection, scale, clipId) {
  const lineGenerator = line()
    .x(d => this.x(d.date))
    .y(d => scale(d[clipId]));

  selection
    .selectAll('.line')
    .data([this.filteredData, this.filteredData])
    .attr('transform', `translate(${this.x.bandwidth() / 2}, 0)`)
    .style('pointer-events', 'none')
    .transition()
    .attr('d', lineGenerator);

  selection.select('path.negative').attr('clip-path', `url(#${clipId}-${this.salt})`);
}
