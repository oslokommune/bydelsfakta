import { max } from 'd3';

import util from '@/util/graph-templates/template-utils';
import sortData from './helpers/sortData';
import generateTableData from './helpers/generateTableData';
import updateAxis from './helpers/updateAxis';
import drawLines from './drawLines';
import drawRows from './drawRows';
import handleMobileView from './helpers/handleMobileView';
import resizeSvg from './helpers/resizeSvg';

export default function(data, options) {
  if (!this.commonRender(data, options)) return;
  if (!data.data) return;

  this.width = max([this.width, this.minWidth]);
  // Set size for age (scale for brushes)
  this.age.range([0, this.width - this.paddingUpperLeft]);

  this.brushSmall.move(this.gBrushSmall, this.extent.map(this.age));
  this.brushSmall.extent([
    [0, 0],
    [this.width - this.paddingUpperLeft, 19],
  ]);

  this.gBrushSmall.call(this.brushSmall);

  sortData.call(this, data.data, this.method);
  handleMobileView.call(this);

  this.lower.attr('transform', `translate(0, ${this.height2 + this.yGutter})`);

  // Resize SVG DOM element
  this.svg.call(resizeSvg.bind(this));

  updateAxis.call(this);
  drawRows.call(this);
  drawLines.call(this);

  util.drawTable.call(this, ...generateTableData.call(this));
}
