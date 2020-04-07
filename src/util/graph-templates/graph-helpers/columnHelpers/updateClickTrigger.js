import d3 from '@/assets/d3';

export default function(selection) {
  selection
    .select('rect.clickTrigger')
    .style('cursor', () => (this.data.meta.series.length > 1 ? 'pointer' : 'default'))
    .attr('width', (d, i) => {
      if (this.data.meta.series.length === 1) return 0;
      return this.x[i].range()[1] - this.x[i].range()[0] + this.gutter;
    })
    .attr('height', this.padding.top)
    .attr('transform', `translate(0, -60)`)
    .attr('fill', 'black')
    .attr('opacity', 0)
    .on('mouseover', (d, i) => {
      this.render(this.data, { highlight: i, selected: this.selected, method: this.method });
    })
    .on('mouseleave', () => {
      this.render(this.data, { highlight: -1, selected: this.selected, method: this.method });
    })
    .on('click keyup', (d, i) => {
      if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
      if (this.data.meta.series.length === 1) return;
      const target = this.selected > -1 ? -1 : i;

      this.render(this.data, { selected: target, method: this.method });
    })
    .attr('tabindex', this.filteredData.meta.series.length > 1 ? 0 : false)
    .append('title')
    .html(d => `${d.heading} ${d.subheading}`);
}
