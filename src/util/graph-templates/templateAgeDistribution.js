/**
 * Template for brushable bar chart for age distributions.
 */

import d3 from '@/assets/d3';
import BaseTemplate from './baseTemplate';
import { color } from './colors';
import ageRanges from '../../config/ageRanges';
import { showTooltipOver, showTooltipMove, hideTooltip } from '../tooltip';
import util from './template-utils';

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
  this.y = d3.scaleLinear();
  this.handle = null;
  this.dropDownParent = null;

  this.minWidth = 600;
  this.ageCap = 119; // caps the graphs on this age (set to 119 to disable capping)
  this.gBrushSmall = null;
  this.brushSmall = d3
    .brushX()
    .handleSize(21)
    .on('brush', updateHandlePositions.bind(this))
    .on('end', ({ sourceEvent, selection }) => {
      if (
        sourceEvent instanceof MouseEvent ||
        (window.TouchEvent && sourceEvent instanceof TouchEvent && sourceEvent.cancelable)
      ) {
        this.dropDownParent.select('select').node().value = '';
        this.extent = selection ? selection.map((val) => Math.round(this.age.invert(val))) : this.extent;
        this.render(this.data, { method: this.method });
      }
    });

  this.age = d3.scaleLinear().domain([0, this.ageCap]);
  this.extent = [0, 39]; // default age range

  this.render = function (data, options) {
    if (!this.commonRender(data, options)) return;
    if (!data.data) return;

    this.width = d3.max([this.width, this.minWidth]);
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
  };

  // Runs once after initialization. Creates elements that are
  // unique to this template
  this.created = function () {
    createAgeSelector.call(this);

    this.upper = this.canvas.append('g').attr('class', 'upper');
    this.middle = this.canvas
      .append('g')
      .attr('class', 'middle')
      .attr('transform', `translate(0, ${this.height2 + 40})`);
    this.lower = this.canvas.append('g').attr('class', 'lower');

    this.lower.append('text').call(initLowerHeading.bind(this));

    this.brushSmall.extent([
      [0, 0],
      [this.width + this.padding.right, 19],
    ]);

    this.upper.append('g').attr('class', 'lines');

    this.upper
      .append('rect')
      .classed('selection', true)
      .attr('height', this.height2)
      .attr('width', 200)
      .attr('fill', color.yellow)
      .attr('fill-opacity', 0.2)
      .attr('stroke', color.yellow)
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`);

    this.gBrushSmall = this.middle
      .append('g')
      .attr('class', 'brush')
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`)
      .call(this.brushSmall);

    this.gBrushSmall.select('.selection').attr('fill', color.yellow).attr('fill-opacity', 1);
    this.gBrushSmall.select('.overlay').attr('stroke', color.purple).attr('rx', 2);

    this.upperXAxis = this.upper
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(${this.paddingUpperLeft}, ${this.height2})`);

    this.upperYAxis = this.upper
      .append('g')
      .attr('class', 'axis y')
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`);

    this.lowerXAxis = this.lower
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(${this.paddingLowerLeft}, 0)`);

    drawHandles.call(this);

    this.gBrushSmall.transition().duration(this.duration).call(this.brushSmall.move, [0, 50].map(this.age));
  };

  // Finds the larges accumulated number within the selected range
  this.getMaxAccumulated = function () {
    return (
      d3.max(
        this.data.data
          .filter((district) => (this.method === 'ratio' ? district : !district.totalRow && !district.avgRow))
          .map((district) =>
            d3.sum(
              district.values
                .filter((val, i) => i >= this.extent[0] && i <= this.extent[1])
                .map((val) => val[this.method])
            )
          )
      ) * 1.05
    );
  };

  // Finds the largest single age to scale y axis behind brush within the selected range
  this.getMax = function () {
    return (
      d3.max(
        this.data.data
          .filter((district) => (this.method === 'ratio' ? district : !district.totalRow && !district.avgRow))
          .map((district) => d3.max(district.values.map((val) => val[this.method])))
      ) * 1.05
    );
  };

  this.init(svg);
}

export default Template;

// Draws the handle icons. Triggered from this.created()
function drawHandles() {
  this.handle = this.gBrushSmall
    .selectAll('path.handle')
    .data([{ type: 'w' }, { type: 'e' }])
    .enter()
    .append('g')
    .attr('class', 'handleIcon')
    .attr('transform', 'translate(0, -9)');

  this.handle
    .append('path')
    .attr('fill', color.purple)
    .style('pointer-events', 'none')
    .attr('d', (d) =>
      d.type === 'e' ? 'M0 0h11c6 0 10 4 10 10v17c0 6-4 10-10 10H0V0z' : 'M21 0H10C4 0 0 4 0 10v17c0 6 4 10 10 10h11V0z'
    );

  this.handle
    .append('rect')
    .style('pointer-events', 'none')
    .attr('height', 11)
    .attr('width', 1)
    .attr('x', 6)
    .attr('y', 13)
    .attr('fill', 'white')
    .attr('fill-opacity', '0.75');

  this.handle
    .append('rect')
    .style('pointer-events', 'none')
    .attr('height', 11)
    .attr('width', 1)
    .attr('x', 10)
    .attr('y', 13)
    .attr('fill', 'white')
    .attr('fill-opacity', '0.75');

  this.handle
    .append('rect')
    .style('pointer-events', 'none')
    .attr('height', 11)
    .attr('width', 1)
    .attr('x', 14)
    .attr('y', 13)
    .attr('fill', 'white')
    .attr('fill-opacity', '0.75');
}

// Creates the styled age selector as normal HTML
// as sibling element to the SVG.
function createAgeSelector() {
  const parent = d3.select(this.svg.node().parentNode.parentNode);
  this.dropDownParent = parent.insert('div').attr('class', 'graph__dropdown').attr('aria-hidden', true);

  this.dropDownParent
    .insert('label')
    .attr('for', 'age_selector')
    .attr('class', 'graph__dropdown__label')
    .html('Velg aldersgruppe');

  const selectElement = this.dropDownParent
    .insert('select')
    .attr('aria-hidden', true)
    .attr('id', 'age_selector')
    .attr('aria-hidden', true)
    .attr('class', 'child graph__dropdown__select')
    .attr('data-no-dragscroll', true);

  selectElement
    .selectAll('option')
    .data(ageRanges)
    .join('option')
    .attr('disabled', (d) => d.disabled)
    .attr('value', (d) => d.range)
    .text((d) => d.label);

  // Add eventlistener to the selector, and capture the value
  // and pass it on when re-rendering the chart
  selectElement.on('change', ({ currentTarget }) => {
    this.extent = JSON.parse(currentTarget.value);
    this.render(this.data, { method: this.method, useDropdown: true });
  });
}

function sortData(input, method) {
  input.sort((a, b) => {
    if (b.totalRow && a.avgRow) return -1;
    if (a.totalRow && b.avgRow) return 1;
    if (a.totalRow || a.avgRow) return 1;
    if (b.totalRow || b.avgRow) return -1;

    const totA = d3.sum(a.values.filter((d, i) => i >= this.extent[0] && i <= this.extent[1]).map((d) => d[method]));
    const totB = d3.sum(b.values.filter((d, i) => i >= this.extent[0] && i <= this.extent[1]).map((d) => d[method]));
    return totB - totA;
  });

  return input;
}

function updateSelections(selection, s) {
  selection
    .attr('x', s[0])
    .attr('opacity', 1)
    .attr('width', s[1] - s[0])
    .filter((d, i) => i === 1)
    .call(handleMouseEvents);
}

function handleMouseEvents(selection) {
  selection
    .on('mouseover', () => showTooltipOver('Dra for å velge alderssegment', 700))
    .on('mousemove', showTooltipMove)
    .on('mouseleave', hideTooltip);
}

function updateHandlePositions(e) {
  // pixel range for selected age range
  let s;

  if (e && e.selection) {
    s = e.selection;
  } else {
    s = this.extent.map(this.age);
  }

  // Resize and move both selections to new location
  d3.selectAll('rect.selection').call(updateSelections.bind(this), s);

  d3.selectAll('.handle')
    .call(handleMouseEvents)
    .attr('transform', (d, i) => {
      const offsetX = i === 0 ? -10 : 10;
      return `translate(${offsetX}, 0)`;
    });

  // Move visible handles
  this.handle.attr('transform', (d) => (d.type === 'e' ? `translate(${s[1]}, -9)` : `translate(${s[0] - 21}, -9)`));
}

function resizeSvg(selection) {
  const h = this.padding.top + this.height2 + this.yGutter + this.height + this.padding.bottom + this.sourceHeight;
  const w = this.padding.left + this.width + this.padding.right;

  selection.attr('height', h).attr('width', w);
}

function initLowerHeading(selection) {
  selection
    .classed('xAxis-title', true)
    .attr('font-size', '1em')
    .attr('font-weight', 500)
    .attr('fill', color.purple)
    .attr('transform', `translate(${this.paddingLowerLeft}, ${-32})`);
}

function createLines(enter) {
  return enter
    .append('path')
    .classed('line', true)
    .attr('fill', 'none')
    .attr('transform', `translate(${this.paddingUpperLeft}, 0)`)
    .attr('opacity', 0);
}

function enterRows(enter) {
  const g = enter.append('g').attr('class', 'row');

  g.append('rect')
    .attr('class', 'rowFill')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('width', this.width);

  g.append('text')
    .attr('class', 'geography')
    .attr('fill', color.purple)
    .attr('x', 10)
    .attr('y', this.rowHeight / 2 + 7);

  g.append('text')
    .attr('class', 'value')
    .attr('y', this.rowHeight / 2 + 7)
    .attr('fill', color.purple)
    .attr('x', this.paddingLowerLeft - 40)
    .attr('text-anchor', 'end');

  g.append('rect').attr('class', 'bar').attr('height', this.barHeight);

  g.append('rect')
    .attr('class', 'divider')
    .attr('fill', color.purple)
    .attr('width', this.width)
    .attr('height', 1)
    .attr('y', this.rowHeight);

  return g;
}

function getLowerHeadingString() {
  if (this.method === 'ratio' && this.extent[1] - this.extent[0] >= 1) {
    return `Andel av befolkningen fra ${this.extent[0]} til og med ${this.extent[1]} år`;
  }
  if (this.method === 'ratio' && this.extent[1] - this.extent[0] === 0) {
    return `Andel av befolkningen som er ${this.extent[0]} år`;
  }
  if (this.method !== 'ratio' && this.extent[1] - this.extent[0] >= 1) {
    return `Antall personer fra ${this.extent[0]} til og med ${this.extent[1]} år`;
  }
  if (this.method !== 'ratio' && this.extent[1] - this.extent[0] === 0) {
    return `Størrelse av befolkningen på ${this.extent[0]} år`;
  }

  return '';
}

function updateRowFill(selection) {
  selection
    .select('rect.rowFill')
    .attr('fill-opacity', (d) => (d.avgRow || d.totalRow ? 0.05 : 0))
    .attr('width', this.padding.left + this.width + this.padding.right);
}

function updateRowGeography(selection) {
  selection
    .select('text.geography')
    .attr('font-weight', (d) => (d.avgRow || d.totalRow ? 700 : 400))
    .text((d) => d.geography);
}

function updateRowDivider(selection) {
  selection
    .select('rect.divider')
    .attr('fill-opacity', (d) => (d.avgRow || d.totalRow ? 0.5 : 0.2))
    .attr('width', this.padding.left + this.width + this.padding.right);
}

function updateRowBar(selection) {
  const bar = selection.select('rect.bar');

  bar
    .transition()
    .duration(this.duration)
    .attr('width', (district) => {
      return this.method === 'value' && (district.avgRow || district.totalRow)
        ? 0
        : this.x(
            d3.sum(
              district.values.filter((val, i) => i >= this.extent[0] && i <= this.extent[1]).map((d) => d[this.method])
            )
          );
    })
    .attr('x', this.paddingLowerLeft)
    .attr('y', (this.rowHeight - this.barHeight) / 2 + 1)
    .attr('fill', (d) => {
      return d.totalRow || d.avgRow ? color.purple : color.blue;
    });

  bar
    .on('mouseover', (e, d) => {
      const sum = d3.sum(d.values.filter((val, i) => i >= this.extent[0] && i <= this.extent[1]).map((dj) => dj.value));
      showTooltipOver(sum);
    })
    .on('mousemove', showTooltipMove)
    .on('mouseleave', hideTooltip);
}

function updateRowTextValue(selection) {
  selection.select('text.value').text((district) => {
    const sum = d3.sum(
      district.values.filter((val, i) => i >= this.extent[0] && i <= this.extent[1]).map((d) => d[this.method])
    );
    return this.format(sum, this.method);
  });
}

function positionRow(selection) {
  selection
    .transition()
    .duration(this.duration * 2)
    .delay(this.duration)
    .attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
}

function handleMobileView() {
  if (this.parentWidth() < this.minWidth) {
    this.upper.attr('opacity', 0);
    this.middle.attr('opacity', 0);
    this.yGutter = 0;
    this.dropDownParent.style('top', '32px');
  } else {
    this.upper.attr('opacity', 1);
    this.middle.attr('opacity', 1);
    this.yGutter = 130;
    this.dropDownParent.style('top', 'none');
  }
}

function updateAxis() {
  // Find the larges accumulated number within the selected range
  const maxAccumulated = this.getMaxAccumulated();

  // Find the largest single age to scale y axis behind brush within the selected range
  const max = this.getMax();

  // Set axis and scales based on these max values (for the bars()
  this.y.domain([0, max]).range([this.height2, 0]).nice();
  this.x
    .domain([0, maxAccumulated])
    .range([0, this.width - this.paddingLowerLeft])
    .nice();

  this.upperYAxis
    .transition()
    .duration(this.duration)
    .call(
      d3
        .axisLeft(this.y)
        .ticks(4)
        .tickFormat((d) => this.format(d, this.method, true))
    );
  this.upperXAxis
    .transition()
    .duration(this.duration)
    .call(
      d3
        .axisBottom(this.age)
        .ticks((this.width - this.paddingUpperLeft) / 100)
        .tickFormat((d) => `${d} år`)
    );
  this.lowerXAxis
    .transition()
    .duration(this.duration)
    .call(
      d3
        .axisTop(this.x)
        .ticks((this.width - this.paddingLowerLeft) / 70)
        .tickFormat((d) => this.format(d, this.method, true))
    );
}

function drawRows() {
  // Draws/updates rows content. Triggered each render
  this.lower
    .selectAll('g.row')
    .data(this.data.data, (d) => d.geography)
    .join(enterRows.bind(this))
    .call(updateRowFill.bind(this))
    .call(positionRow.bind(this))
    .call(updateRowGeography.bind(this))
    .call(updateRowDivider.bind(this))
    .call(updateRowBar.bind(this))
    .call(updateRowTextValue.bind(this));

  this.lower.select('text.xAxis-title').text(getLowerHeadingString.bind(this));
}

function drawLines() {
  const line = d3
    .line()
    .curve(d3.curveBasis)
    .x((d, i) => (i > this.ageCap ? this.age(this.ageCap) : this.age(i)))
    .y((d) => this.y(d[this.method]));

  const lines = this.upper
    .select('.lines')
    .selectAll('path.line')
    .data(this.data.data.filter((d) => (this.method === 'ratio' ? d : !d.avgRow && !d.totalRow)))
    .join(createLines.bind(this));

  lines
    .attr('opacity', 1)
    .attr('d', (d) => line(d.values))
    .attr('stroke-width', (d) => (d.avgRow || d.totalRow ? 3 : 2))
    .attr('stroke', (d) => (d.avgRow || d.totalRow ? color.purple : color.blue))
    .attr('stroke-opacity', (d) => (d.avgRow || d.totalRow ? 1 : 0.5))
    .style('stroke-dasharray', (d) => (d.totalRow && this.method === 'ratio' ? '4,3' : false));

  lines.on('mouseover', (e, d) => {
    lines.attr('opacity', 0.1).attr('stroke', color.blue);
    d3.select(e.currentTarget).attr('opacity', 1).attr('stroke', color.purple);

    showTooltipOver(d.geography);
  });

  lines.on('mousemove', showTooltipMove);

  lines.on('mouseleave', () => {
    lines.attr('opacity', 1).attr('stroke', color.blue);
    hideTooltip();
  });
}

function generateTableData() {
  const tableHead = [
    ['Geografi', this.method === 'value' ? 'Antall' : 'Prosentandel'],
    [...ageRanges.filter((d) => !d.disabled).map((d) => d.label)],
  ];

  const tableData = JSON.parse(JSON.stringify(this.data.data)).sort(this.tableSort);

  const tableBody = tableData.map((d) => {
    return {
      key: d.geography,
      values: ageRanges
        .filter((dj) => !dj.disabled)
        .map((age) => {
          const range = JSON.parse(age.range);
          let sum = 0;
          for (let i = range[0]; i <= range[1]; i += 1) {
            sum += d.values[i][this.method];
          }
          return sum;
        }),
    };
  });

  return [tableHead, tableBody];
}
