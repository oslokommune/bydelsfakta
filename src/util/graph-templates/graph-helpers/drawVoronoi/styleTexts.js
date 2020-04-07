export default function(selection, dataAccessor) {
  selection
    .select('text')
    .attr('x', d => d.data.x + this.x.bandwidth() / 2 + 4)
    .attr('y', d => d.data.y - 8)
    .text(dataAccessor)
    .attr('opacity', 0)
    .style('pointer-events', 'none')
    .style('cursor', 'auto');
}
