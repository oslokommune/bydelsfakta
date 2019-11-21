import d3 from '../assets/d3';
import downloadFile from './downloadFile';

// Generates the svg blob and calls download function
export default function(svgData, filename) {
  svgData = cleanSvgData(svgData);

  const preface = '<?xml version="1.0" standalone="no"?>\r\n';
  const svgBlob = new Blob([preface, svgData], { type: 'image/svg+xml;charset=utf-8' });

  downloadFile(svgBlob, filename, '.svg');
}

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

  svg.select('.close').remove();

  // Remove hyperlinks by grabbing their children
  // and appending them to their grandparent before
  // removing the <a>-elements.
  const hyperlinkChildren = svg.selectAll('a > *');
  hyperlinkChildren.each(function() {
    const parent = d3.select(this).node().parentElement.parentElement;
    parent.append(d3.select(this).node());
  });
  svg.selectAll('a').remove();

  return svg.node().outerHTML;
}
