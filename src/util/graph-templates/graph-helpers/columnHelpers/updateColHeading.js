import util from '@/util/graph-templates/template-utils';

export default function(selection) {
  selection
    .select('text.colHeading')
    .style('display', () => (this.filteredData.meta.series.length > 1 || this.selected > -1 ? 'inherit' : 'none'))
    .text((d, i) => {
      const colWidth = this.x[i].range()[1] - this.x[i].range()[0];
      return util.truncate(d.heading, colWidth);
    })
    .attr('opacity', (d, i) =>
      i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2
    );
}
