/**
 * Template for bar chart which supports both single or multiple series.
 */

import { scaleLinear } from 'd3';
import BaseTemplate from '@/util/graph-templates/baseTemplate';

// Import graph methods
import render from './render';
import created from './created';
import setScales from './setScales';
import drawAxis from './drawAxis';

function Template(svg) {
  BaseTemplate.apply(this, arguments);

  this.padding = { top: 100, left: 190, right: 25, bottom: 30 };
  this.gutter = 30;
  this.x2 = scaleLinear();
  this.x = [];
  this.filteredData = {};
  this.mobileWidth = 420;
  this.isMobileView = false;
  this.isSingleSeries = false;
  this.template = 'bars';

  // Bind graph methods
  this.render = render;
  this.created = created;
  this.setScales = setScales;
  this.drawAxis = drawAxis;

  this.init(svg);
}

export default Template;
