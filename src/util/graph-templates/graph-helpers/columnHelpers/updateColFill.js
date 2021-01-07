export default function (selection) {
  selection
    .select('rect.colFill')
    .attr('y', -10)
    .transition()
    .duration(this.duration)
    .attr('height', this.height + 20)
    .duration(this.duration)
    .attr('width', (d, i) => {
      let val;
      const totalRow = this.filteredData.data.find((dj) => dj.totalRow);

      if (totalRow && totalRow.values && totalRow.values[i]) {
        val = totalRow.values[i][this.method];
      } else {
        return 0;
      }

      if ((this.method === 'value' && val > this.x[i].domain()[1]) || this.isMobileView) {
        return 0;
      }
      if (this.filteredData.data.filter((dj) => dj.totalRow).length) {
        return this.x[0](val);
      }
      return 0;
    });
}
