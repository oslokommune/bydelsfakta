import { sum } from 'd3';
import { color } from '@/util/graph-templates/colors';
import { showTooltipOver, showTooltipMove, hideTooltip } from '@/util/tooltip';
import { enterRows } from './enter';

export default function() {
  // Draws/updates rows content. Triggered each render
  this.lower
    .selectAll('g.row')
    .data(this.data.data, d => d.geography)
    .join(enterRows.bind(this))
    .call(updateRowFill.bind(this))
    .call(positionRow.bind(this))
    .call(updateRowGeography.bind(this))
    .call(updateRowDivider.bind(this))
    .call(updateRowBar.bind(this))
    .call(updateRowTextValue.bind(this));

  this.lower.select('text.xAxis-title').text(getLowerHeadingString.bind(this));
}

function updateRowFill(selection) {
  selection
    .select('rect.rowFill')
    .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.05 : 0))
    .attr('width', this.padding.left + this.width + this.padding.right);
}

function updateRowGeography(selection) {
  selection
    .select('text.geography')
    .attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400))
    .text(d => d.geography);
}

function updateRowDivider(selection) {
  selection
    .select('rect.divider')
    .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2))
    .attr('width', this.padding.left + this.width + this.padding.right);
}

function updateRowBar(selection) {
  const bar = selection.select('rect.bar');

  bar
    .transition()
    .duration(this.duration)
    .attr('width', district => {
      return this.method === 'value' && (district.avgRow || district.totalRow)
        ? 0
        : this.x(
            sum(district.values.filter((val, i) => i >= this.extent[0] && i <= this.extent[1]).map(d => d[this.method]))
          );
    })
    .attr('x', this.paddingLowerLeft)
    .attr('y', (this.rowHeight - this.barHeight) / 2 + 1)
    .attr('fill', d => {
      return d.totalRow || d.avgRow ? color.purple : color.blue;
    });

  bar
    .on('mouseover', d => {
      const total = sum(d.values.filter((val, i) => i >= this.extent[0] && i <= this.extent[1]).map(dj => dj.value));
      showTooltipOver(total);
    })
    .on('mousemove', showTooltipMove)
    .on('mouseleave', hideTooltip);
}

function updateRowTextValue(selection) {
  selection.select('text.value').text(district => {
    const total = sum(
      district.values.filter((val, i) => i >= this.extent[0] && i <= this.extent[1]).map(d => d[this.method])
    );
    return this.format(total, this.method);
  });
}

function positionRow(selection) {
  selection
    .transition()
    .duration(this.duration * 2)
    .delay(this.duration)
    .attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
}

function getLowerHeadingString() {
  if (this.method === 'ratio' && this.extent[1] - this.extent[0] >= 1) {
    return `Andel av befolkningen mellom ${this.extent[0]} og ${this.extent[1]} år`;
  }
  if (this.method === 'ratio' && this.extent[1] - this.extent[0] === 0) {
    return `Andel av befolkningen som er ${this.extent[0]} år`;
  }
  if (this.method !== 'ratio' && this.extent[1] - this.extent[0] >= 1) {
    return `Antall personer mellom ${this.extent[0]} og ${this.extent[1]} år`;
  }
  if (this.method !== 'ratio' && this.extent[1] - this.extent[0] === 0) {
    return `Størrelse av befolkningen på ${this.extent[0]} år`;
  }

  return '';
}
