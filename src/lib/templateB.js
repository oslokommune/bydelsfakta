import { Base_Template, util } from './baseTemplate';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding.top = 50;
  this.padding.left = 60;
  this.padding.right = 220;
  this.height = 300;
  this.width = 700;

  const strokeWidth = this.strokeWidth;
  const strokeWidthHighlight = this.strokeWidthHighlight;

  this.line = d3
    .line()
    .x(d => this.x(this.parseDate(d.date)))
    .y(d => this.y(d[this.method]));

  this.getTickFormat = function() {
    let format;
    let range = this.y.max - this.y.min;

    if (this.method === 'value') {
      return d3.format('');
    }

    if (range < 0.01) {
      format = d3.format('.2%');
    } else if (range < 0.04) {
      format = d3.format('.1%');
    } else {
      format = d3.format('.0%');
    }
    return format;
  };

  this.drawLabels = function() {
    let labels = this.canvas.selectAll('text.label').data(this.data.data.filter(row => row.avgRow || row.totalRow));
    let labelsE = labels
      .enter()
      .append('text')
      .attr('class', 'label');

    labels.exit().remove();
    labels = labels.merge(labelsE);

    labelsE.append('title');

    labels
      .text(d => util.truncate(d.geography, this.padding.right - 30))
      .attr('x', this.width + 10)
      .attr('font-weight', 'bold')
      .attr('y', d => {
        return this.y(d.values[d.values.length - 1][this.method]) + 5;
      });

    labels
      .selectAll('title')
      .data(d => [d.geography])
      .enter()
      .append('title')
      .html(d => d);
  };

  this.createInfoBoxElements = function() {
    // Create infobox placeholder
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
      .attr('opacity', 1);

    this.infoboxHead
      .select('rect.background')
      .attr('height', 30)
      .attr('width', this.padding.right - 22)
      .attr('x', 11)
      .attr('fill', util.color.purple);
    this.infoboxTitle
      .attr('y', 20)
      .attr('x', 21)
      .attr('font-size', 14)
      .attr('font-weight', 700)
      .text(util.truncate(geography, this.padding.right - 55, 14, 700))
      .attr('fill', util.color.blue);

    this.infoboxBody
      .select('rect.background')
      .attr('height', this.height - 40)
      .attr('y', 20)
      .attr('x', 4)
      .attr('width', this.padding.right - 8)
      .attr('fill', util.color.light_yellow)
      .attr('stroke', util.color.purple);

    this.infoboxContent.attr('transform', 'translate(20, 60)');
    this.infoboxHeading
      .attr('font-size', 12)
      .attr('font-weight', 700)
      .attr('text-transform', 'uppercase')
      .attr('fill', util.color.purple)
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

  this.drawLines = function() {
    let row = this.canvas.selectAll('path.row').data(this.data.data);
    let rowE = row
      .enter()
      .append('path')
      .attr('class', 'row');
    row.exit().remove();
    row = row.merge(rowE);

    row
      .attr('d', d => this.line(d.values))
      .attr('stroke', d => {
        if (d.totalRow) return util.color.blue;
        if (d.avgRow) return util.color.red;
        return '#cccccc';
      })
      .attr('stroke-width', 3)
      .attr('fill', 'none');

    row.on('mouseover', function() {
      d3.select(this).attr('stroke-width', strokeWidthHighlight);
    });

    row.on('mouseleave', function() {
      d3.select(this).attr('stroke-width', strokeWidth);
    });

    row.on('click', (d, i) => {
      if (i === this.highlight) {
        this.render(this.data, this.method, -1);
      } else {
        this.render(this.data, this.method, i);
      }
    });
  };

  this.setScales = function() {
    this.y.max = d3.max(this.data.data.map(row => d3.max(row.values.map(d => d[this.method])))) * 1.1;
    this.y.min = d3.min(this.data.data.map(row => d3.min(row.values.map(d => d[this.method])))) / 1.2;

    this.x = d3
      .scaleTime()
      .domain([
        d3.timeMonth.offset(this.parseDate(this.data.data[0].values[0].date), -1),
        this.parseDate(this.data.data[0].values[this.data.data[0].values.length - 1].date),
      ])
      .range([0, this.width]);

    this.y = d3
      .scaleLinear()
      .domain([this.y.min, this.y.max])
      .range([this.height, 0]);
  };

  this.drawAxis = function() {
    let formatYTicks = this.getTickFormat();
    this.yAxis.call(d3.axisLeft(this.y).tickFormat(formatYTicks));
    this.xAxis.call(d3.axisBottom(this.x)).attr('transform', `translate(0, ${this.height})`);
  };

  this.created = function() {
    this.createInfoBoxElements();
  };

  this.render = function(data, method = 'value', highlight = -1) {
    if (!data || !data.data) return;
    this.data = data;
    this.method = method;
    this.heading.text(this.data.meta.heading);
    this.highlight = highlight;

    this.width = this.parentWidth() - this.padding.left - this.padding.right;
    this.svg
      .transition()
      .attr('height', this.padding.top + this.height + this.padding.bottom)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.setScales();
    this.drawLines();
    this.drawAxis();
    this.drawLabels();
    this.drawInfobox();
  };

  this.init(svg);
}

export default Template;
