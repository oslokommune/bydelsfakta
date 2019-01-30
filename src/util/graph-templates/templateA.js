/**
 * Template for bar chart which supports both single or multiple series.
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import color from './colors';
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

    // Make a filtered copy of the provided data object containing
    // to house only the selected series (if one has been selected)
    this.filteredData = JSON.parse(JSON.stringify(this.data));
    if (this.selected > -1) {
      this.filteredData.meta.series = [this.data.meta.series[this.selected]];
      this.filteredData.data = this.filteredData.data.map(bydel => {
        bydel.values = [bydel.values[this.selected]];
        return bydel;
      });
    }

    // Sort by highest value in first series
    this.filteredData.data = this.filteredData.data
      .sort((a, b) => b.values[0][this.method] - a.values[0][this.method])
      .sort((a, b) => (b.avgRow ? -1 : 0))
      .sort((a, b) => (b.totalRow ? -1 : 0));

    // Multiseries need larger padding top to make room for tabs
    this.padding.top = this.data.meta.series.length <= 1 && this.selected === -1 ? 40 : 100;

    this.svg
      // .transition()
      // .duration(this.duration)
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.padding.left + this.width + this.padding.right);

    // Move the close button
    this.canvas
      .select('g.close')
      .style('display', () => {
        return this.selected > -1 ? 'block' : 'none';
      })
      .attr('transform', `translate(${this.width - 30}, -60)`)
      .attr('tabindex', this.selected === -1 ? false : 0);

    this.setScales();
    this.drawAxis();
    this.drawColumns();
    this.drawRows();
    this.drawSource('Statistisk sentralbyrå (test)');
  };

  this.created = function() {
    this.canvas.append('g').attr('class', 'columns');
    this.canvas.append('g').attr('class', 'rows');

    // Create and initialise the close button
    let close = this.canvas
      .append('g')
      .attr('class', 'close')
      .style('display', 'none')
      .on('click keyup', () => {
        if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
        this.render(this.data, { method: this.method });
      });

    // Close button background
    close
      .append('rect')
      .attr('width', 30)
      .attr('height', 30)
      .attr('fill', color.red)
      .style('cursor', 'pointer')
      .attr('opacity', 0.7)
      .on('mouseenter', function() {
        d3.select(this)
          .transition()
          .duration(this.duration)
          .attr('opacity', 1);
      })
      .on('mouseleave', function() {
        d3.select(this)
          .transition()
          .duration(this.duration)
          .attr('opacity', 0.7);
      });

    // Close button icon
    close
      .append('text')
      .attr('fill', color.purple)
      .style('pointer-events', 'none')
      .text('x')
      .attr('font-weight', 700)
      .attr('font-size', 20)
      .attr('text-anchor', 'middle')
      .attr('transform', 'translate(15, 20)');
  };

  /**
   * @param  {nodelist} rowsE - The newly created rows
   *
   * Creates all the DOM elements inside of each row
   */
  this.initRowElements = function(rowsE) {
    // Row fill
    rowsE
      .append('rect')
      .attr('class', 'rowFill')
      .attr('fill', color.purple)
      .attr('height', this.rowHeight)
      .attr('x', -this.padding.left)
      .attr('width', this.width + this.padding.left);

    // Row divider
    rowsE
      .append('rect')
      .attr('class', 'divider')
      .attr('fill', color.purple)
      .attr('x', -this.padding.left)
      .attr('width', this.width + this.padding.left)
      .attr('height', 1)
      .attr('y', this.rowHeight);

    // Row Geography
    let hyperlink = rowsE.append('a').attr('class', 'hyperlink');

    // Text element inside of hyperlink
    hyperlink
      .append('text')
      .attr('class', 'geography')
      .attr('fill', color.purple)
      .attr('y', this.rowHeight / 2 + 6);
  };

  /**
   * Updates elements on each row
   */
  this.drawRows = function() {
    // Select all existing rows (DOM elements) that matches the data
    let rows = this.canvas
      .select('g.rows')
      .selectAll('g.row')
      .data(this.filteredData.data);

    // Create DOM element for missing rows
    let rowsE = rows
      .enter()
      .append('g')
      .attr('class', 'row');

    // Remove excess DOM elements
    rows.exit().remove();

    // Combine selections of existing rows and newly created rows
    rows = rows.merge(rowsE);

    // Create DOM elements inside the newly created rows
    this.initRowElements(rowsE);

    // Dynamic styling, sizing and positioning based on data and container size

    rows.select('rect.rowFill').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0 : 0));
    rows.select('rect.divider').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2));
    rows.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

    rows.select('a.hyperlink').attr('xlink:href', `/bydelsfakta#/bydel/sthanshaugen/folkemengde`);
    rows
      .select('a.hyperlink')
      .select('text')
      .text(d => util.truncate(d.geography, this.padding.left))
      .attr('x', () => {
        return this.data.meta.series.length > 1 ? -this.padding.left + 10 : -10;
      })
      .attr('text-anchor', () => {
        return this.data.meta.series.length > 1 ? 'start' : 'end';
      });

    rows.select('text.geography').attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));

    rows
      .select('text.geography')
      .append('title')
      .html(d => d.geography);

    // Add attributes to total and avg rows
    rows.attr('data-total', d => d.totalRow);
    rows.attr('data-avg', d => d.avgRow);

    let bars = rows.selectAll('rect.bar').data(d => d.values);
    let barsE = bars
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('width', 0);

    bars.exit().remove();
    bars = bars.merge(barsE);

    bars
      .attr('height', (d, i, j) => {
        return j[0].parentNode.getAttribute('data-total') ? 2 : this.barHeight;
      })
      .attr('y', (d, i, j) => {
        return j[0].parentNode.getAttribute('data-total') ? this.rowHeight / 2 : (this.rowHeight - this.barHeight) / 2;
      })
      .attr('fill', (d, i, j) => {
        return j[0].parentNode.getAttribute('data-avg') ? color.yellow : color.purple;
      })
      .attr('opacity', (d, i) => {
        return i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2;
      })
      .on('mousemove', (d, i, j) => {
        if (this.method === 'ratio') {
          this.showTooltip(formatPercent(d.ratio), d3.event);
        } else {
          this.showTooltip(Math.round(d[this.method]), d3.event);
        }
      })
      .on('mouseleave', () => {
        this.hideTooltip();
      });

    bars
      .transition()
      .duration(this.duration)
      .attr('width', d => this.x[0](d[this.method]))
      .attr('x', (d, i) => this.x[i](0));
  };

  this.setScales = function() {
    let maxValues = this.filteredData.meta.series.map((row, i) => {
      return d3.max(this.filteredData.data.map(d => d.values[i][this.method]));
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
      .attr('transform', `translate(0, ${this.height + 10})`);
    xAxis.exit().remove();
    xAxis = xAxis.merge(xAxisE);
    xAxis.each((d, i, j) => {
      d3.select(j[i])
        .attr('transform', `translate(0, ${this.height + 10})`)
        .attr('opacity', () => {
          return i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2;
        })
        .transition()
        .duration(this.duration)
        .call(
          d3
            .axisBottom(this.x[i])
            .ticks((this.x[i].range()[1] - this.x[i].range()[0]) / 60)
            .tickFormat(d => {
              if (this.method === 'ratio') {
                return formatPercent(d);
              } else {
                return d;
              }
            })
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
    columns
      .transition()
      .duration(this.duration)
      .attr('transform', (d, i) => {
        return `translate(${this.x[i](0)},0)`;
      });
    columnsE.append('rect').attr('fill', color.light_grey);
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
        this.render(this.data, { highlight: i, selected: this.selected, method: this.method });
      })
      .on('mouseleave', () => {
        this.render(this.data, { highlight: -1, selected: this.selected, method: this.method });
      })
      .on('click keyup', (d, i, j) => {
        if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
        if (this.data.meta.series.length === 1) return;
        let target = this.selected > -1 ? -1 : i;

        // Move affected column to index 0 in DOM to ensure smooth transitions
        let columnToBeMoved = j[i].parentElement;
        columnToBeMoved.parentElement.prepend(columnToBeMoved);

        // Move affected rects to index 0 in DOM to ensure smooth transitions
        let barsToBeMoved = this.canvas
          .select('g.rows')
          .selectAll('g.row')
          .selectAll('rect.bar')
          .filter((dd, ii) => {
            return ii === i;
          });

        barsToBeMoved.each(function() {
          let barElement = d3.select(this).node();
          barElement.parentElement.prepend(barElement);
        });

        this.render(this.data, { selected: target, method: this.method });
      })
      .attr('tabindex', this.filteredData.meta.series.length > 1 ? 0 : false);

    columns
      .select('text.colHeading')
      .style('display', () => {
        return this.filteredData.meta.series.length > 1 || this.selected > -1 ? 'inherit' : 'none';
      })
      .text(d => d.heading)
      .append('title')
      .html(d => d.heading);

    columns
      .select('text.colSubheading')
      .text((d, i) => util.truncate(d.subheading, this.x[i].range()))
      .style('display', () => {
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
      .duration(this.duration)
      .attr('width', (d, i) => {
        if (this.filteredData.data.filter(d => d.totalRow).length) {
          return this.x[0](this.filteredData.data.filter(d => d.totalRow)[0].values[i][this.method]);
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
      .duration(this.duration)
      .attr('x', (d, i) => {
        return this.x[0](this.filteredData.data.filter(d => d.totalRow)[0].values[i][this.method]);
      });
  };

  this.init(svg);
}

export default Template;
