/**
 * Template for brushable bar chart for age distributions.
 */

import Base_Template from './baseTemplate';
import { color } from './colors';
import d3 from '@/assets/d3';
import ageRanges from '../../config/ageRanges';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'd';

  this.padding = { top: 50, right: 20, bottom: 1, left: 0 };
  this.height = 0; // calculated on render. Height of the lower part
  this.height2 = 100; // height of the upper chart
  this.width = 1000;
  this.paddingUpperLeft = 160; // padding left of the upper chart
  this.paddingLowerLeft = 300; // padding left of the lower chart
  this.yGutter = 130; // space between upper and lower charts
  this.y = d3.scaleLinear();
  this.handle;
  this.dropDownParent;

  this.minWidth = 600;
  let gBrushSmall, gBrushLarge;

  this.age = d3.scaleLinear().domain([0, 119]);

  let extent = [];

  function sortData(input, method) {
    input.sort((a, b) => {
      const totA = d3.sum(a.values.filter((d, i) => i >= extent[0] && i <= extent[1]).map(d => d[method]));
      const totB = d3.sum(b.values.filter((d, i) => i >= extent[0] && i <= extent[1]).map(d => d[method]));
      return totB - totA;
    });

    input.sort((a, b) => a.avgRow - b.avgRow);
    input.sort((a, b) => a.totalRow - b.totalRow);
    return input;
  }

  this.render = function(data, options) {
    if (!this.commonRender(data, options)) return;

    if (!data.data) return;

    sortData(data.data, this.method);

    this.width = d3.max([this.width, this.minWidth]);

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

    this.lower.attr('transform', `translate(0, ${this.height2 + this.yGutter})`);

    // Set sizes for brush objects
    brushLarge.extent([[0, 0], [this.width - this.paddingUpperLeft, this.height2]]);
    brushSmall.extent([[0, 0], [this.width - this.paddingUpperLeft, 19]]);

    // Set size for age (scale for brushes)
    this.age.range([0, this.width - this.paddingUpperLeft]).nice();

    // Resize SVG DOM element
    this.svg
      .attr(
        'height',
        this.padding.top + this.height2 + this.yGutter + this.height + this.padding.bottom + this.sourceHeight
      )
      .attr('width', this.padding.left + this.width + this.padding.right);

    // Move the brushes if a range was selected and save the new extent
    if (options.range && typeof options.range === 'string') {
      extent = JSON.parse(options.range);
      gBrushLarge
        .transition()
        .duration(this.duration)
        .call(brushLarge.move, extent.map(this.age));
      gBrushSmall
        .transition()
        .duration(this.duration)
        .call(brushSmall.move, extent.map(this.age));
    }

    // Find the larges accumulated number within the selected range
    const maxAccumulated = this.getMaxAccumulated();

    // Find the largest single age to scale y axis behind brush within the selected range
    const max = this.getMax();

    // Set axis and scales based on these max values (for the bars()
    this.y
      .domain([0, max])
      .range([this.height2, 0])
      .nice();
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
          .tickFormat(d => this.format(d, this.method, true))
      );
    this.upperXAxis
      .transition()
      .duration(this.duration)
      .call(
        d3
          .axisBottom(this.age)
          .ticks((this.width - this.paddingUpperLeft) / 100)
          .tickFormat(d => d + ' år')
      );
    this.lowerXAxis
      .transition()
      .duration(this.duration)
      .call(
        d3
          .axisTop(this.x)
          .ticks((this.width - this.paddingLowerLeft) / 70)
          .tickFormat(d => this.format(d, this.method, true))
      );

    // Call brush method on resize, because it handles stuff
    // like moving the brush overlays and brush handles.
    if (options.event === 'resize') {
      this.brushed(this);
    }

    // Trigger re-draws of rows (bars) and lines
    // this.setBrushes();
    this.drawRows();
    this.drawLines();
    this.drawSource(
      'Statistisk sentralbyrå (test)',
      this.padding.top + this.height2 + this.yGutter + this.height + this.padding.bottom + this.sourceHeight
    );
    this.drawTable();
  };

  /**
   * @param  {this} self -
   *
   * Needs access to the object's 'this' to read from this.render etc
   * and to manipulate DOM elements stored in the template's properties.
   */
  this.brushed = function(self) {
    let s; // Holds the pixel values for where brushes should be rendered

    // Find the pixel values for where brushes should be rendered.
    // If no d3.event, then it must be a 'resize' event, and
    // therefore the brush values (ages) should remain the same
    // but on different pixel values.
    // If there's brush event, we get the selection here
    // and saves the extent (years) to the global variable.
    if (!d3.event) {
      return;
      s = extent.map(self.age);
    } else {
      s = d3.event.selection || self.age.range();
      extent = s.map(val => Math.round(self.age.invert(val)));
    }

    // Brushes need to be called from their parent group ('g')
    gBrushLarge.call(brushLarge);
    gBrushSmall.call(brushSmall);

    // If event.selection equals 'null', the user has clicked the brush
    // area, and then we set the selection to this.age's range (all ages).
    // This to counteract D3's default behavior of hiding the brush
    // selection.
    if (d3.event && d3.event.selection === null) {
      gBrushSmall
        .transition()
        .duration(this.duration)
        .call(brushSmall.move, self.age.range());
      gBrushLarge
        .transition()
        .duration(this.duration)
        .call(brushLarge.move, self.age.range());
    }

    // Resize and move both selections to new location
    d3.selectAll('rect.selection')
      .attr('x', s[0])
      .attr('opacity', 1)
      .attr('width', s[1] - s[0]);

    // Move invisible handles
    d3.selectAll('.handle--e')
      .attr('width', 21)
      .attr('x', s[1]);
    d3.selectAll('.handle--w')
      .attr('width', 21)
      .attr('x', s[0] - 21);

    // Move visible handles
    self.handle.attr('transform', d => (d.type === 'e' ? `translate(${s[1]}, -9)` : `translate(${s[0] - 21}, -9)`));

    // Trigger a new render to update the bars, values and scales
    self.render(self.data, { method: self.method });
  };

  this.line = d3
    .line()
    .curve(d3.curveBasis)
    .x((d, i) => this.age(i))
    .y(d => this.y(d[this.method]));

  const brushLarge = d3.brushX().on('brush end', () => {
    this.brushed(this);
  });
  const brushSmall = d3.brushX().on('brush end', () => {
    this.brushed(this);
  });

  // Draws the handle icons. Triggered from this.created()
  this.drawHandles = function() {
    this.handle = gBrushSmall
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
      .attr('d', d =>
        d.type === 'e'
          ? 'M0 0h11c6 0 10 4 10 10v17c0 6-4 10-10 10H0V0z'
          : 'M21 0H10C4 0 0 4 0 10v17c0 6 4 10 10 10h11V0z'
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
  };

  // Creates the styled age selector as normal HTML
  // as sibling element to the SVG.
  this.createAgeSelector = function() {
    const parent = d3.select(this.svg.node().parentNode.parentNode);
    this.dropDownParent = parent
      .insert('div')
      .attr('class', 'graph__dropdown')
      .attr('aria-hidden', true);

    this.dropDownParent
      .insert('label')
      .attr('for', 'age_selector')
      .attr('class', 'graph__dropdown__label')
      .html('Velg segment');

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
      .attr('disabled', d => d.disabled)
      .attr('value', d => d.range)
      .text(d => d.label);

    // Add eventlistener to the selector, and capture the value
    // and pass it on when re-rendering the chart
    selectElement.on('input', (d, i, j) => {
      this.render(this.data, { method: this.method, range: j[i].value });
    });
  };

  // Runs once after initialization. Creates elements that are
  // unique to this template
  this.created = function() {
    this.createAgeSelector();

    this.upper = this.canvas.append('g').attr('class', 'upper');
    this.middle = this.canvas
      .append('g')
      .attr('class', 'middle')
      .attr('transform', `translate(0, ${this.height2 + 40})`);
    this.lower = this.canvas.append('g').attr('class', 'lower');

    this.lower
      .append('text')
      .attr('class', 'xAxis-title')
      .attr('font-size', '1em')
      .attr('font-weight', 500)
      .attr('fill', color.purple)
      .attr('transform', `translate(${this.paddingLowerLeft}, ${-32})`);

    brushLarge.extent([[0, 0], [this.width - this.paddingUpperLeft, this.height2]]);
    brushSmall.extent([[0, 0], [this.width - this.paddingUpperLeft, 19]]);

    gBrushLarge = this.upper
      .append('g')
      .attr('class', 'brush')
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`)
      .call(brushLarge);

    gBrushLarge
      .select('.selection')
      .attr('fill', color.yellow)
      .attr('stroke', color.yellow)
      .attr('stroke-width', 2)
      .attr('stroke-opacity', 1)
      .attr('fill-opacity', 0.15);

    gBrushSmall = this.middle
      .append('g')
      .attr('class', 'brush')
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`)
      .call(brushSmall);

    gBrushSmall
      .select('.selection')
      .attr('fill', color.yellow)
      .attr('fill-opacity', 1);
    gBrushSmall
      .select('.overlay')
      .attr('stroke', color.purple)
      .attr('rx', 6);

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

    this.drawHandles();

    gBrushLarge
      .transition()
      .duration(this.duration)
      .call(brushLarge.move, [0, 50].map(this.age));
    gBrushSmall
      .transition()
      .duration(this.duration)
      .call(brushSmall.move, [0, 50].map(this.age));
  };

  this.drawTable = function() {
    const thead = this.table.select('thead');
    const tbody = this.table.select('tbody');

    thead.selectAll('*').remove();
    tbody.selectAll('*').remove();

    const hrow = thead.append('tr');

    hrow
      .selectAll('th')
      .data(() => [
        'Geografi',
        ...ageRanges.map(d => {
          let str = '';
          str += this.method === 'ratio' ? 'Andel ' : 'Antall ';
          str += d.label;
          str += this.method === 'ratio' ? ' (%)' : '';
          return str;
        }),
      ])
      .join('th')
      .attr('scope', 'col')
      .text(d => d);

    const rows = tbody
      .selectAll('tr')
      .data(this.data.data)
      .join('tr');

    // Geography cells
    rows
      .selectAll('th')
      .data(d => [d.geography])
      .join('th')
      .attr('scope', 'row')
      .text(d => d);

    // Value cells
    rows
      .selectAll('td')
      .data(d => {
        return ageRanges
          .filter(d => !d.disabled)
          .map(age => {
            const range = JSON.parse(age.range);
            let sum = 0;
            for (let i = range[0]; i <= range[1]; i++) {
              sum += d.values[i][this.method];
            }
            return sum;
          });
      })
      .join('td')
      .text(d => this.format(d, this.method, false, true));
  };

  // Draws/updates rows content. Triggered each render
  this.drawRows = function() {
    const rows = this.lower
      .selectAll('g.row')
      .data(this.data.data, d => d.geography)
      .join(enter => {
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
        g.append('rect')
          .attr('class', 'bar')
          .attr('height', this.barHeight);
        g.append('rect')
          .attr('class', 'divider')
          .attr('fill', color.purple)
          .attr('width', this.width)
          .attr('height', 1)
          .attr('y', this.rowHeight);
        return g;
      });

    rows.select('rect.rowFill').attr('width', this.width);
    rows.select('text.geography').attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));
    rows.select('rect.rowFill').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.05 : 0));
    rows.select('rect.divider').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2));
    rows
      .transition()
      .duration(this.duration * 2)
      .delay(this.duration)
      .attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
    rows.select('text.geography').text(d => d.geography);
    rows.select('text.value').text(district => {
      const sum = d3.sum(district.values.filter((val, i) => i >= extent[0] && i <= extent[1]).map(d => d[this.method]));

      return this.method === 'ratio' ? this.format(sum, this.method) : d3.format(',d')(sum);
    });

    rows.select('rect.rowFill').attr('width', this.padding.left + this.width + this.padding.right);
    rows.select('rect.divider').attr('width', this.padding.left + this.width + this.padding.right);

    rows
      .select('rect.bar')
      .transition()
      .duration(this.duration)
      .attr('width', district => {
        if (this.method === 'value' && (district.avgRow || district.totalRow)) {
          return 0;
        }
        return this.x(
          d3.sum(district.values.filter((val, i) => i >= extent[0] && i <= extent[1]).map(d => d[this.method]))
        );
      })
      .attr('x', this.paddingLowerLeft)
      .attr('y', (this.rowHeight - this.barHeight) / 2 + 1)
      .attr('fill', d => {
        return d.totalRow || d.avgRow ? color.purple : color.blue;
      });

    rows
      .select('rect.bar')
      .on('mousemove', d => {
        const sum = d3.sum(d.values.filter((val, i) => i >= extent[0] && i <= extent[1]).map(d => d.value));
        this.showTooltip(sum, d3.event);
      })
      .on('mouseleave', () => {
        this.hideTooltip();
      });

    this.lower.select('text.xAxis-title').text(() => {
      if (this.method === 'ratio' && extent[1] - extent[0] >= 1) {
        return `Andel av befolkningen mellom ${extent[0]} og ${extent[1]} år`;
      } else if (this.method === 'ratio' && extent[1] - extent[0] === 0) {
        return `Andel av befolkningen som er ${extent[0]} år`;
      } else if (this.method !== 'ratio' && extent[1] - extent[0] >= 1) {
        return `Størrelse av befolkningen mellom ${extent[0]} og ${extent[1]} år`;
      } else if (this.method !== 'ratio' && extent[1] - extent[0] === 0) {
        return `Størrelse av befolkningen på ${extent[0]} år`;
      }
    });
  };

  // Draws/updates lines in the line chart. Triggered each render
  this.drawLines = function() {
    // Select lines
    let lines = this.upper
      .selectAll('path.line')
      .data(this.data.data.filter(d => (this.method === 'ratio' ? d : !d.avgRow && !d.totalRow)));
    const linesE = lines
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`)
      .attr('opacity', 0);

    lines
      .exit()
      .attr('opacity', 0)
      .remove();
    lines = lines.merge(linesE);

    lines
      .attr('opacity', 1)
      .attr('d', d => this.line(d.values))
      .attr('stroke-width', d => (d.avgRow || d.totalRow ? 3 : 2))
      .attr('stroke', d => (d.avgRow || d.totalRow ? color.purple : color.blue))
      .attr('stroke-opacity', d => (d.avgRow || d.totalRow ? 1 : 0.5))
      .style('stroke-dasharray', d => (d.totalRow && this.method === 'ratio' ? '4,3' : false));
  };

  // Finds the larges accumulated number within the selected range
  this.getMaxAccumulated = function() {
    return (
      d3.max(
        this.data.data
          .filter(district => (this.method === 'ratio' ? district : !district.totalRow && !district.avgRow))
          .map(district =>
            d3.sum(district.values.filter((val, i) => i >= extent[0] && i <= extent[1]).map(val => val[this.method]))
          )
      ) * 1.05
    );
  };

  // Finds the largest single age to scale y axis behind brush within the selected range
  this.getMax = function() {
    return (
      d3.max(
        this.data.data
          .filter(district => (this.method === 'ratio' ? district : !district.totalRow && !district.avgRow))
          .map(district => d3.max(district.values.map(val => val[this.method])))
      ) * 1.05
    );
  };

  this.init(svg);
}

export default Template;
