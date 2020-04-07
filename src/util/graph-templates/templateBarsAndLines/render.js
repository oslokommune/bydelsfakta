import { max } from 'd3';

import variations from './_variations';
import updateBars from './updateBars';
import drawTable from './drawTable';
import cleanupData from './cleanupData';
import updateZeroLines from './updateZeroLines';
import setScales from './setScales';
import updateLineChart from './updateLineChart';
import updateAxis from './updateAxis';

export default function(data, options = {}) {
  if (!this.commonRender(data, options)) return;

  this.filteredData = JSON.parse(JSON.stringify(data.data))
    .filter(row => row.totalRow || row.avgRow)[0]
    .values[0].map(cleanupData.bind(this));

  this.height = this.barChartHeight + this.gapY + this.lineChartHeight + this.gapY + this.lineChartHeight;
  this.width = max([this.width, this.mobileWidth]);
  this.svg
    .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
    .attr('width', this.width + this.padding.left + this.padding.right);

  // Set headings for each of the three charts
  this.barChart.select('.group-heading').text(variations[this.variant].barData.heading);
  this.lineChart1.select('.group-heading').text(variations[this.variant].lineData1.heading);
  this.lineChart2.select('.group-heading').text(variations[this.variant].lineData2.heading);

  drawTable.call(this);
  setScales.call(this);
  updateAxis.call(this);

  this.barChart.select('.zero').call(updateZeroLines.bind(this), this.y[0]);

  this.lineChart1.call(updateLineChart.bind(this), {
    scale: this.y[1],
    clipId: `lineData1`,
  });

  this.lineChart2.call(updateLineChart.bind(this), {
    scale: this.y[2],
    clipId: `lineData2`,
  });

  this.barChart.selectAll('rect').call(updateBars.bind(this));
}
