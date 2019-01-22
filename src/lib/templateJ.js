import { Base_Template, util } from './baseTemplate';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding = { top: 90, left: 240, right: 20, bottom: 68 };
  this.height = 0; // set during render
  this.width = 600;
  this.x = d3.scaleLinear();
  this.bars;
  this.legendBox;

  this.colors = d3
    .scaleOrdinal()
    .domain([0, 1, 2, 3])
    .range(['#C57066', '#834B44', '#838296', '#4F4E6A']);

  this.created = function() {
    this.legendBox = this.svg.append('g').attr('class', 'legend');

    this.canvas
      .append('text')
      .attr('class', 'label-min')
      .attr('font-size', 13)
      .attr('y', -40)
      .attr('text-anchor', 'end')
      .text('Trangbodde husstander');

    this.canvas
      .append('text')
      .attr('class', 'label-max')
      .attr('font-size', 13)
      .attr('y', -40)
      .attr('text-anchor', 'start')
      .text('Ikke trangbodde husstander');

    this.bars = this.canvas.append('g').attr('class', 'bars');

    this.canvas
      .append('line')
      .attr('class', 'zero')
      .attr('stroke-width', 1.5)
      .attr('stroke', 'black');
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
    rowsE
      .append('text')
      .attr('class', 'geography')
      .attr('fill', util.color.purple)
      .attr('y', this.rowHeight / 2 + 6)
      .attr('x', -this.padding.left + 10);
  };

  this.drawRows = function() {
    let rows = this.canvas.selectAll('g.row').data(this.data.data);
    let rowsE = rows
      .enter()
      .append('g')
      .attr('class', 'row');
    rows.exit().remove();
    rows = rows.merge(rowsE);

    // Create elements on each row that's created on enter
    this.initRowElements(rowsE);

    // Update row geography, style and position
    rows.select('text.geography').attr('font-weight', d => (d.avgRow || d.totalRow ? 700 : 400));
    rows.select('rect.rowFill').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.05 : 0));
    rows.select('rect.divider').attr('fill-opacity', d => (d.avgRow || d.totalRow ? 0.5 : 0.2));
    rows.attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);
    rows.select('text.geography').text(d => util.truncate(d.geography, this.padding.left));

    let seriesData = d3
      .stack()
      .keys([1, 0, 2, 3])
      .offset(d3.stackOffsetDiverging)(this.data.data.map(bydel => bydel.values));

    let min = d3.min(seriesData.map(serie => d3.min(serie.map(d => d[0])))) * 1.1;
    let max = d3.max(seriesData.map(serie => d3.max(serie.map(d => d[1])))) * 1.1;

    this.x.domain([min, max]).range([0, this.width]);
    this.xAxis.call(d3.axisTop(this.x).tickFormat(d => Math.abs(d) * 100 + '%'));

    let series = this.bars.selectAll('g.series').data(seriesData);
    let seriesE = series
      .enter()
      .append('g')
      .attr('class', 'series');
    series.exit().remove();
    series = series.merge(seriesE);

    series.attr('fill', (d, i) => this.colors(i));

    let bar = series.selectAll('rect').data(d => d);
    let barE = bar.enter().append('rect');
    bar.exit().remove();
    bar = bar.merge(barE);

    bar
      .attr('y', (d, i) => i * this.rowHeight + (this.rowHeight - this.barHeight) / 2)
      .attr('height', this.barHeight)
      .transition()
      .attr('x', d => this.x(d[0]))
      .attr('width', d => this.x(d[1]) - this.x(d[0]));
  };

  this.drawLegend = function() {
    this.legendBox.attr('transform', `translate(0, ${this.height + this.padding.top + this.padding.bottom / 2 - 8})`);

    let group = this.legendBox.selectAll('g.group').data(this.data.meta.series);
    let groupE = group
      .enter()
      .append('g')
      .attr('class', 'group');
    group.exit().remove();
    group = group.merge(groupE);

    groupE
      .append('rect')
      .attr('height', 16)
      .attr('width', 16)
      .attr('rx', 3)
      // Cheap trick to ensure correct colors on the legend
      .attr('fill', (d, i) => {
        if (i === 0) {
          return this.colors(1);
        } else if (i === 1) {
          return this.colors(0);
        } else {
          return this.colors(i);
        }
      });
    groupE.append('text').attr('y', 8);

    group
      .select('text')
      .text(d => d.heading)
      .attr('y', 12)
      .attr('x', 20)
      .attr('font-size', 12);
    group.attr(
      'transform',
      (d, i) => `translate(${i * ((this.width + this.padding.left + this.padding.right) / 4)}, 0)`
    );
  };

  this.render = function(data) {
    if (!this.commonRender(data)) return;

    this.data.data = data.data.map(bydel => {
      bydel.values = bydel.values.map((value, i) => {
        if (value < 0) return value;
        return i < 2 ? value * -1 : value;
      });
      return bydel;
    });

    this.svg
      .transition()
      .attr('height', this.padding.top + this.height + this.padding.bottom)
      .attr('width', this.width + this.padding.left + this.padding.right);

    this.drawRows();
    this.drawLegend();

    this.canvas
      .select('line.zero')
      .attr('y1', 0)
      .attr('y2', this.height)
      .transition()
      .attr('x1', this.x(0))
      .attr('x2', this.x(0));

    this.canvas.select('text.label-min').attr('x', this.x(0) - 15);
    this.canvas.select('text.label-max').attr('x', this.x(0) + 15);
  };

  this.init(svg);
}

export default Template;
