import d3 from '../assets/d3';

// Parses the svgData str and strips away
// mouse interactions using d3 and returns
// a cleaned up svgData string.
function cleanSvgData(str) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'image/svg+xml');
  const svg = d3.select(doc).select('svg');

  svg
    .selectAll('*')
    .attr('tabindex', null)
    .style('cursor', null);

  return svg.node().outerHTML;
}

const downloadSvg = function(svgData, filename) {
  svgData = cleanSvgData(svgData);

  const preface = '<?xml version="1.0" standalone="no"?>\r\n';
  const svgBlob = new Blob([preface, svgData], { type: 'image/svg+xml;charset=utf-8' });
  const svgUrl = URL.createObjectURL(svgBlob);
  const downloadLink = document.createElement('a');
  downloadLink.href = svgUrl;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export default downloadSvg;
