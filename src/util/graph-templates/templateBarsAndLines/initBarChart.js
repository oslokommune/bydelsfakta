export default function(selection) {
  selection.append('text').attr('class', 'group-heading');

  selection
    .append('g')
    .attr('class', 'axis y')
    .append('line')
    .attr('class', 'zero')
    .attr('stroke', 'black');

  selection
    .append('g')
    .attr('class', 'axis x')
    .attr('transform', `translate(0, ${this.barChartHeight})`);
}
