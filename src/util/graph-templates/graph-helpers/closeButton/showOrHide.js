//
export default function showOrHide() {
  this.close
    .style('display', () => (this.selected > -1 ? 'block' : 'none'))
    .attr('transform', `translate(${this.width - 30}, -60)`)
    .attr('tabindex', this.selected === -1 ? false : 0);
}
