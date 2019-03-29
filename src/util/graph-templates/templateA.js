/**
 * Template for bar chart which supports both single or multiple series.
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding = { top: 100, left: 190, right: 25, bottom: 30 };
  this.gutter = 30;
  this.x2 = d3.scaleLinear();
  this.x = [];
  this.filteredData = {};
  this.mobileWidth = 420;
  this.isMobileView = false;
  this.isSingleSeries = false;

  this.render = function(data, options = {}) {
    this.selected = options.selected !== undefined ? options.selected : -1;

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

    if (!this.isMobileView && !this.isSingleSeries) {
      this.width = d3.max([this.width, 600]);
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

    this.svg
      .transition()
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
    this.drawColumns();
    this.drawRows();
    this.drawAxis();
    this.drawSource(
      'Statistisk sentralbyrå (test)',
      this.padding.top + this.height + this.padding.bottom + this.sourceHeight
    );
    this.drawTable();
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
  this.initRowElements = function(el) {
    let g = el.append('g').attr('class', 'row');

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

    return g;
  };

  this.drawTable = function() {
    let thead = this.table.select('thead');
    let tbody = this.table.select('tbody');
    this.table.select('caption').text(this.data.meta.heading);

    thead.selectAll('*').remove();
    tbody.selectAll('*').remove();

    let hRow = thead.append('tr');

    // Header columns
    hRow
      .selectAll('th')
      .data(() => [
        'Geografi',
        ...this.data.meta.series.map(d => {
          if(typeof(d) === 'string') {
            return d
          } else if(d.heading) {
            return `${d.heading} ${d.subheading}`;
          }
          
        }),
      ])
      .attr('scope', 'col')
      .join('th')
      .text(d => d);

    let rows = tbody
      .selectAll('tr')
      .data(this.data.data)
      .join('tr');

    // Geography Cells
    rows
      .selectAll('th')
      .data(d => [d.geography])
      .join('th')
      .attr('scope', 'row')
      .text(d => d);

    // Value Cells
    rows
      .selectAll('td')
      .data(d => d.values)
      .join('td')
      .text(d => this.format(d[this.method], this.method));
  };

  /**
   * Updates elements on each row
   */
  this.drawRows = function() {
    // Select all existing rows (DOM elements) that matches the data
    let rows = this.canvas
      .select('g.rows')
      .selectAll('g.row')
      .data(this.filteredData.data, d => d.geography)
      .join(
        enter => {
          let el = this.initRowElements(enter);
          el.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
          return el;
        },
        update => update.transition().attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`)
      )
      .attr('class', 'row');

    // Dynamic styling, sizing and positioning based on data and container size
    rows
      .select('rect.rowFill')
      .attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0 : 0))
      .attr('width', this.padding.left + this.width + this.padding.right);
    rows
      .select('rect.divider')
      .attr('fill-opacity', d => {
        if (this.data.meta.series.length === 1) return 0;
        return this.isMobileView ? 0 : d.avgRow || d.totalRow ? 0.5 : 0.2;
      })
      .attr('width', this.padding.left + this.width + this.padding.right);

    rows
      .select('text')
      .text(d => {
        if (this.isMobileView) {
          return `${d.geography} (${this.format(d.values[0][this.method], this.method)})`;
        } else {
          return d.geography;
        }
      })
      .attr('x', () => {
        if (this.isMobileView) return 0;
        return this.data.meta.series.length > 1 ? -this.padding.left + 10 : -10;
      })
      .attr('y', () => {
        return this.isMobileView ? 15 : this.rowHeight / 2 + 4;
      })
      .attr('text-anchor', () => {
        if (this.isMobileView) return 'start';
        if (this.data.meta.series.length > 1) return 'start';
        return 'end';
      })
      .style('cursor', d => {
        if ((this.isCompare && !d.totalRow) || (!this.isCompare && d.totalRow)) {
          return 'pointer';
        } else {
          return false;
        }
      })
      .style('text-decoration', d => {
        if ((this.isCompare && !d.totalRow) || (!this.isCompare && d.totalRow)) {
          return 'underline';
        } else {
          return false;
        }
      });

    rows.select('text.geography').attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));

    rows
      .select('text.geography')
      .append('title')
      .html(d => d.geography);

    // Add attributes to total and avg rows
    rows.attr('fill', d => {
      if (d.avgRow) return color.yellow;
      if (d.totalRow) return color.purple;
      return color.purple;
    });

    let bars = rows
      .selectAll('rect.bar')
      .data(d => d.values)
      .join('rect')
      .attr('class', 'bar');

    bars
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
      .attr('opacity', (d, i) => {
        return i === this.highlight || this.highlight === -1 || this.highlight === undefined ? 1 : 0.2;
      })
      .transition()
      .duration(this.duration)
      .attr('width', (d, i) => {
        if (this.method === 'value' && d.value > this.x[i].domain()[1]) return 0;
        return Math.max(this.x[0](d[this.method]), 0);
      })
      .attr('x', (d, i) => this.x[i](0));

    bars
      .on('mousemove', d => {
        this.showTooltip(this.format(d[this.method], this.method), d3.event);
      })
      .on('mouseleave', () => {
        this.hideTooltip();
      });
  };

  this.setScales = function() {
    let maxValues = this.filteredData.meta.series.map((row, i) => {
      return d3.max(
        this.filteredData.data.filter(d => !(this.method === 'value' && d.totalRow)).map(d => d.values[i][this.method])
      );
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
      SCALE.domain([0, maxValues[index]])
        .range([startPos, endPos])
        .nice();

      return SCALE;
    });

    this.x2.domain(this.filteredData.meta.series.map((d, i) => i)).range([0, this.width]);
  };

  this.drawAxis = function() {
    this.xAxis = this.canvas
      .selectAll('g.axis.x')
      .data(this.x)
      .join('g')
      .attr('class', 'axis x');

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
            .ticks((this.x[i].range()[1] - this.x[i].range()[0]) / 60)
            .tickFormat(d => this.format(d, this.method, true))
        );
    });
  };

  this.drawColumns = function() {

    let columns = this.canvas
      .select('g.columns')
      .selectAll('g.column')
      .data(this.filteredData.meta.series, d => d.heading + d.subheading)
      .join(enter => {
        let g = enter.append('g').attr('class', 'column');

        g.append('rect')
          .attr('fill', color.light_grey)
          .attr('class', 'colFill');

        g.append('rect')
          .attr('fill', color.light_grey)
          .attr('class', 'clickTrigger');

        g.append('rect')
          .attr('class', 'arrow')
          .attr('width', 1)
          .attr('height', 11);
        g.append('text')
          .attr('class', 'colHeading')
          .attr('transform', 'translate(0, -40)')
          .style('pointer-events', 'none');
        g.append('text')
          .attr('class', 'colSubheading')
          .attr('transform', 'translate(0, -20)');
        return g;
      });

    columns
      .transition()
      .duration(this.duration)
      .attr('transform', (d, i) => `translate(${this.x[i](0)},0)`);

    columns
      .select('rect.clickTrigger')
      .style('cursor', () => {
        if (this.data.meta.series.length > 1) return 'pointer';
      })
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
      .on('click keyup', (d, i, j) => {
        if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
        if (this.data.meta.series.length === 1) return;
        let target = this.selected > -1 ? -1 : i;

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
      .select('rect.colFill')
      .attr('y', -10)
      .transition()
      .duration(this.duration)
      .attr('height', this.height + 20)
      .duration(this.duration)
      .attr('width', (d, i) => {
        // let val = this.filteredData.data.filter(d => d[foo])[0].values[i][this.method];
        let val = this.filteredData.data.filter(d => d.totalRow)[0].values[i][this.method];

        if ((this.method === 'value' && val > this.x[i].domain()[1]) || this.isMobileView) {
          return 0;
        } else if (this.filteredData.data.filter(d => d.totalRow).length) {
          return this.x[0](val);
        } else {
          return 0;
        }
      });

    columns
      .select('rect.arrow')
      .attr('transform', `translate(0, ${this.rowHeight / 2 - 5})`)
      .transition()
      .duration(this.duration)
      .attr('y', () => {
        let indexOfTotalRow = this.filteredData.data.findIndex(d => d.totalRow);
        return indexOfTotalRow * this.rowHeight;
      })
      .attr('x', (d, i) => {
        // let val = this.filteredData.data.filter(d => d.avgRow)[0].values[i][this.method];

        let val = this.filteredData.data.filter(d => d.geography === 'Oslo i alt')[0].values[i][this.method];

        if (this.method === 'value' && val > this.x[i].domain()[1]) return 0;
        return this.x[0](val);
      })
      .attr('opacity', (d, i) => {
        // let val = this.filteredData.data.filter(d => d.avgRow)[0].values[i][this.method];
        let val = this.filteredData.data.filter(d => d.geography === 'Oslo i alt')[0].values[i][this.method];

        if (this.isMobileView) {
          return 0;
        } else if (this.method === 'value' && val > this.x[i].domain()[1]) {
          return 0;
        } else {
          return 1;
        }
      });
  };

  this.init(svg);
}

export default Template;
