import { axisLeft, axisBottom } from 'd3';

export default function() {
  this.barChart
    .select('g.axis.y')
    .transition()
    .call(axisLeft(this.y[0]).tickFormat(d => this.format(d, 'value', true)));
  this.lineChart1
    .select('g.axis.y')
    .transition()
    .call(
      axisLeft(this.y[1])
        .ticks(4)
        .tickFormat(d => this.format(d, 'value', true))
    );
  this.lineChart2
    .select('g.axis.y')
    .transition()
    .call(
      axisLeft(this.y[2])
        .ticks(4)
        .tickFormat(d => this.format(d, 'value', true))
    );

  this.barChart.select('g.axis.x').call(axisBottom(this.x));
  this.lineChart1.select('g.axis.x').call(axisBottom(this.x));
  this.lineChart2.select('g.axis.x').call(axisBottom(this.x));
}
