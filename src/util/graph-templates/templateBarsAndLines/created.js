import initBarChart from './initBarChart';
import initLineChart from './initLineChart';

export default function() {
  this.barChart = this.canvas
    .append('g')
    .attr('class', 'barChart')
    .call(initBarChart.bind(this));

  this.lineChart1 = this.canvas
    .append('g')
    .attr('class', 'lineChart1')
    .call(initLineChart.bind(this), this.barChartHeight + this.gapY, this.lineChartHeight);

  this.lineChart2 = this.canvas
    .append('g')
    .attr('class', 'lineChart2')
    .call(
      initLineChart.bind(this),
      this.barChartHeight + this.gapY + this.lineChartHeight + this.gapY,
      this.lineChartHeight
    );

  this.canvas.selectAll('.group-heading').attr('transform', 'translate(20, -10)');

  this.defs = this.svg.insert('defs');
  this.defs
    .append('clipPath')
    .attr('id', `lineData1-${this.salt}`)
    .append('rect');
  this.defs
    .append('clipPath')
    .attr('id', `lineData2-${this.salt}`)
    .append('rect');

  this.lineChart2.append('g').attr('class', 'voronoi');
}
