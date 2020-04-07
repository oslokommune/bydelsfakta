import { max, scaleLinear, sum } from 'd3';

export default function() {
  if (!this.filteredData.meta.series || !this.filteredData.meta.series.length) return;
  const maxValues = this.filteredData.meta.series.map((row, i) => {
    return max(
      this.filteredData.data
        .filter(d => !(this.method === 'value' && (d.totalRow || d.avgRow)))
        .map(d => {
          if (!d.values || !d.values[i] || !d.values[i][this.method]) return 0;
          return d.values[i][this.method];
        })
    );
  });

  this.x2 = scaleLinear()
    .range([0, this.width - (this.gutter * this.filteredData.meta.series.length - 1)])
    .domain([0, sum(maxValues)]);

  this.x = this.filteredData.meta.series.map((series, index) => {
    const SCALE = scaleLinear();
    let startPos = 0;
    for (let i = 0; i < index; i += 1) {
      startPos += this.x2(maxValues[i]);
      startPos += this.gutter;
    }
    const endPos = startPos + this.x2(maxValues[index]);
    SCALE.domain([0, maxValues[index]])
      .range([startPos, endPos])
      .nice();

    return SCALE;
  });

  this.x2.domain(this.filteredData.meta.series.map((d, i) => i)).range([0, this.width]);
}
