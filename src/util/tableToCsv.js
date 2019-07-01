import XLSX from 'xlsx';
import downloadFile from './downloadFile';

export default table => {
  const caption = table.parentNode.querySelector('h3').innerHTML || 'title';
  const sheet = XLSX.utils.table_to_sheet(table);
  const csv = XLSX.utils.sheet_to_csv(sheet, { FS: ';' });
  downloadFile(new Blob([csv]), caption, '.csv');
};
