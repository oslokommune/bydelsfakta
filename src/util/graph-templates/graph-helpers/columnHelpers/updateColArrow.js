export default function(selection) {
  selection
    .select('rect.arrow')
    .attr('transform', `translate(0, ${this.rowHeight / 2 - 5})`)
    .transition()
    .duration(this.duration)
    .attr('y', () => this.filteredData.data.findIndex(d => d.totalRow) * this.rowHeight)
    .attr('x', (d, i) => {
      let val;
      const totalRow = this.filteredData.data.find(dj => dj.totalRow);

      if (totalRow && totalRow.values && totalRow.values[i]) {
        val = totalRow.values[i][this.method];
      } else {
        return null;
      }

      if (this.method === 'value' && val > this.x[i].domain()[1]) return 0;
      return this.x[0](val);
    })
    .attr('opacity', (d, i) => {
      let val;
      const totalRow = this.filteredData.data.find(dj => dj.totalRow);

      if (totalRow && totalRow.values && totalRow.values[i]) {
        val = totalRow.values[i][this.method];
      } else {
        return 0;
      }

      if (this.isMobileView) {
        return 0;
      }
      if (this.method === 'value' && val > this.x[i].domain()[1]) {
        return 0;
      }
      return 1;
    });
}
