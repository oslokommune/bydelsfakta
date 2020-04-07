/**
 * Template for dot plot for mean age and box plot for median age
 * (the dots are rendered as lines)
 */

import d3 from '@/assets/d3';
import BaseTemplate from '@/util/graph-templates/baseTemplate';

import render from './render';
import created from './created';
import drawTable from './drawTable';
import drawRows from './drawRows';
import drawScales from './drawScales';
import drawAxisLabels from './drawAxisLabels';

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'boxPlot';

  this.padding = { top: 90, left: 250, right: 20, bottom: 40 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;

  // Define withs of both charts.
  // gapX is the space between them.
  this.gapX = 70;
  this.width1 = (this.width - this.gapX) / 2;
  this.width2 = (this.width - this.gapX) / 2;

  // Scales for the two charts
  this.x = d3.scaleLinear();
  this.x2 = d3.scaleLinear();

  this.render = render;
  this.created = created;
  this.drawTable = drawTable;

  // Updates the text and position for both axis labels on each render
  this.drawAxisLabels = drawAxisLabels;

  // Updates the scales and axis for the two charts on each render.
  this.drawScales = drawScales;

  // Update the contents for each row on each render
  this.drawRows = drawRows;

  this.init(svg);
}

export default Template;
