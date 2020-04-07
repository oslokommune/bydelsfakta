import { max } from 'd3';

import util from '@/util/graph-templates/template-utils';

import {
  closeButton,
  sortData,
  generateTableData,
  rowHelpers,
  columnHelpers,
  resizeSvg,
} from '@/util/graph-templates/graph-helpers';

export default function(data, options = {}) {
  this.selected = options.selected !== undefined ? options.selected : -1;

  if (data.data && data.data[0].values && data.data[0].values.length === 1 && data.meta.series.length > 1) {
    data.meta.series = [data.meta.series[0]];
  }

  this.isSingleSeries = data.meta && data.meta.series && data.meta.series.length <= 1;
  this.isMobileView = this.isSingleSeries && this.parentWidth() < this.mobileWidth;

  // Multiseries need larger padding top to make room for tabs,
  // mobile views have smaller padding.left
  this.padding.top = this.isSingleSeries && this.selected === -1 ? 40 : 100;
  this.padding.left = this.isMobileView ? 0 : 190;
  this.padding.bottom = this.isMobileView ? 0 : 30;

  if (this.isMobileView) {
    this.rowHeight = 37;
  }

  // Temp fix until meta data is included in data from API
  if (!data.meta.series || !data.meta.series.length) data.meta.series.push('');

  if (!this.commonRender(data, options)) return;

  sortData.call(this, data, { series: this.selected >= 0 ? this.selected : 0 });

  if (!this.isMobileView && !this.isSingleSeries) {
    this.width = max([this.width, 600]);
  }

  if (this.isMobileView || this.isSingleSeries) {
    this.padding.right = 25;
    this.gutter = 0;
  }

  // Make a filtered copy of the provided data object containing
  // to house only the selected series (if one has been selected)
  this.filteredData = JSON.parse(JSON.stringify(this.data));

  if (this.selected > -1) {
    this.filteredData.meta.series = [this.data.meta.series[this.selected]];
    this.filteredData.data = this.filteredData.data.map(district => {
      district.values = [district.values[this.selected]];
      return district;
    });
  }

  // Resize svg
  this.svg.call(resizeSvg.bind(this));

  // Move the close button
  closeButton.showOrHide.call(this);

  this.setScales();
  this.drawAxis();

  // Generate and write table data
  util.drawTable.bind(this)(...generateTableData.call(this));

  // Update rows and bars
  const rows = rowHelpers.initRows.call(this).call(rowHelpers.styleRows.bind(this));
  rowHelpers.createBars
    .call(this, rows)
    .call(rowHelpers.updateBars.bind(this))
    .call(rowHelpers.handleTooltips.bind(this));

  // Update Columns
  columnHelpers.initColumns
    .call(this)
    .call(columnHelpers.positionColumns.bind(this))
    .call(columnHelpers.updateClickTrigger.bind(this))
    .call(columnHelpers.updateColHeading.bind(this))
    .call(columnHelpers.updateColSubheading.bind(this))
    .call(columnHelpers.updateColFill.bind(this))
    .call(columnHelpers.updateColArrow.bind(this));
}
