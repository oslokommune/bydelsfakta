/**
 * Template for brushable bar chart for age distributions.
 */

import { brushX, event, scaleLinear } from 'd3';
import BaseTemplate from '@/util/graph-templates/baseTemplate';

import updateHandlePositions from './helpers/updateHandlePositions';
import created from './created';
import render from './render';

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'ageDistribution';

  this.padding = { top: 50, right: 20, bottom: 1, left: 0 };
  this.height = 0; // calculated on render. Height of the lower part
  this.height2 = 140; // height of the upper chart
  this.width = 1000;
  this.paddingUpperLeft = 190; // padding left of the upper chart
  this.paddingLowerLeft = 300; // padding left of the lower chart
  this.yGutter = 130; // space between upper and lower charts
  this.y = scaleLinear();
  this.handle = null;
  this.dropDownParent = null;

  this.minWidth = 600;
  this.ageCap = 119; // caps the graphs on this age (set to 119 to disable capping)
  this.gBrushSmall = null;
  this.brushSmall = brushX()
    .handleSize(21)
    .on('brush', updateHandlePositions.bind(this))
    .on('end', () => {
      if (event.sourceEvent instanceof MouseEvent) {
        this.dropDownParent.select('select').node().value = '';
        this.extent = event.selection ? event.selection.map(val => Math.round(this.age.invert(val))) : this.extent;
        this.render(this.data, { method: this.method });
      }
    });

  this.age = scaleLinear().domain([0, this.ageCap]);
  this.extent = [0, 39]; // default age range

  this.created = created;
  this.render = render;

  this.init(svg);
}

export default Template;
