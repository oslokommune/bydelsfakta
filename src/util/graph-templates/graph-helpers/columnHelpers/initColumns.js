import createColumns from './createColumns';

export default function() {
  return this.canvas
    .select('g.columns')
    .selectAll('g.column')
    .data(this.filteredData.meta.series, d => d.heading + d.subheading)
    .join(createColumns);
}
