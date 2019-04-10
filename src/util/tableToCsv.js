import downloadFile from './downloadFile';

// Handle multi-level column headers and
// extract column names from thead.
const getColumnNames = thead => {
  const tr = thead.querySelectorAll('tr');
  let cols = [];

  if (tr.length === 1) {
    tr[0].querySelectorAll('th').forEach(th => {
      cols.push(th.innerHTML);
    });
  } else {
    let firstRow = [];
    let lastRow = [];
    tr[0].querySelectorAll('th:not(:first-child)').forEach(th => firstRow.push(th.innerHTML));
    tr[1].querySelectorAll('th').forEach(th => lastRow.push(th.innerHTML));
    const ratio = tr[1].querySelectorAll('th').length / (tr[0].querySelectorAll('th').length - 1);

    cols.push(tr[0].querySelector('th').innerHTML);
    lastRow.forEach((text, i) => {
      const firstRowIndex = Math.floor(i / ratio);
      cols.push(`${firstRow[firstRowIndex]} [${text}]`);
    });
  }

  return cols;
};

// Extract cell values in tbody
const getRows = tbody => {
  let data = [];
  const rows = tbody.querySelectorAll('tr');

  rows.forEach(row => {
    let cells = [];
    cells.push(row.querySelector('th').innerHTML);
    row.querySelectorAll('td').forEach(cell => cells.push(numberify(cell.innerHTML)));
    data.push(cells);
  });

  return data;
};

// Create a csv string from columns and row arrays
const mergeColsAndRows = (columns, rows) => {
  return [...[columns], ...rows]
    .map(line => JSON.stringify(line))
    .join('\n')
    .replace(/(^\[)|(\]$)/gm, '');
};

// Remove spaces and convert commas to periods from cell values
const numberify = str => {
  if (typeof str === 'number') return str;
  str = str.replace(/\s/g, '');
  str = str.replace(',', '.');
  return str;
};

// Generates and downloads csv file from HTML <table> element
export default table => {
  const caption = table.querySelector('caption').innerHTML || 'title';
  const columns = getColumnNames(table.querySelector('thead'));
  const rows = getRows(table.querySelector('tbody'));
  const csvString = mergeColsAndRows(columns, rows);

  const CSVBlob = new Blob([csvString], {
    encoding: 'UTF-8',
    type: 'text/csv;charset=UTF-8',
  });

  downloadFile(CSVBlob, caption);
};
