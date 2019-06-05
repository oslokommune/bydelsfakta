import { saveSvgAsPng } from 'save-svg-as-png';
import canvg from 'canvg';
import * as d3 from 'd3';

const padding = 20;
const scale = 2.25;

export default function downloadPng(svgRef, filename) {
  const svg = d3.select(svgRef);
  const background = svg.select('.background');
  const width = background.node().getBBox().width + padding * 2;
  const height = background.node().getBBox().height + padding * 2;
  svg
    .select('.background')
    .attr('x', -padding)
    .attr('y', -padding)
    .attr('width', width)
    .attr('height', height);
  svg.selectAll('.domain').attr('stroke', 'black');
  svg.selectAll('.tick line').attr('stroke', 'black');
  svg.select('.heading').style('font-size', '1.3rem');

  saveSvgAsPng(svgRef, filename, {
    scale,
    top: -padding,
    left: -padding,
    width,
    height,
    canvg,
  }).then(() => {
    svg.select('.heading').style('font-size', '1rem');
  });
}
