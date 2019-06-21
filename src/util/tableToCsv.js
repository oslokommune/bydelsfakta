import downloadFile from './downloadFile';

const cellSeparator = ';';
const decimalSeparator = ',';

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
    row.querySelectorAll('td').forEach(cell => {
      /**
       * If we want to introduce custom number formats
       * on the CSVs we need to extract the actual number
       * from the cell's data binding:
       * ! `cell.__data__`
       *
       * In order to get this to work we also need the
       * `method` used in the template, so then we need
       * to pass down its `this` into this script somehow.
       * */
      return cells.push(numberify(cell.innerHTML));
    });
    data.push(cells);
  });

  return data;
};

// Create a csv string from columns and row arrays
const mergeColsAndRows = (columns, rows) => {
  let output = '';
  const lines = [...[columns], ...rows];

  lines.forEach((line, lineidx) => {
    line.forEach((cell, cellidx) => {
      output += cell;
      output += cellidx < line.length - 1 ? cellSeparator : '';
    });
    output += lineidx < lines.length - 1 ? '\n' : '';
  });

  // Remove excess word spaces
  output = output.replace(/\s{2,}/gm, ' ');

  return output;
};

// Remove spaces and convert commas to periods from cell values
const numberify = str => {
  if (typeof str === 'number') return str;
  str = str.replace(/\s/g, '');
  str = str.replace(',', decimalSeparator);
  return str;
};

// Generates and downloads csv file from HTML <table> element
export default table => {
  const caption = table.parentNode.querySelector('h3').innerHTML || 'title';
  const columns = getColumnNames(table.querySelector('thead'));
  const rows = getRows(table.querySelector('tbody'));
  const csvString = mergeColsAndRows(columns, rows);

  const CSVBlob = new Blob([csvString], {
    encoding: 'ISO-8859-1',
    type: 'text/csv;charset=ISO-8859-1',
  });

  downloadFile(CSVBlob, caption, '.csv');
};
