import { color } from '@/util/graph-templates/colors';
import styleRowName from './styleRowName';
import styleValueText from './styleValueText';

export default function (selection) {
  // Dynamic styling, sizing and positioning based on data and container size
  selection
    .select('rect.rowFill')
    .attr('fill-opacity', (d) => (d.avgRow || d.totalRow ? 0 : 0))
    .attr('width', this.padding.left + this.width + this.padding.right);

  selection
    .select('rect.divider')
    .attr('fill-opacity', (d) => {
      if (this.data.meta.series.length === 1) return 0;
      if (this.isMobileView) return 0;
      if (d.avgRow || d.totalRow) return 0.5;
      return 0.2;
    })
    .attr('width', this.padding.left + this.width + this.padding.right);

  selection
    .selectAll('text.valueText')
    .data((d) => d.values)
    .join('text')
    .call(styleValueText.bind(this));

  selection
    .select('text.geography')
    .call(styleRowName.bind(this))
    .attr('font-weight', (d) => (d.avgRow || d.totalRow ? 700 : 400))
    .append('title')
    .html((d) => d.geography);

  // Add attributes to total and avg rows
  selection.attr('fill', (d) => {
    if (d.avgRow) return color.yellow;
    if (d.totalRow) return color.purple;
    return color.purple;
  });
}
