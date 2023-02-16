/**
 * Template for bar chart which supports both single or multiple series.
 */

import d3 from '@/assets/d3';
import BaseTemplate from './baseTemplate';
import util from './template-utils';

import { closeButton, sortData, generateTableData, rowHelpers, columnHelpers, resizeSvg } from './graph-helpers';

function Template(svg) {
  BaseTemplate.apply(this, arguments);

  this.padding = { top: 100, left: 190, right: 35, bottom: 30 };
  this.gutter = 30;
  this.x2 = d3.scaleLinear();
  this.x = [];
  this.filteredData = {};
  this.mobileWidth = 420;
  this.isMobileView = false;
  this.isSingleSeries = false;
  this.template = 'bars';

  this.render = function (data, options = {}) {
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
      this.width = d3.max([this.width, 600]);
    }

    if (this.isMobileView || this.isSingleSeries) {
      this.padding.right = 35;
      this.gutter = 0;
    }

    // Make a filtered copy of the provided data object containing
    // to house only the selected series (if one has been selected)
    this.filteredData = JSON.parse(JSON.stringify(this.data));

    if (this.selected > -1) {
      this.filteredData.meta.series = [this.data.meta.series[this.selected]];
      this.filteredData.data = this.filteredData.data.map((district) => {
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
  };

  this.created = function () {
    this.canvas.append('g').attr('class', 'columns');
    this.canvas.append('g').attr('class', 'rows');

    // Create and initialise the close button
    this.close = closeButton.init.call(this);
  };

  this.setScales = function () {
    if (!this.filteredData.meta.series || !this.filteredData.meta.series.length) return;
    const maxValues = this.filteredData.meta.series.map((row, i) => {
      return d3.max(
        this.filteredData.data
          .filter((d) => !(this.method === 'value' && (d.totalRow || d.avgRow)))
          .map((d) => {
            if (!d.values || !d.values[i] || !d.values[i][this.method]) return 0;
            return d.values[i][this.method];
          })
      );
    });

    this.x2 = d3
      .scaleLinear()
      .range([0, this.width - (this.gutter * this.filteredData.meta.series.length - 1)])
      .domain([0, d3.sum(maxValues)]);

    this.x = this.filteredData.meta.series.map((series, index) => {
      const SCALE = d3.scaleLinear();
      let startPos = 0;
      for (let i = 0; i < index; i += 1) {
        startPos += this.x2(maxValues[i]);
        startPos += this.gutter;
      }
      const endPos = startPos + this.x2(maxValues[index]);
      SCALE.domain([0, maxValues[index]]).range([startPos, endPos]).nice();

      return SCALE;
    });

    this.x2.domain(this.filteredData.meta.series.map((d, i) => i)).range([0, this.width]);
  };

  this.drawAxis = function () {
    this.xAxis = this.canvas.selectAll('g.axis.x').data(this.x).join('g').attr('class', 'axis x');

    this.xAxis.each((d, i, j) => {
      d3.select(j[i])
        .attr('opacity', () => {
          if (this.isMobileView) return 0;
          return i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2;
        })
        .transition()
        .duration(this.duration)
        .attr('transform', `translate(0, ${this.height + 10})`)
        .call(
          d3
            .axisBottom(this.x[i])
            .ticks((this.x[i].range()[1] - this.x[i].range()[0]) / 80)
            .tickFormat((dj) => this.format(dj, this.method, true))
        );
    });
  };

  this.init(svg);
}

export default Template;
