// TODO: refactor this function to be more flexible and reusable for all templates

export default function generateTableData() {
  const isMultiLevel = this.data.meta.series[1] !== undefined;
  let table_head;
  if (isMultiLevel) {
    table_head = [
      ['Geografi', this.method === 'value' ? 'Antall' : this.showPermille ? 'Promilleandel' : 'Prosentandel'],
      [
        ...this.data.meta.series.map(d => {
          let str = '';
          if (typeof d === 'string') {
            str += d;
          } else if (d.heading) {
            str += `${d.heading} ${d.subheading}`;
          }
          return str;
        }),
      ],
    ];
  } else {
    table_head = [
      'Geografi',
      this.method === 'value' ? 'Antall' : this.showPermille ? 'Promilleandel' : 'Prosentandel',
    ];
  }
  const table_body = JSON.parse(JSON.stringify(this.data.data))
    .sort(this.tableSort)
    .map(row => {
      return {
        key: row.geography,
        values: row.values.map(d => d[this.method]),
      };
    });

  return [table_head, table_body];
}
