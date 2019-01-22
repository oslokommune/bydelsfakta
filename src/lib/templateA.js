/**
 * Template for bar chart which supports both single or multiple series.
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding = { top: 100, left: 190, right: 20, bottom: 30 };
  this.gutter = 30;
  this.x2 = d3.scaleLinear();
  this.x = [];
  this.filteredData;

  const formatPercent = d3.format('.0%');

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    this.filteredData = JSON.parse(JSON.stringify(this.data));

    if (this.selected > -1) {
      this.filteredData.meta.series = [this.data.meta.series[this.selected]];
      this.filteredData.data = this.filteredData.data.map(bydel => {
        bydel.values = [bydel.values[this.selected]];
        return bydel;
      });
    }

    this.padding.top = this.data.meta.series.length <= 1 && this.selected === -1 ? 40 : 100;

    this.svg
      .transition()
      .attr('height', this.padding.top + this.height + this.padding.bottom)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.canvas
      .select('g.close')
      .style('display', () => {
        return this.selected > -1 ? 'block' : 'none';
      })
      .attr('transform', `translate(${this.width - 30}, -60)`);

    this.setScales();
    this.drawAxis();
    this.drawColumns();
    this.drawRows();
  };

  this.created = function() {
    this.canvas.append('g').attr('class', 'columns');
    this.canvas.append('g').attr('class', 'rows');

    let close = this.canvas
      .append('g')
      .attr('class', 'close')
      .style('display', 'none')
      .on('click', () => {
        this.render(this.data);
      });

    close
      .append('rect')
      .attr('width', 30)
      .attr('height', 30)
      .attr('fill', util.color.red)
      .style('cursor', 'pointer')
      .attr('opacity', 0.7)
      .on('mouseenter', function() {
        d3.select(this)
          .transition()
          .attr('opacity', 1);
      })
      .on('mouseleave', function() {
        d3.select(this)
          .transition()
          .attr('opacity', 0.7);
      });

    close
      .append('text')
      .attr('fill', util.color.purple)
      .style('pointer-events', 'none')
      .text('x')
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr('text-anchor', 'middle')
      .attr('transform', 'translate(15, 20)');
  };

  this.initRowElements = function(rowsE) {
    // Row fill
    rowsE
      .append('rect')
      .attr('class', 'rowFill')
      .attr('fill', util.color.purple)
      .attr('height', this.rowHeight)
      .attr('x', -this.padding.left)
      .attr('width', this.width + this.padding.left);

    // Row divider
    rowsE
      .append('rect')
      .attr('class', 'divider')
      .attr('fill', util.color.purple)
      .attr('x', -this.padding.left)
      .attr('width', this.width + this.padding.left)
      .attr('height', 1)
      .attr('y', this.rowHeight);

    // Row Geography
    let textElement = rowsE
      .append('text')
      .attr('class', 'geography')
      .attr('fill', util.color.purple)
      .attr('y', this.rowHeight / 2 + 6);

    textElement.append('a').html('test');
  };

  this.drawRows = function() {
    let rows = this.canvas
      .select('g.rows')
      .selectAll('g.row')
      .data(this.filteredData.data);
    let rowsE = rows
      .enter()
      .append('g')
      .attr('class', 'row');
    rows.exit().remove();
    rows = rows.merge(rowsE);

    this.initRowElements(rowsE);

    rows.select('text.geography').attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));
    rows.select('rect.rowFill').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0 : 0));
    rows.select('rect.divider').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2));
    rows.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

    rows
      .select('text.geography')
      .text(d => util.truncate(d.geography, this.padding.left))
      .attr('x', () => {
        return this.data.meta.series.length > 1 ? -this.padding.left + 10 : -10;
      })
      .attr('text-anchor', () => {
        return this.data.meta.series.length > 1 ? 'start' : 'end';
      });

    rows
      .select('text.geography')
      .append('title')
      .html(d => d.geography);

    rows.attr('data-total', d => d.totalRow);
    rows.attr('data-avg', d => d.avgRow);

    let bars = rows.selectAll('rect.bar').data(d => {
      return d.values;
    });
    let barsE = bars
      .enter()
      .append('rect')
      .attr('width', 0)
      .attr('class', 'bar');

    bars.exit().remove();
    bars = bars.merge(barsE);

    bars
      .attr('height', (d, i, j) => {
        return j[0].parentNode.getAttribute('data-total') ? 1 : this.barHeight;
      })
      .attr('y', (d, i, j) => {
        return j[0].parentNode.getAttribute('data-total') ? this.rowHeight / 2 : (this.rowHeight - this.barHeight) / 2;
      })
      .attr('fill', (d, i, j) => {
        return j[0].parentNode.getAttribute('data-avg') ? util.color.yellow : util.color.purple;
      })
      .attr('opacity', (d, i) => {
        return i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2;
      });

    bars
      .transition()
      .attr('width', d => this.x[0](d))
      .attr('x', (d, i) => this.x[i](0));
  };

  this.setScales = function() {
    let maxValues = this.filteredData.meta.series.map((row, i) => {
      return d3.max(this.filteredData.data.map(d => d.values[i]));
    });

    this.x2 = d3
      .scaleLinear()
      .range([0, this.width - (this.gutter * this.filteredData.meta.series.length - 1)])
      .domain([0, d3.sum(maxValues)]);

    this.x = this.filteredData.meta.series.map((series, index) => {
      const SCALE = d3.scaleLinear();
      let startPos = 0;
      for (let j = 0; j < index; j++) {
        startPos += this.x2(maxValues[j]);
        startPos += this.gutter;
      }
      let endPos = startPos + this.x2(maxValues[index]);
      SCALE.domain([0, maxValues[index]]).range([startPos, endPos]);

      return SCALE;
    });

    this.x2.domain(this.filteredData.meta.series.map((d, i) => i)).range([0, this.width]);
  };

  this.drawAxis = function() {
    let xAxis = this.canvas.selectAll('g.axis.x').data(this.x);
    let xAxisE = xAxis
      .enter()
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(${0}, ${this.height + 10})`);
    xAxis.exit().remove();
    xAxis = xAxis.merge(xAxisE);
    xAxis.each((d, i, j) => {
      d3.select(j[i])
        .attr('transform', `translate(${0}, ${this.height + 10})`)
        .attr('opacity', () => {
          return i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2;
        })
        .transition()
        .call(
          d3
            .axisBottom(this.x[i])
            .ticks(2)
            .tickFormat(formatPercent)
        );
    });
  };

  this.drawColumns = function() {
    let columns = this.canvas
      .select('g.columns')
      .selectAll('g.column')
      .data(this.filteredData.meta.series);
    let columnsE = columns
      .enter()
      .append('g')
      .attr('class', 'column');
    columns.exit().remove();
    columns = columns.merge(columnsE);
    columns.transition().attr('transform', (d, i) => {
      return `translate(${this.x[i](0)},0)`;
    });
    columnsE.append('rect').attr('fill', util.color.light_grey);
    columnsE
      .append('rect')
      .attr('class', 'arrow')
      .attr('width', 1)
      .attr('height', 11);
    columnsE
      .append('text')
      .attr('class', 'colHeading')
      .attr('transform', 'translate(0, -40)');

    columnsE
      .append('text')
      .attr('class', 'colSubheading')
      .attr('transform', 'translate(0, -20)');

    columnsE.append('rect').attr('class', 'clickTrigger');

    columns
      .select('rect.clickTrigger')
      .style('cursor', () => {
        if (this.data.meta.series.length > 1) return 'pointer';
      })
      .attr('width', (d, i) => {
        return this.x[i].range()[1] - this.x[i].range()[0] + this.gutter;
      })
      .attr('height', this.height + 80)
      .attr('transform', `translate(0, -60)`)
      .attr('fill', 'black')
      .attr('opacity', 0)
      .on('mouseover', (d, i) => {
        this.render(this.data, { highlight: i, selected: this.selected });
      })
      .on('mouseleave', (d, i) => {
        this.render(this.data, { highlight: -1, selected: this.selected });
      })
      .on('click', (d, i) => {
        if (this.data.meta.series.length === 1) return;
        let target = this.selected > -1 ? -1 : i;
        this.render(this.data, { selected: target });
      });

    columns
      .select('text.colHeading')
      .style('display', (d, i) => {
        return this.filteredData.meta.series.length > 1 || this.selected > -1 ? 'inherit' : 'none';
      })
      .text(d => d.heading)
      .append('title')
      .html(d => d.heading);

    columns
      .select('text.colSubheading')
      .text((d, i) => util.truncate(d.subheading, this.x[i].range()))
      .style('display', (d, i) => {
        return this.filteredData.meta.series.length > 1 || this.selected > -1 ? 'inherit' : 'none';
      })
      .append('title')
      .html(d => d.subheading);

    columns.select('text.colHeading').attr('opacity', (d, i) => {
      return i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2;
    });

    columns.select('text.colSubheading').attr('opacity', (d, i) => {
      return i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2;
    });

    columns
      .select('rect')
      .attr('y', -10)
      .attr('height', this.height + 10)
      .transition()
      .attr('width', (d, i) => {
        if (this.filteredData.data.filter(d => d.totalRow).length) {
          return this.x[0](this.filteredData.data.filter(d => d.totalRow)[0].values[i]);
        } else {
          return 0;
        }
      });

    columns
      .select('rect.arrow')
      .attr('y', () => {
        let indexOfTotalRow = this.filteredData.data.findIndex(d => d.totalRow);
        return indexOfTotalRow * this.rowHeight;
      })
      .attr('transform', `translate(0, ${this.rowHeight / 2 - 5})`)
      .transition()
      .attr('x', (d, i) => {
        return this.x[0](this.filteredData.data.filter(d => d.totalRow)[0].values[i]);
      });
  };

  this.init(svg);
}

export default Template;
