import { min, max, extent, scaleLinear, scaleBand } from 'd3';

export default function() {
  const years = this.filteredData.map(d => d.date);

  this.y[0] = scaleLinear()
    .domain([min([0, ...this.filteredData.map(d => d.barData)]), max(this.filteredData.map(d => d.barData))])
    .range([this.barChartHeight, 0])
    .nice();

  this.y[1] = scaleLinear()
    .domain(extent(this.filteredData.map(d => d.lineData1)))
    .range([this.lineChartHeight, 0])
    .nice();

  this.y[2] = scaleLinear()
    .domain(extent(this.filteredData.map(d => d.lineData2)))
    .range([this.lineChartHeight, 0])
    .nice();

  this.x = scaleBand()
    .rangeRound([0, this.width])
    .domain(years)
    .padding(0.15);
}
