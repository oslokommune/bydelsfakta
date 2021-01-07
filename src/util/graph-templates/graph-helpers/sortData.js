export default function (data = [], options = {}) {
  if (typeof options.series === 'number') {
    const direction = options.direction ? options.direction : 'desc';

    const idx = options.series;
    const mtd = this.method;

    data.data.sort((a, b) => {
      if (!a.values) {
        throw new Error('Invalid data structure');
      }

      // Sort avgRow and totalRow
      if (b.totalRow && a.avgRow) return -1;
      if (a.totalRow && b.avgRow) return 1;
      if (a.totalRow || a.avgRow) return 1;
      if (b.totalRow || b.avgRow) return -1;
      if (a.avgRow || a.totalRow) return 1;

      // Sort the rest of the geographies
      if (direction === 'asc') {
        return a.values[idx][mtd] - b.values[idx][mtd];
      }
      return b.values[idx][mtd] - a.values[idx][mtd];
    });
  }
}
