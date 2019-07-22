import XLSX from 'xlsx';
import downloadFile from './downloadFile';

export default table => {
  const td = table.querySelectorAll('td');
  const caption = table.parentNode.querySelector('h3').innerHTML || 'title';

  // Replace commas (Norwegian decimal delimiter) with periods in data cells
  td.forEach(d => {
    d.setAttribute('data-pretty', d.innerHTML);
    d.innerHTML = d.innerHTML.replace(',', '.').replace(' ', '');
  });

  const wb = XLSX.utils.table_to_book(table);
  const wbout = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
  downloadFile(new Blob([wbout]), caption, '.xlsx');

  // Replace periods back to commas
  td.forEach(d => {
    d.innerHTML = d.getAttribute('data-pretty');
  });
};
