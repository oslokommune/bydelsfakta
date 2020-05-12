import { color } from '@/util/graph-templates/colors';
import { hideTooltip, showTooltipMove, showTooltipOver } from '@/util/tooltip';

export default function(selection) {
  const bars = selection.data(this.filteredData).join('rect');

  bars
    .attr('x', d => this.x(d.date))
    .attr('width', this.x.bandwidth())
    .attr('fill-opacity', 1)
    .transition()
    .attr('height', d => Math.abs(this.y[0](0) - this.y[0](d.barData)))
    .attr('y', d => (d.barData > 0 ? this.y[0](d.barData) : this.y[0](0)))
    .attr('stroke', d => (d.barData > 0 ? color.purple : color.red))
    .attr('fill', d => (d.barData > 0 ? color.purple : color.red));

  bars.on('mouseenter', d => {
    showTooltipOver(this.formatDecimal(d.barData));
    showTooltipMove();
  });
  bars.on('mousemove', showTooltipMove);
  bars.on('mouseleave', hideTooltip);
}
