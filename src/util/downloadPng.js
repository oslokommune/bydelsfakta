import { saveSvgAsPng } from 'save-svg-as-png';
import { textwrap } from 'd3-textwrap';
import canvg from 'canvg';
import * as d3 from 'd3';

const padding = 20;
const scale = 2;
const offset = 34;

export default function downloadPng(svgRef, filename) {
  const svg = d3.select(svgRef);
  const background = svg.select('.background');
  const heading = svg.select('.heading');
  const canvas = svg.select('.canvas');
  const width = canvas.node().getBBox().width + padding * 2;
  const height = background.node().getBBox().height + offset + padding * 2;
  const close = svg.select('.close');

  const options = {
    scale,
    top: -padding,
    left: -padding,
    width,
    height,
    canvg: canvg.Canvg,
  };

  // Manipulate things before screenshot
  background
    .attr('x', -padding)
    .attr('y', -padding)
    .attr('width', width)
    .attr('height', height);

  svg.selectAll('.domain').attr('stroke', 'black');
  svg.selectAll('.tick line').attr('stroke', 'black');
  heading.call(resizeHeading, options, '18px', '1.1em');
  canvas.call(translateCanvas, offset);
  close.attr('opacity', 0);
  svg.selectAll('.label').attr('opacity', 1);
  svg.selectAll('.lines path').attr('stroke-opacity', 1);

  saveSvgAsPng(svgRef, filename, options);

  setTimeout(revert.bind(null, svg, options), 10);
}

// Revert things after screenshot
function revert(svg, options) {
  svg.select('.canvas').call(translateCanvas, -offset);
  svg.select('close').attr('opacity', 1);
  svg.select('.heading').call(resizeHeading, options, '14px', '1em');
}

/**
 * Translates the canvas element
 */
function translateCanvas(canvas, value) {
  const [x, y] = canvas
    .attr('transform')
    .split('(')[1]
    .split(')')[0]
    .split(',')
    .map(str => +str.trim());

  canvas.attr('transform', `translate(${[x, y + value]})`);
}

/**
 * Re-wraps the heading using the new width
 * @param {selection} heading
 * @param {object} options
 */
function resizeHeading(heading, { width }, fontSize) {
  const wrap = textwrap()
    .bounds({ width: width - padding * 2, height: 60 })
    .method('tspans');

  const text = getHeadingText(heading);

  heading
    .html('')
    .text(text)
    .attr('font-size', fontSize)
    .call(wrap)
    .selectAll('tspan')
    .filter((d, i) => i > 0)
    .attr('dy', '1.1em');
}

/**
 * Extract and combine text from the heading <text> element
 * @param {selection} heading
 * @returns {string} heading text
 */
function getHeadingText(heading) {
  const headingTextParts = [];
  heading.selectAll('tspan').each((d, i, j) => {
    headingTextParts.push(j[i].textContent.trim());
  });
  return headingTextParts.join(' ').replace('  ', ' ');
}
