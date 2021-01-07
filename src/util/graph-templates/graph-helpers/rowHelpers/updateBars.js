export default function (selection) {
  selection
    .attr('height', (d, i, j) => {
      if (this.isMobileView) return 7;
      return j[0].parentNode.__data__.totalRow ? 2 : this.barHeight;
    })
    .attr('y', (d, i, j) => {
      if (this.isMobileView) {
        return (this.rowHeight - this.barHeight) / 2 + 12;
      }
      return j[0].parentNode.__data__.totalRow ? this.rowHeight / 2 : (this.rowHeight - this.barHeight) / 2;
    })
    .attr('opacity', (d, i) =>
      i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2
    )
    .transition()
    .duration(this.duration)
    .attr('width', (d, i) => {
      if (this.method === 'value' && d[this.method] > this.x[i].domain()[1]) return 0;
      return Math.max(this.x[0](d[this.method]), 0);
    })
    .attr('x', (d, i) => this.x[i](0));
}
