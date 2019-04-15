export default function(content, filename) {
  const url = URL.createObjectURL(content);
  const downloadLink = document.createElement('a');
  if (window.navigator.msSaveOrOpenBlob) {
    downloadLink.href = '#';
    downloadLink.download = '';
    downloadLink.addEventListener('click', () => window.navigator.msSaveOrOpenBlob(content, `${filename}.csv`));
    downloadLink.click();
  } else {
    downloadLink.href = url;
    downloadLink.download = `${filename}.csv`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}
