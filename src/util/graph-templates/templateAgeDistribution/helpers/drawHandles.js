import { color } from '@/util/graph-templates/colors';

// Draws the handle icons. Triggered from this.created()
export default function() {
  this.handle = this.gBrushSmall
    .selectAll('path.handle')
    .data([{ type: 'w' }, { type: 'e' }])
    .enter()
    .append('g')
    .attr('class', 'handleIcon')
    .attr('transform', 'translate(0, -9)');

  this.handle
    .append('path')
    .attr('fill', color.purple)
    .style('pointer-events', 'none')
    .attr('d', d =>
      d.type === 'e' ? 'M0 0h11c6 0 10 4 10 10v17c0 6-4 10-10 10H0V0z' : 'M21 0H10C4 0 0 4 0 10v17c0 6 4 10 10 10h11V0z'
    );

  this.handle
    .append('rect')
    .style('pointer-events', 'none')
    .attr('height', 11)
    .attr('width', 1)
    .attr('x', 6)
    .attr('y', 13)
    .attr('fill', 'white')
    .attr('fill-opacity', '0.75');

  this.handle
    .append('rect')
    .style('pointer-events', 'none')
    .attr('height', 11)
    .attr('width', 1)
    .attr('x', 10)
    .attr('y', 13)
    .attr('fill', 'white')
    .attr('fill-opacity', '0.75');

  this.handle
    .append('rect')
    .style('pointer-events', 'none')
    .attr('height', 11)
    .attr('width', 1)
    .attr('x', 14)
    .attr('y', 13)
    .attr('fill', 'white')
    .attr('fill-opacity', '0.75');
}
