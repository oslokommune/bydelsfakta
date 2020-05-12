import { ascending } from 'd3';
import util from '@/util/graph-templates/template-utils';
import variations from './_variations';

export default function() {
  // Prepare data for table head
  const tableHead = [
    ['Geografi', ...this.filteredData.map(d => d.date)],
    this.filteredData.flatMap(() => [
      variations[this.variant].barData.heading,
      variations[this.variant].lineData1.heading,
      variations[this.variant].lineData2.heading,
    ]),
  ];

  // Find all years in dataset
  const years = Array.from(new Set(this.data.data.flatMap(geo => geo.values[0].flatMap(year => year.date)))).sort(
    ascending
  );

  // Generate the table body from the raw data
  const tableBody = this.data.data.map(geo => {
    return {
      key: geo.geography,
      values: years.flatMap(year => {
        // Find the correct year and push the data to the array
        const yearData = geo.values[0].find(row => row.date === year);
        if (!yearData) return ['N/A', 'N/A', 'N/A'];

        const barDataValue = variations[this.variant].barData.data(yearData);
        const lineData1Value = variations[this.variant].lineData1.data(yearData);
        const lineData2Value = variations[this.variant].lineData2.data(yearData);

        return [barDataValue, lineData1Value, lineData2Value];
      }),
    };
  });

  util.drawTable.call(this, tableHead, tableBody);
}
