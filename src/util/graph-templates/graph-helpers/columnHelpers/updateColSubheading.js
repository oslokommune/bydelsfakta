import util from '../../template-utils';

export default function (selection) {
  selection
    .select('text.colSubheading')
    .text((d, i) => util.truncate(d.subheading, this.x[i].range()))
    .style('display', () => (this.filteredData.meta.series.length > 1 || this.selected > -1 ? 'inherit' : 'none'))
    .attr('opacity', (d, i) =>
      i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2
    );
}
