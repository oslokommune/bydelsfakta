import util from '@/util/graph-templates/template-utils';
import { color } from '@/util/graph-templates/colors';

export default function () {
  return this.canvas
    .select('g.rows')
    .selectAll('g.row')
    .data(this.filteredData.data, (d) => d.geography)
    .join(enterRowElements.bind(this), updateRowElements.bind(this))
    .classed('row', true)
    .attr('data-avgRow', (d) => d.avgRow)
    .attr('data-totalRow', (d) => d.totalRow);
}

function enterRowElements(selection) {
  const g = selection.append('g').attr('class', 'row');

  // Row fill
  g.insert('rect')
    .attr('class', 'rowFill')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('x', -this.padding.left)
    .attr('width', this.width + this.padding.left);

  // Row divider
  g.insert('rect')
    .attr('class', 'divider')
    .attr('fill', color.purple)
    .attr('x', -this.padding.left)
    .attr('width', this.width + this.padding.left)
    .attr('height', 1)
    .attr('y', this.rowHeight);

  // Text element
  g.append('text')
    .attr('class', 'geography')
    .attr('fill', color.purple)
    .attr('y', this.rowHeight / 2 + 6)
    .on('click', util.goto);

  g.append('g').attr('class', 'bars');

  g.append('text').attr('class', 'valueText').attr('fill', color.purple);

  g.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

  return g;
}

function updateRowElements(selection) {
  return selection.transition().attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
}
