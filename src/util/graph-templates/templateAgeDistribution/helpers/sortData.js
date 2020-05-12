import { sum } from 'd3';

export default function(input, method) {
  input.sort((a, b) => {
    if (a.avgRow) return 1;
    if (a.totalRow) return 1;

    const totA = sum(a.values.filter((d, i) => i >= this.extent[0] && i <= this.extent[1]).map(d => d[method]));
    const totB = sum(b.values.filter((d, i) => i >= this.extent[0] && i <= this.extent[1]).map(d => d[method]));
    return totB - totA;
  });

  return input;
}
