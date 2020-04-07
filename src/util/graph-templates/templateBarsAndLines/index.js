/**
 * Displays net population growth over time as a bar chart,
 * and two smaller line charts to display net immigration
 * and net births.
 */

import BaseTemplate from '../baseTemplate';

import created from './created';
import render from './render';

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'barsAndLines';

  this.salt = Math.round(Math.random() * 100000).toString();
  this.padding = { top: 80, left: 60, right: 20, bottom: 30 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;
  this.barChartHeight = 230;
  this.lineChartHeight = 85;
  this.gapY = 70;
  this.mobileWidth = 520;

  this.render = render;
  this.created = created;

  this.init(svg);
}

export default Template;
