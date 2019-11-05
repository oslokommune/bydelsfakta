export default function(data = [], options = {}) {
  if (typeof options.series == 'number') {
    const direction = options.direction ? options.direction : 'desc';

    const idx = options.series;
    const mtd = this.method;

    data.data.sort((a, b) => {
      if (!a.values) {
        throw new Error('Invalid data structure');
      }

      if (a.avgRow || a.totalRow) return 1;

      if (direction === 'asc') {
        return a.values[idx][mtd] - b.values[idx][mtd];
      } else {
        return b.values[idx][mtd] - a.values[idx][mtd];
      }
    });
  }
}
