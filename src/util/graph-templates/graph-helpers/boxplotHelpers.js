import { color } from '../colors';
import util from '../template-utils';
import * as locale from '../locale';

const boxWidth = 180;
const boxHeight = 20;

const textLabels = ['25. prosentil', 'Median', '75. prosentil'];

function createBoxPlotLegend(selection) {
  selection
    .call(createBox)
    .call(createMedianLine)
    .call(createTextLabels);
}

function positionLegend(selection) {
  const offsetX = -this.padding.left + (this.padding.left + this.width + this.padding.right) - (boxWidth + 120);
  const offsetY = this.height + 30;

  selection.attr('transform', `translate(${[offsetX, offsetY]})`);
}

const createBox = selection => {
  selection
    .attr('opacity', 0.5)
    .append('rect')
    .classed('box', true)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('height', boxHeight)
    .attr('width', boxWidth)
    .attr('rx', 3);

  return selection;
};

const createMedianLine = selection => {
  selection
    .append('rect')
    .classed('median', true)
    .attr('height', boxHeight + 8)
    .attr('y', -4)
    .attr('x', boxWidth / 2 - 16)
    .attr('fill', 'black')
    .attr('width', 3);
};

const createTextLabels = selection => {
  selection
    .append('text')
    .text(textLabels[0])
    .attr('text-anchor', 'end')
    .attr('x', -10)
    .attr('y', boxHeight - 5);

  selection
    .append('text')
    .text(textLabels[1])
    .attr('x', boxWidth / 2 - 10)
    .attr('y', boxHeight - 5);

  selection
    .append('text')
    .text(textLabels[2])
    .attr('x', boxWidth + 10)
    .attr('y', boxHeight - 5);
};

function createRowElements(enter) {
  const g = enter
    .append('g')
    .classed('row', true)
    .attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

  g.append('rect').call(initRowFill.bind(this));
  g.append('rect').call(initRowDivider.bind(this));
  g.append('text').call(initRowGeography.bind(this));
  g.append('rect').call(initRowBox.bind(this));
  g.append('text').call(initRowMedianText.bind(this));
  g.append('rect').call(initRowMedianRect.bind(this));
  g.append('text').call(initMeanText.bind(this));
  g.append('rect').call(initMeanRect.bind(this));

  return g;
}

function initRowFill(selection) {
  selection
    .attr('class', 'rowFill')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('x', -this.padding.left);
}

function updateRowFill(selection) {
  selection
    .select('.rowFill')
    .transition()
    .duration(this.duration)
    .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.05 : 0))
    .attr('width', this.width + this.padding.left + this.padding.right);
}

function initRowDivider(selection) {
  selection
    .attr('class', 'divider')
    .attr('fill', color.purple)
    .attr('x', -this.padding.left)
    .attr('height', 1)
    .attr('y', this.rowHeight);
}

function updateRowDivider(selection) {
  selection
    .select('.divider')
    .transition()
    .duration(this.duration)
    .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2))
    .attr('width', this.width + this.padding.left + this.padding.right);
}

function initRowGeography(selection) {
  selection
    .attr('class', 'geography')
    .attr('fill', color.purple)
    .attr('y', this.rowHeight / 2 + 6)
    .attr('x', -this.padding.left + 10);
}

function updateRowGeography(selection) {
  selection
    .select('.geography')
    .attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400))
    .text(d => util.truncate(d.geography, this.padding.left));
}

function initRowBox(selection) {
  selection
    .attr('class', 'box')
    .attr('fill', color.purple)
    .attr('stroke', color.purple)
    .attr('stroke-width', 1)
    .attr('fill-opacity', 0.2)
    .attr('rx', 2)
    .attr('shape-rendering', 'geometricPrecision')
    .attr('height', this.barHeight)
    .attr('y', (this.rowHeight - this.barHeight) / 2);
}

function updateRowBox(selection) {
  selection
    .select('.box')
    .transition()
    .duration(this.duration)
    .attr('x', d => this.gapX + this.width1 + this.x2(d.low))
    .attr('width', d => this.x2(d.high) - this.x2(d.low));
}

function initRowMedianText(selection) {
  selection
    .attr('class', 'median-value')
    .attr('text-anchor', 'start')
    .attr('font-size', 12)
    .attr('font-weight', 700)
    .attr('y', this.rowHeight / 2 + 5);
}

function updateRowMedianText(selection) {
  selection
    .select('.median-value')
    .text(d => d.median + ' år')
    .transition()
    .duration(this.duration)
    .attr('x', d => this.gapX + this.width1 + this.x2(d.median) + 6);
}

function initRowMedianRect(selection) {
  selection
    .attr('class', 'median-stroke')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('width', 3)
    .attr('shape-rendering', 'geometricPrecision')
    .attr('transform', `translate(-1.5, 0)`)
    .attr('y', 0);
}

function updateRowMedianRect(selection) {
  selection
    .select('.median-stroke')
    .transition()
    .duration(this.duration)
    .attr('x', d => this.gapX + this.width1 + this.x2(d.median));
}

function initMeanText(selection) {
  selection
    .attr('class', 'mean-value')
    .attr('text-anchor', 'start')
    .attr('font-size', 12)
    .attr('font-weight', 700)
    .attr('y', this.rowHeight / 2 + 5);
}

function updateRowMeanText(selection) {
  selection
    .select('.mean-value')
    .text(d => locale.norwegianLocale.format(',.2f')(d.mean) + ' år')
    .transition()
    .duration(this.duration)
    .attr('x', d => this.x(d.mean) + 6);
}

function initMeanRect(selection) {
  selection
    .attr('class', 'mean-stroke')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('width', 3)
    .attr('shape-rendering', 'geometricPrecision')
    .attr('transform', `translate(-1.5, 0)`)
    .attr('y', 0);
}

function updateRowMeanRect(selection) {
  selection
    .select('.mean-stroke')
    .transition()
    .duration(this.duration)
    .attr('x', d => this.x(d.mean));
}

export {
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
};
