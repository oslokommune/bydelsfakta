import { color } from '../colors';
import d3 from '@/assets/d3';
import util from '../template-utils';
import { showTooltipOver, showTooltipMove, hideTooltip } from '../../tooltip';

export function initRows() {
  return this.canvas
    .select('g.rows')
    .selectAll('g.row')
    .data(this.filteredData.data, d => d.geography)
    .join(enterRowElements.bind(this), updateRowElements.bind(this))
    .classed('row', true)
    .attr('data-avgRow', d => d.avgRow)
    .attr('data-totalRow', d => d.totalRow);
}

export function styleRows(selection) {
  // Dynamic styling, sizing and positioning based on data and container size
  selection
    .select('rect.rowFill')
    .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0 : 0))
    .attr('width', this.padding.left + this.width + this.padding.right);

  selection
    .select('rect.divider')
    .attr('fill-opacity', d => {
      if (this.data.meta.series.length === 1) return 0;
      return this.isMobileView ? 0 : d.avgRow || d.totalRow ? 0.5 : 0.2;
    })
    .attr('width', this.padding.left + this.width + this.padding.right);

  selection
    .selectAll('text.valueText')
    .data(d => d.values)
    .join('text')
    .call(styleValueText.bind(this));

  selection
    .select('text.geography')
    .call(styleRowName.bind(this))
    .attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400))
    .append('title')
    .html(d => d.geography);

  // Add attributes to total and avg rows
  selection.attr('fill', d => (d.avgRow ? color.yellow : d.totalRow ? color.purple : color.purple));
}

function styleValueText(selection) {
  selection
    .classed('valueText', true)
    .attr('fill', color.purple)
    .attr('y', this.rowHeight / 2 + 4)
    .attr('x', (d, i) => this.x[i](0))
    .text(d => (d[this.method] ? this.format(d[this.method], this.method) : 'Ikke tilgjengelig'))
    .attr('opacity', (d, i, j) => {
      if (this.isMobileView && this.method === 'value') return 0;
      const parent = d3.select(j[i].parentNode);
      const avgOrTotal = JSON.parse(parent.attr('data-avgRow')) || JSON.parse(parent.attr('data-totalRow'));
      return avgOrTotal && this.method === 'value' && d.value > this.x[i].domain()[1] ? 1 : 0;
    });
}

function styleRowName(selection) {
  selection
    .text(getRowName.bind(this))
    .attr('x', () => {
      if (this.isMobileView) return 0;
      return this.data.meta.series.length > 1 ? -this.padding.left + 10 : -10;
    })
    .attr('y', () => (this.isMobileView ? 15 : this.rowHeight / 2 + 4))
    .attr('text-anchor', () => {
      if (this.isMobileView) return 'start';
      if (this.data.meta.series.length > 1) return 'start';
      return 'end';
    })
    .style('cursor', d => {
      if (d.noLink) return false;
      return (this.isCompare && !d.totalRow) || (!this.isCompare && d.totalRow) ? 'pointer' : false;
    })
    .style('text-decoration', d => {
      if (d.noLink) return;
      const isDistrict = util.allDistricts.some(district => district.value === d.geography);
      return (this.isCompare && !d.totalRow) || (!this.isCompare && d.totalRow) || isDistrict ? 'underline' : false;
    });
}

function getRowName(d) {
  if (this.isMobileView && d.values.length) {
    return `${d.geography} (${this.format(d.values[0][this.method], this.method)})`;
  } else {
    return d.geography;
  }
}

function enterRowElements(selection) {
  const g = selection.append('g').attr('class', 'row');

  // Row fill
  g.insert('rect')
    .attr('class', 'rowFill')
    .attr('fill', color.purple)
    .attr('height', this.rowHeight)
    .attr('x', -this.padding.left)
    .attr('width', this.width + this.padding.left);

  // Row divider
  g.insert('rect')
    .attr('class', 'divider')
    .attr('fill', color.purple)
    .attr('x', -this.padding.left)
    .attr('width', this.width + this.padding.left)
    .attr('height', 1)
    .attr('y', this.rowHeight);

  // Text element
  g.append('text')
    .attr('class', 'geography')
    .attr('fill', color.purple)
    .attr('y', this.rowHeight / 2 + 6)
    .on('click', util.goto);

  g.append('g').attr('class', 'bars');

  g.append('text')
    .attr('class', 'valueText')
    .attr('fill', color.purple);

  g.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

  return g;
}

function updateRowElements(selection) {
  return selection.transition().attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
}

export function createBars(selection) {
  return selection
    .selectAll('rect.bar')
    .data(d => d.values)
    .join('rect')
    .attr('class', 'bar');
}

export function updateBars(selection) {
  selection
    .attr('height', (d, i, j) => {
      if (this.isMobileView) return 7;
      return j[0].parentNode.__data__.totalRow ? 2 : this.barHeight;
    })
    .attr('y', (d, i, j) => {
      if (this.isMobileView) {
        return (this.rowHeight - this.barHeight) / 2 + 12;
      } else {
        return j[0].parentNode.__data__.totalRow ? this.rowHeight / 2 : (this.rowHeight - this.barHeight) / 2;
      }
    })
    .attr('opacity', (d, i) =>
      i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2
    )
    .transition()
    .duration(this.duration)
    .attr('width', (d, i) => {
      if (this.method === 'value' && d[this.method] > this.x[i].domain()[1]) return 0;
      return Math.max(this.x[0](d[this.method]), 0);
    })
    .attr('x', (d, i) => this.x[i](0));
}

export function handleTooltips(selection) {
  selection
    .on('mouseover', d => showTooltipOver(this.format(d[this.method], this.method)))
    .on('mousemove', showTooltipMove)
    .on('mouseleave', hideTooltip);
}
