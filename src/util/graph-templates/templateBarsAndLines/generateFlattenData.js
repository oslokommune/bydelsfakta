export default function(data, scale, key) {
  return data.map(row => {
    return {
      x: this.x(row.date),
      y: scale(row[key]),
      label: `${row[key]}`,
    };
  });
}
