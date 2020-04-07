export default function(selection) {
  selection
    .select('circle')
    .attr('r', 6)
    .attr('cx', d => d.data.x + this.x.bandwidth() / 2)
    .attr('cy', d => d.data.y)
    .attr('opacity', 0)
    .style('pointer-events', 'none')
    .attr('stroke', 'white')
    .attr('stroke-width', 2);
}
