import ageRanges from '@/config/ageRanges';

export default function() {
  const tableHead = [
    ['Geografi', this.method === 'value' ? 'Antall' : 'Prosentandel'],
    [...ageRanges.filter(d => !d.disabled).map(d => d.label)],
  ];

  const tableData = JSON.parse(JSON.stringify(this.data.data)).sort(this.tableSort);

  const tableBody = tableData.map(d => {
    return {
      key: d.geography,
      values: ageRanges
        .filter(dj => !dj.disabled)
        .map(age => {
          const range = JSON.parse(age.range);
          let sum = 0;
          for (let i = range[0]; i <= range[1]; i += 1) {
            sum += d.values[i][this.method];
          }
          return sum;
        }),
    };
  });

  return [tableHead, tableBody];
}
