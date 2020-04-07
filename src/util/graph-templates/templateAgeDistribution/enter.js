import { color } from '@/util/graph-templates/colors';

export function enterRows(enter) {
  const g = enter.append('g').attr('class', 'row');

  g.append('rect')
    .attr('class', 'rowFill')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('width', this.width);

  g.append('text')
    .attr('class', 'geography')
    .attr('fill', color.purple)
    .attr('x', 10)
    .attr('y', this.rowHeight / 2 + 7);

  g.append('text')
    .attr('class', 'value')
    .attr('y', this.rowHeight / 2 + 7)
    .attr('fill', color.purple)
    .attr('x', this.paddingLowerLeft - 40)
    .attr('text-anchor', 'end');

  g.append('rect')
    .attr('class', 'bar')
    .attr('height', this.barHeight);

  g.append('rect')
    .attr('class', 'divider')
    .attr('fill', color.purple)
    .attr('width', this.width)
    .attr('height', 1)
    .attr('y', this.rowHeight);

  return g;
}

export function enterLines(enter) {
  return enter
    .append('path')
    .classed('line', true)
    .attr('fill', 'none')
    .attr('transform', `translate(${this.paddingUpperLeft}, 0)`)
    .attr('opacity', 0);
}
