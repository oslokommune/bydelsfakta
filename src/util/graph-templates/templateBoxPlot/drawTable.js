import util from '@/util/graph-templates/template-utils';
import * as locale from '@/util/graph-templates/locale';

export default function() {
  const tableData = JSON.parse(JSON.stringify(this.data.data)).sort(this.tableSort);
  const tableHead = ['Geografi', 'Gjennomsnittsalder', 'Medianalder'];
  const tableBody = tableData.map(d => {
    return {
      key: d.geography,
      values: [d.mean, d.median],
    };
  });

  const tableGenerator = util.drawTable.bind(this);
  tableGenerator(tableHead, tableBody, { formatter: locale.norwegianLocale.format(',.1f') });
}
