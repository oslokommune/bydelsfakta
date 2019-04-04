import downloadFile from './downloadFile';

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

// Handle multi-level column headers and
// hxtract column names from thead.
function getColumnNames(thead) {
  const tr = thead.querySelectorAll('tr');
  let cols = [];

  if (tr.length === 1) {
    tr[0].querySelectorAll('th').forEach(th => {
      cols.push(th.innerHTML);
    });
  } else {
    let firstRow = [];
    let lastRow = [];
    tr[0].querySelectorAll('th:not(:first-child)').forEach((th, i) => firstRow.push(th.innerHTML));
    tr[1].querySelectorAll('th').forEach(th => lastRow.push(th.innerHTML));
    let ratio = tr[1].querySelectorAll('th').length / (tr[0].querySelectorAll('th').length - 1);

    cols.push(tr[0].querySelector('th').innerHTML);
    lastRow.forEach((text, i) => {
      let firstRowIndex = Math.floor(i / ratio);
      cols.push(`${firstRow[firstRowIndex]} [${text}]`);
    });
  }

  return cols;
}

// Extract cell values in tbody
function getRows(tbody) {
  let data = [];
  const rows = tbody.querySelectorAll('tr');

  rows.forEach(row => {
    let cells = [];
    cells.push(row.querySelector('th').innerHTML);
    row.querySelectorAll('td').forEach(cell => cells.push(numberify(cell.innerHTML)));
    data.push(cells);
  });

  return data;
}

// Create a csv string from columns and row arrays
function mergeColsAndRows(columns, rows) {
  var csv = [...[columns], ...rows]
    .map(line => {
      return JSON.stringify(line);
    })
    .join('\n')
    .replace(/(^\[)|(\]$)/gm, '');

  return csv;
}

// Remove spaces and convert commas to periods from cell values
function numberify(str) {
  if (typeof str === 'number') return str;
  str = str.replace(/\s/g, '');
  str = str.replace(',', '.');
  return str;
}
