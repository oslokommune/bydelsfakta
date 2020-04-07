export default function(d) {
  if (this.isMobileView && d.values.length) {
    return `${d.geography} (${this.format(d.values[0][this.method], this.method)})`;
  }
  return d.geography;
}
