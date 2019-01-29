/**
 * Template for single series multi-line chart.
 *
 * A details box appears when rendered with 'highlight' parameter
 * defined in the options object
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import color from './colors';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding = { top: 50, right: 220, bottom: 1, left: 60 };

  const strokeWidth = this.strokeWidth;
  const strokeWidthHighlight = this.strokeWidthHighlight;

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    this.height = d3.max([300, this.width * 0.5]);

    this.svg
      .transition()
      .duration(this.duration)
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.setScales();
    this.drawLines();
    this.drawAxis();
    this.drawLabels();
    this.drawInfobox();
    this.drawSource('Statistisk sentralbyrå (test)');
  };

  this.created = function() {
    this.createInfoBoxElements();
  };

  // Line generator for converting values to a data string for svg:paths
  this.line = d3
    .line()
    .x(d => this.x(this.parseDate(d.date)))
    .y(d => this.y(d[this.method]));

  // Updates labels on the right hand side
  this.drawLabels = function() {
    // Standard select/enter/update/exit pattern for text labels
    let labels = this.canvas.selectAll('text.label').data(this.data.data);
    let labelsE = labels
      .enter()
      .append('text')
      .attr('class', 'label');
    labels.exit().remove();
    labels = labels.merge(labelsE);

    // Append <title> element inside text to support tooltip in case of truncation
    labelsE.append('title');

    // Update the text string and position.
    // Default opacity is low to allow labels overlapping
    labels
      .text(d => util.truncate(d.geography, this.padding.right - 30))
      .attr('x', this.width + 10)
      .attr('y', d => {
        return this.y(d.values[d.values.length - 1][this.method]) + 5;
      })
      .attr('opacity', 0.4);

    // Update content in the <title> element
    labels
      .selectAll('title')
      .data(d => [d.geography])
      .enter()
      .append('title')
      .html(d => d);
  };

  // Runs once in the created() method and creates DOM elements for the
  // infobox which appears when a series is selected
  this.createInfoBoxElements = function() {
    this.infobox = this.svg.append('g').attr('class', 'infobox');
    this.infoboxBody = this.infobox.append('g').attr('class', 'infobox__body');
    this.infoboxBody.append('rect').attr('class', 'background');
    this.infoboxHead = this.infobox.append('g').attr('class', 'infobox__head');
    this.infoboxHead.append('rect').attr('class', 'background');
    this.infoboxTitle = this.infoboxHead.append('text');
    this.infoboxContent = this.infoboxBody.append('g').attr('class', 'infobox__content');
    this.infoboxHeading = this.infoboxContent.append('text').attr('class', 'infobox__heading');
    this.infoboxContent.append('rect').attr('class', 'infobox__rule');
    this.infoboxTable = this.infoboxContent.append('g').attr('class', 'infobox__table');
  };

  //
  this.drawInfobox = function() {
    if (this.highlight === -1) {
      this.infobox.attr('opacity', 0);
      return;
    }

    let year = d3.timeFormat('%Y');
    let data = this.data.data[this.highlight].values;
    let geography = this.data.data[this.highlight].geography;
    let high = data.reduce((prev, curr) => (prev.value > curr.value ? prev : curr));
    let low = data.reduce((prev, curr) => (prev.value < curr.value ? prev : curr));

    this.infobox
      .attr('transform', `translate(${this.padding.left + this.width}, ${this.padding.top})`)
      .transition()
      .duration(this.duration)
      .attr('opacity', 1);

    this.infoboxHead
      .select('rect.background')
      .attr('height', 30)
      .attr('width', this.padding.right - 22)
      .attr('x', 11)
      .attr('fill', color.purple);
    this.infoboxTitle
      .attr('y', 20)
      .attr('x', 21)
      .attr('font-size', 14)
      .attr('font-weight', 700)
      .text(util.truncate(geography, this.padding.right - 55, 14, 700))
      .attr('fill', color.blue);

    this.infoboxBody
      .select('rect.background')
      .attr('height', this.height - 40)
      .attr('y', 20)
      .attr('x', 4)
      .attr('width', this.padding.right - 8)
      .attr('fill', color.light_yellow)
      .attr('stroke', color.purple);

    this.infoboxContent.attr('transform', 'translate(20, 60)');
    this.infoboxHeading
      .attr('font-size', 12)
      .attr('font-weight', 700)
      .attr('text-transform', 'uppercase')
      .attr('fill', color.purple)
      .text(util.truncate(this.data.meta.heading, this.padding.right - 90, 12, 700).toUpperCase());

    this.infoboxTable.selectAll('*').remove();

    this.infoboxTable
      .append('text')
      .attr('y', 50)
      .text('Utvikling');
    this.infoboxTable
      .append('text')
      .attr('y', 75)
      .text('Utvikling (p.p.)');
    this.infoboxTable
      .append('text')
      .attr('y', 100)
      .text(`Høyest (${year(this.parseDate(high.date))})`);
    this.infoboxTable
      .append('text')
      .attr('y', 125)
      .text(`Lavest (${year(this.parseDate(low.date))})`);

    this.infoboxTable
      .append('text')
      .attr('font-weight', 700)
      .attr('y', 50)
      .attr('x', this.padding.right - 40)
      .attr('text-anchor', 'end')
      .text(Math.round(((data[data.length - 1].value - data[0].value) / data[0].value) * 100) + '%');

    this.infoboxTable
      .append('text')
      .attr('font-weight', 700)
      .attr('y', 75)
      .attr('x', this.padding.right - 40)
      .attr('text-anchor', 'end')
      .text(Math.round((data[data.length - 1].ratio - data[0].ratio) * 10000) / 100);
    this.infoboxTable
      .append('text')
      .attr('font-weight', 700)
      .attr('y', 100)
      .attr('x', this.padding.right - 40)
      .attr('text-anchor', 'end')
      .text(Math.round(high.ratio * 10000) / 100 + '%');
    this.infoboxTable
      .append('text')
      .attr('font-weight', 700)
      .attr('y', 125)
      .attr('x', this.padding.right - 40)
      .attr('text-anchor', 'end')
      .text(Math.round(low.ratio * 10000) / 100 + '%');
  };

  // Updates the shape and style of the lines in the line chart
  this.drawLines = function() {
    // Standard select/enter/update/exit pattern for each line.
    // Each line is a path element
    let row = this.canvas.selectAll('path.row').data(this.data.data);
    let rowE = row
      .enter()
      .append('path')
      .attr('class', 'row');
    row.exit().remove();
    row = row.merge(rowE);

    // Update the shape of the line using the line generator
    // and its style based on the data: total and avg rows get
    // separate styling
    row
      .attr('d', d => this.line(d.values))
      .attr('stroke', (d, i) => {
        if (this.highlight >= 0 && i === this.highlight) return color.yellow;
        if (this.highlight >= 0 && i !== this.highlight) return color.grey;
        if (d.totalRow) return color.blue;
        if (d.avgRow) return color.red;
        return color.grey;
      })
      .attr('stroke-width', 3)
      .attr('fill', 'none');

    // Add interactivity to each line
    row.on('mouseover', (d, i, j) => {
      d3.selectAll(j).attr('opacity', 0.35);
      d3.select(j[i])
        .attr('stroke-width', strokeWidthHighlight)
        .attr('opacity', 1);
      this.canvas.selectAll('text.label').attr('opacity', 0);
      let label = this.canvas.selectAll('text.label').filter(l => l.geography === d.geography);
      label.attr('opacity', 1).attr('font-weight', 'bold');
      label.node().parentElement.append(label.node());
    });

    row.on('mouseleave', (d, i, j) => {
      d3.select(j[i]).attr('stroke-width', strokeWidth);

      d3.selectAll(j).attr('opacity', 1);
      this.canvas
        .selectAll('text.label')
        .attr('opacity', 0.5)
        .attr('font-weight', '400');
    });

    // Support click and keyboard navigation (using tabindex and keyup)
    // to trigger a render() with a highlight argument
    row
      .on('click keyup', (d, i, j) => {
        if (d3.event && d3.event.type === 'click') j[i].blur();
        if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
        if (i === this.highlight) {
          this.render(this.data, { method: this.method, highlight: -1 });
        } else {
          this.render(this.data, { method: this.method, highlight: i });
        }
      })
      .attr('tabindex', 0);
  };

  // Resets the scales based on the provided data on each render
  this.setScales = function() {
    // Find the min and max values and add some padding
    this.y.max = d3.max(this.data.data.map(row => d3.max(row.values.map(d => d[this.method])))) * 1.1;
    this.y.min = d3.min(this.data.data.map(row => d3.min(row.values.map(d => d[this.method])))) / 1.2;

    // Set the xScale (time dimension) range and domain
    this.x = d3
      .scaleTime()
      .domain([
        d3.timeMonth.offset(this.parseDate(this.data.data[0].values[0].date), -1),
        this.parseDate(this.data.data[0].values[this.data.data[0].values.length - 1].date),
      ])
      .range([0, this.width]);

    // Set the y scale based on max and min values
    this.y = d3
      .scaleLinear()
      .domain([this.y.min, this.y.max])
      .range([this.height, 0]);
  };

  // Renders axis based on the updated scales
  this.drawAxis = function() {
    this.yAxis.call(d3.axisLeft(this.y).ticks(this.height / 30));
    this.xAxis.call(d3.axisBottom(this.x).ticks(this.width / 90)).attr('transform', `translate(0, ${this.height})`);
  };

  this.init(svg);
}

export default Template;
