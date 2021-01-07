import d3 from '@/assets/d3';
import { color } from '../../colors';

export default function (selection) {
  selection
    .classed('valueText', true)
    .attr('fill', color.purple)
    .attr('y', this.rowHeight / 2 + 4)
    .attr('x', (d, i) => this.x[i](0))
    .text((d) => (d[this.method] ? this.format(d[this.method], this.method) : 'Ikke tilgjengelig'))
    .attr('opacity', (d, i, j) => {
      if (this.isMobileView && this.method === 'value') return 0;
      const parent = d3.select(j[i].parentNode);
      const avgOrTotal = JSON.parse(parent.attr('data-avgRow')) || JSON.parse(parent.attr('data-totalRow'));
      return avgOrTotal && this.method === 'value' && d.value > this.x[i].domain()[1] ? 1 : 0;
    });
}
