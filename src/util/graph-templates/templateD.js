/**
 * Template for brushable bar chart for age distributions.
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import color from './colors';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding = { top: 50, right: 20, bottom: 1, left: 0 };
  this.height = 0; // calculated on render. Height of the lower part
  this.height2 = 100; // height of the upper chart
  this.width = 1000;
  this.paddingUpperLeft = 160; // padding left of the upper chart
  this.paddingLowerLeft = 300; // padding left of the lower chart
  this.yGutter = 130; // space between upper and lower charts
  this.y = d3.scaleLinear();
  this.handle;

  let extent = [0, 119];
  let gBrushSmall, gBrushLarge;

  this.age = d3.scaleLinear().domain(extent);

  let NO = d3.formatDefaultLocale({
    decimal: ',',
    thousands: '',
    grouping: [3],
    currency: ['', 'NOK'],
  });
  const formatPercent = NO.format('.1%');
  const formatFloat = NO.format(',.0f');

  this.render = function(data, options) {
    if (!this.commonRender(data, options)) return;

    // Set sizes for brush objects
    brushLarge.extent([[0, 0], [this.width - this.paddingUpperLeft, this.height2]]);
    brushSmall.extent([[0, 0], [this.width - this.paddingUpperLeft, 19]]);

    // Set size for age (scale for brushes)
    this.age.range([0, this.width - this.paddingUpperLeft]);

    // Resize SVG DOM element
    this.svg
      .attr(
        'height',
        this.padding.top + this.height2 + this.yGutter + this.height + this.padding.bottom + this.sourceHeight
      )
      .attr('width', this.padding.left + this.width + this.padding.right);

    // Move the brushes if a range was selected and save the new extent
    if (options.range) {
      extent = JSON.parse(options.range);
      gBrushLarge.transition().call(brushLarge.move, extent.map(this.age));
      gBrushSmall.transition().call(brushSmall.move, extent.map(this.age));
    }

    // Find the larges accumulated number within the selected range
    let maxAccumulated = this.getMaxAccumulated();

    // Find the largest single age to scale y axis behind brush within the selected range
    let max = this.getMax();

    // Set axis and scales based on these max values (for the bars()
    this.y.domain([0, max]).range([this.height2, 0]);
    this.x.domain([0, maxAccumulated]).range([0, this.width - this.paddingLowerLeft]);
    this.upperYAxis.transition().call(
      d3
        .axisLeft(this.y)
        .ticks(4)
        .tickFormat(d => {
          if (this.method == 'ratio') {
            return formatPercent(d);
          } else {
            return formatFloat(d);
          }
        })
    );
    this.upperXAxis.transition().call(
      d3
        .axisBottom(this.age)
        .ticks((this.width - this.paddingUpperLeft) / 100)
        .tickFormat(d => d + ' år')
    );
    this.lowerXAxis.transition().call(
      d3
        .axisTop(this.x)
        .tickFormat(d => {
          if (this.method == 'ratio') {
            return formatPercent(d);
          } else {
            return formatFloat(d);
          }
        })
        .ticks((this.width - this.paddingLowerLeft) / 70)
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
    this.drawSource('Statistisk sentralbyrå (test)');
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
      gBrushSmall.transition().call(brushSmall.move, self.age.range());
      gBrushLarge.transition().call(brushLarge.move, self.age.range());
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
      .attr('d', d => {
        return d.type === 'e'
          ? 'M0 0h11c6 0 10 4 10 10v17c0 6-4 10-10 10H0V0z'
          : 'M21 0H10C4 0 0 4 0 10v17c0 6 4 10 10 10h11V0z';
      });

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

  // Runs once after initialization. Creates elements that are
  // unique to this template
  this.created = function() {
    this.upper = this.canvas.append('g').attr('class', 'upper');
    this.middle = this.canvas
      .append('g')
      .attr('class', 'middle')
      .attr('transform', `translate(0, ${this.height2 + 40})`);
    this.lower = this.canvas
      .append('g')
      .attr('class', 'lower')
      .attr('transform', `translate(0, ${this.height2 + this.yGutter})`);

    this.lower
      .append('text')
      .attr('class', 'xAxis-title')
      .attr('font-size', 12)
      .attr('font-weight', 700)
      .attr('fill', color.purple)
      .attr('transform', `translate(${this.paddingLowerLeft}, ${-28})`);

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

    gBrushLarge.transition().call(brushLarge.move, [0, 50].map(this.age));
    gBrushSmall.transition().call(brushSmall.move, [0, 50].map(this.age));
  };

  // Draws/updates rows content. Triggered each render
  this.drawRows = function() {
    let rows = this.lower.selectAll('g.row').data(this.data.data);
    let rowsE = rows
      .enter()
      .append('g')
      .attr('class', 'row');
    rows.exit().remove();
    rows = rows.merge(rowsE);

    rowsE
      .append('rect')
      .attr('class', 'rowFill')
      .attr('fill', color.purple)
      .attr('height', this.rowHeight)
      .attr('width', this.width);
    rowsE
      .append('text')
      .attr('class', 'geography')
      .attr('fill', color.purple)
      .attr('x', 10)
      .attr('y', this.rowHeight / 2 + 7);
    rowsE
      .append('text')
      .attr('class', 'value')
      .attr('y', this.rowHeight / 2 + 7)
      .attr('fill', color.purple)
      .attr('x', this.paddingLowerLeft - 40)
      .attr('text-anchor', 'end');
    rowsE
      .append('rect')
      .attr('class', 'bar')
      .attr('height', this.barHeight);

    rowsE
      .append('rect')
      .attr('class', 'divider')
      .attr('fill', color.purple)
      .attr('width', this.width)
      .attr('height', 1)
      .attr('y', this.rowHeight);

    rows.select('rect.rowFill').attr('width', this.width);
    rows.select('text.geography').attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));
    rows.select('rect.rowFill').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.05 : 0));
    rows.select('rect.divider').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2));
    rows.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
    rows.select('text.geography').text(d => d.geography);
    rows.select('text.value').text(bydel => {
      let sum = d3.sum(bydel.values.filter((val, i) => i >= extent[0] && i <= extent[1]).map(d => d[this.method]));

      if (this.method == 'ratio') {
        return formatPercent(sum);
      } else {
        return formatFloat(sum);
      }
    });

    rows.select('rect.rowFill').attr('width', this.padding.left + this.width + this.padding.right);
    rows.select('rect.divider').attr('width', this.padding.left + this.width + this.padding.right);

    rows
      .select('rect.bar')
      .transition()
      .attr('width', bydel => {
        if (this.method == 'value' && (bydel.avgRow || bydel.totalRow)) {
          return 0;
        }
        return this.x(
          d3.sum(bydel.values.filter((val, i) => i >= extent[0] && i <= extent[1]).map(d => d[this.method]))
        );
      })
      .attr('x', this.paddingLowerLeft)
      .attr('y', (this.rowHeight - this.barHeight) / 2 + 1)
      .attr('fill', d => {
        return d.totalRow || d.avgRow ? color.purple : color.blue;
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
    let lines = this.upper.selectAll('path.line').data(
      this.data.data.filter(d => {
        if (this.method == 'ratio') return d;
        return !d.avgRow && !d.totalRow;
      })
    );
    let linesE = lines
      .enter()
      .append('path')
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('transform', `translate(${this.paddingUpperLeft}, 0)`)
      .attr('opacity', 0);

    lines
      .exit()
      .transition()
      .attr('opacity', 0)
      .remove();
    lines = lines.merge(linesE);

    lines
      .transition()
      .attr('opacity', 1)
      .attr('d', d => this.line(d.values))
      .attr('stroke-width', d => (d.avgRow || d.totalRow ? 3 : 2))
      .attr('stroke', d => (d.avgRow || d.totalRow ? color.purple : color.blue))
      .attr('stroke-opacity', d => (d.avgRow || d.totalRow ? 1 : 0.5));
  };

  // Finds the larges accumulated number within the selected range
  this.getMaxAccumulated = function() {
    return (
      d3.max(
        this.data.data
          .filter(bydel => {
            if (this.method == 'ratio') {
              return bydel;
            } else {
              return !bydel.totalRow && !bydel.avgRow;
            }
          })
          .map(bydel =>
            d3.sum(bydel.values.filter((val, i) => i >= extent[0] && i <= extent[1]).map(val => val[this.method]))
          )
      ) * 1.05
    );
  };

  // Finds the largest single age to scale y axis behind brush within the selected range
  this.getMax = function() {
    return (
      d3.max(
        this.data.data
          .filter(bydel => {
            if (this.method == 'ratio') {
              return bydel;
            } else {
              return !bydel.totalRow && !bydel.avgRow;
            }
          })
          .map(bydel => d3.max(bydel.values.map(val => val[this.method])))
      ) * 1.05
    );
  };

  this.init(svg);
}

export default Template;
