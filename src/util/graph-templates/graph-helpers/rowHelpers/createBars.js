export default function(selection) {
  return selection
    .selectAll('rect.bar')
    .data(d => d.values)
    .join('rect')
    .attr('class', 'bar');
}
