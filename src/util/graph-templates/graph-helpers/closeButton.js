import d3 from '@/assets/d3';
import { color } from '../colors';

export function init() {
  const duration = this.duration;

  const g = this.canvas
    .append('g')
    .attr('class', 'close')
    .style('display', 'none')
    .on('click keyup', () => {
      if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
      this.render(this.data, { method: this.method });
    });

  // Close button background
  g.append('rect')
    .attr('width', 30)
    .attr('height', 30)
    .attr('fill', color.red)
    .style('cursor', 'pointer')
    .attr('opacity', 0.7)
    .on('mouseenter', function() {
      d3.select(this)
        .transition()
        .duration(duration)
        .attr('opacity', 1);
    })
    .on('mouseleave', function() {
      d3.select(this)
        .transition()
        .duration(duration)
        .attr('opacity', 0.7);
    });

  // Close button icon
  g.append('text')
    .attr('fill', color.purple)
    .style('pointer-events', 'none')
    .text('x')
    .attr('font-weight', 700)
    .attr('font-size', 20)
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(15, 20)');

  return g;
}

//
export function showOrHide() {
  this.close
    .style('display', () => (this.selected > -1 ? 'block' : 'none'))
    .attr('transform', `translate(${this.width - 30}, -60)`)
    .attr('tabindex', this.selected === -1 ? false : 0);
}
