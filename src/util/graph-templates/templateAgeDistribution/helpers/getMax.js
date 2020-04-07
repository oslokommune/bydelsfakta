import { max, sum } from 'd3';

// Finds the larges accumulated number within the selected range
export function getMaxAccumulated() {
  return (
    max(
      this.data.data
        .filter(district => (this.method === 'ratio' ? district : !district.totalRow && !district.avgRow))
        .map(district =>
          sum(
            district.values.filter((val, i) => i >= this.extent[0] && i <= this.extent[1]).map(val => val[this.method])
          )
        )
    ) * 1.05
  );
}

// Finds the largest single age to scale y axis behind brush within the selected range
export function getMax() {
  return (
    max(
      this.data.data
        .filter(district => (this.method === 'ratio' ? district : !district.totalRow && !district.avgRow))
        .map(district => max(district.values.map(val => val[this.method])))
    ) * 1.05
  );
}
