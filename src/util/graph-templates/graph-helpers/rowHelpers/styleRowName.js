import util from '@/util/graph-templates/template-utils';
import getRowName from './getRowName';

export default function(selection) {
  selection
    .text(getRowName.bind(this))
    .attr('x', () => {
      if (this.isMobileView) return 0;
      return this.data.meta.series.length > 1 ? -this.padding.left + 10 : -10;
    })
    .attr('y', () => (this.isMobileView ? 15 : this.rowHeight / 2 + 4))
    .attr('text-anchor', () => {
      if (this.isMobileView) return 'start';
      if (this.data.meta.series.length > 1) return 'start';
      return 'end';
    })
    .style('cursor', d => {
      if (d.noLink) return false;
      return (this.isCompare && !d.totalRow) || (!this.isCompare && d.totalRow) ? 'pointer' : false;
    })
    .style('text-decoration', d => {
      if (d.noLink) return null;
      const isDistrict = util.allDistricts.some(district => district.value === d.geography);

      return (this.isCompare && !d.totalRow) || (!this.isCompare && d.totalRow) || isDistrict ? 'underline' : false;
    });
}
