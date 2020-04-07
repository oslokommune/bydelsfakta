import { select, axisBottom } from 'd3';

export default function() {
  this.xAxis = this.canvas
    .selectAll('g.axis.x')
    .data(this.x)
    .join('g')
    .attr('class', 'axis x');

  this.xAxis.each((d, i, j) => {
    select(j[i])
      .attr('opacity', () => {
        if (this.isMobileView) return 0;
        return i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2;
      })
      .transition()
      .duration(this.duration)
      .attr('transform', `translate(0, ${this.height + 10})`)
      .call(
        axisBottom(this.x[i])
          .ticks((this.x[i].range()[1] - this.x[i].range()[0]) / 60)
          .tickFormat(dj => this.format(dj, this.method, true))
      );
  });
}
