/**
 * Template for dot plot for mean age and box plot for median age
 * (the dots are rendered as lines)
 */

import BaseTemplate from './baseTemplate';
import util from './template-utils';
import d3 from '@/assets/d3';
import * as locale from './locale';

import {
  positionLegend,
  createBoxPlotLegend,
  createRowElements,
  updateRowBox,
  updateRowGeography,
  updateRowMedianText,
  updateRowMeanText,
  updateRowMeanRect,
  updateRowMedianRect,
  updateRowFill,
  updateRowDivider,
} from './graph-helpers/boxplotHelpers';

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'f';

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

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    this.width = d3.max([this.width, 360]);

    // Bind quartiles, mean and median to each geography
    data.data.forEach(district => {
      if (district.low) return district;
      const ages = district.values.flatMap(obj => [...Array(obj.value)].fill(+obj.age));
      district.low = d3.quantile(ages, 0.25);
      district.median = d3.quantile(ages, 0.5);
      district.high = d3.quantile(ages, 0.75);
      district.mean = d3.mean(ages);
      return district;
    });

    this.svg
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.width + this.padding.left + this.padding.right);

    this.legend.call(positionLegend.bind(this));

    this.drawScales();
    this.drawAxisLabels();
    this.drawRows();
    this.drawTable();
  };

  this.created = function() {
    this.canvas
      .append('text')
      .attr('class', 'label-median')
      .attr('font-size', 13)
      .attr('y', -40)
      .attr('x', this.width1 + this.gapX + this.width2 / 2)
      .attr('text-anchor', 'middle')
      .text('Aldersfordeling og medianalder');

    this.canvas
      .append('text')
      .attr('class', 'label-mean')
      .attr('font-size', 13)
      .attr('y', -40)
      .attr('x', this.width1 / 2)
      .attr('text-anchor', 'middle')
      .text('Gjennomsnittsalder');

    this.legend = this.canvas
      .append('g')
      .classed('legend', true)
      .call(createBoxPlotLegend.bind(this));
  };

  this.drawTable = function() {
    const tableData = JSON.parse(JSON.stringify(this.data.data)).sort(this.tableSort);
    const tableHead = ['Geografi', 'Gjennomsnittsalder', 'Medianalder'];
    const tableBody = tableData.map(d => {
      return {
        key: d.geography,
        values: [d.mean, d.median],
      };
    });

    const tableGenerator = util.drawTable.bind(this);
    tableGenerator(tableHead, tableBody, { formatter: locale.norwegianLocale.format(',.1f') });
  };

  // Updates the text and position for both
  // axis labels on each render
  this.drawAxisLabels = function() {
    this.canvas
      .select('text.label-median')
      .transition()
      .duration(this.duration)
      .attr('x', this.width1 + this.gapX + this.width2 / 2);

    this.canvas
      .select('text.label-mean')
      .transition()
      .duration(this.duration)
      .attr('x', this.width1 / 2);
  };

  // Updates the scales and axis for the two
  // charts on each render.
  this.drawScales = function() {
    this.width1 = (this.width - this.gapX) / 2;
    this.width2 = (this.width - this.gapX) / 2;

    this.x2
      .range([0, this.width2])
      .domain([0, 70])
      .nice();
    this.x2Axis
      .transition()
      .duration(this.duration)
      .call(
        d3
          .axisTop(this.x2)
          .tickFormat(d => `${d} år`)
          .ticks(this.width2 / 60)
      )
      .attr('transform', `translate(${this.width1 + this.gapX})`);

    this.x
      .range([0, this.width1])
      .domain(d3.extent(this.data.data.map(d => d.mean)))
      .nice();
    this.xAxis
      .transition()
      .duration(this.duration)
      .call(
        d3
          .axisTop(this.x)
          .tickFormat(d => `${d} år`)
          .ticks(this.width2 / 60)
      );
  };

  // Update the contents for each row on each
  // render
  this.drawRows = function() {
    const rows = this.canvas
      .selectAll('g.row')
      .data(this.data.data)
      .join(createRowElements.bind(this));

    rows
      .transition()
      .duration(this.duration)
      .attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

    rows
      .call(updateRowBox.bind(this))
      .call(updateRowGeography.bind(this))
      .call(updateRowMedianText.bind(this))
      .call(updateRowMeanText.bind(this))
      .call(updateRowMeanRect.bind(this))
      .call(updateRowMedianRect.bind(this))
      .call(updateRowFill.bind(this))
      .call(updateRowDivider.bind(this));
  };

  this.init(svg);
}

export default Template;
