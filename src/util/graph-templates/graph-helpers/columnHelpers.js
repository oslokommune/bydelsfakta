import d3 from '@/assets/d3';
import { color } from '../colors';
import util from '../template-utils';

export function initColumns() {
  return this.canvas
    .select('g.columns')
    .selectAll('g.column')
    .data(this.filteredData.meta.series, d => d.heading + d.subheading)
    .join(createColumns);
}

export function positionColumns(selection) {
  selection
    .transition()
    .duration(this.duration)
    .attr('transform', (d, i) => `translate(${this.x[i](0)},0)`);
}

export function updateColHeading(selection) {
  selection
    .select('text.colHeading')
    .style('display', () => (this.filteredData.meta.series.length > 1 || this.selected > -1 ? 'inherit' : 'none'))
    .text((d, i) => {
      const colWidth = this.x[i].range()[1] - this.x[i].range()[0];
      return util.truncate(d.heading, colWidth);
    })
    .attr('opacity', (d, i) =>
      i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2
    );
}

export function updateColSubheading(selection) {
  selection
    .select('text.colSubheading')
    .text((d, i) => util.truncate(d.subheading, this.x[i].range()))
    .style('display', () => (this.filteredData.meta.series.length > 1 || this.selected > -1 ? 'inherit' : 'none'))
    .attr('opacity', (d, i) =>
      i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2
    );
}

export function updateColFill(selection) {
  selection
    .select('rect.colFill')
    .attr('y', -10)
    .transition()
    .duration(this.duration)
    .attr('height', this.height + 20)
    .duration(this.duration)
    .attr('width', (d, i) => {
      let val;
      const totalRow = this.filteredData.data.find(dj => dj.totalRow);

      if (totalRow && totalRow.values && totalRow.values[i]) {
        val = totalRow.values[i][this.method];
      } else {
        return 0;
      }

      if ((this.method === 'value' && val > this.x[i].domain()[1]) || this.isMobileView) {
        return 0;
      }
      if (this.filteredData.data.filter(dj => dj.totalRow).length) {
        return this.x[0](val);
      }
      return 0;
    });
}

export function updateColArrow(selection) {
  selection
    .select('rect.arrow')
    .attr('transform', `translate(0, ${this.rowHeight / 2 - 5})`)
    .transition()
    .duration(this.duration)
    .attr('y', () => this.filteredData.data.findIndex(d => d.totalRow) * this.rowHeight)
    .attr('x', (d, i) => {
      let val;
      const totalRow = this.filteredData.data.find(dj => dj.totalRow);

      if (totalRow && totalRow.values && totalRow.values[i]) {
        val = totalRow.values[i][this.method];
      } else {
        return null;
      }

      if (this.method === 'value' && val > this.x[i].domain()[1]) return 0;
      return this.x[0](val);
    })
    .attr('opacity', (d, i) => {
      let val;
      const totalRow = this.filteredData.data.find(dj => dj.totalRow);

      if (totalRow && totalRow.values && totalRow.values[i]) {
        val = totalRow.values[i][this.method];
      } else {
        return 0;
      }

      if (this.isMobileView) {
        return 0;
      }
      if (this.method === 'value' && val > this.x[i].domain()[1]) {
        return 0;
      }
      return 1;
    });
}

export function updateClickTrigger(selection) {
  selection
    .select('rect.clickTrigger')
    .style('cursor', () => (this.data.meta.series.length > 1 ? 'pointer' : 'default'))
    .attr('width', (d, i) => {
      if (this.data.meta.series.length === 1) return 0;
      return this.x[i].range()[1] - this.x[i].range()[0] + this.gutter;
    })
    .attr('height', this.padding.top)
    .attr('transform', `translate(0, -60)`)
    .attr('fill', 'black')
    .attr('opacity', 0)
    .on('mouseover', (d, i) => {
      this.render(this.data, { highlight: i, selected: this.selected, method: this.method });
    })
    .on('mouseleave', () => {
      this.render(this.data, { highlight: -1, selected: this.selected, method: this.method });
    })
    .on('click keyup', (d, i) => {
      if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
      if (this.data.meta.series.length === 1) return;
      const target = this.selected > -1 ? -1 : i;

      this.render(this.data, { selected: target, method: this.method });
    })
    .attr('tabindex', this.filteredData.meta.series.length > 1 ? 0 : false)
    .append('title')
    .html(d => `${d.heading} ${d.subheading}`);
}

function createColumns(selection) {
  const g = selection.append('g').attr('class', 'column');
  g.append('rect').call(styleColumnBackground);
  g.append('rect').call(styleClickTrigger);
  g.append('rect').call(styleArrow);
  g.append('text').call(styleColumnHeading);
  g.append('text').call(styleColumnSubheading);
  return g;
}

function styleColumnBackground(el) {
  el.attr('fill', color.light_grey).attr('class', 'colFill');
}

function styleClickTrigger(el) {
  el.attr('fill', color.light_grey).attr('class', 'clickTrigger');
}

function styleArrow(el) {
  el.attr('class', 'arrow')
    .attr('width', 1)
    .attr('height', 11);
}

function styleColumnHeading(el) {
  el.attr('class', 'colHeading')
    .attr('transform', 'translate(0, -40)')
    .style('pointer-events', 'none');
}

function styleColumnSubheading(el) {
  el.attr('class', 'colSubheading')
    .attr('transform', 'translate(0, -20)')
    .style('pointer-events', 'none');
}
