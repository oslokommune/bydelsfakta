import { color } from '@/util/graph-templates/colors';

export default function(selection, offsetY, height) {
  selection.attr('transform', `translate(0, ${offsetY})`);

  selection.append('text').attr('class', 'group-heading');
  selection.append('g').attr('class', 'axis y');

  selection
    .append('line')
    .attr('class', 'zero')
    .attr('stroke', 'black');

  selection
    .append('path')
    .attr('class', 'line positive')
    .attr('fill', 'none')
    .attr('stroke', color.purple)
    .attr('stroke-width', 3);

  selection
    .append('path')
    .attr('class', 'line negative')
    .attr('fill', 'none')
    .attr('stroke', color.red)
    .attr('stroke-width', 3);

  selection
    .append('g')
    .attr('class', 'axis x')
    .attr('transform', `translate(0, ${height})`);

  selection.append('g').attr('class', 'voronoi');
}
