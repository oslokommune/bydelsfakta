import { Base_Template, util } from './baseTemplate';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding.top = 50;
  this.padding.left = 60;
  this.padding.right = 120;
  this.height = 300;
  this.width = 300;

  const strokeWidth = this.strokeWidth;
  const strokeWidthHighlight = this.strokeWidthHighlight;

  let line = d3
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
      .text(d => util.truncate(d.geography, this.padding.right - 20))
      .attr('x', this.width + 5)
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

  this.render = function(data, method = 'value') {
    this.data = data;
    this.method = method;

    this.heading.text(data.meta.heading);

    this.method = method;
    this.y.max = d3.max(data.data.map(row => d3.max(row.values.map(d => d[method])))) * 1.05;
    this.y.min = d3.min(data.data.map(row => d3.min(row.values.map(d => d[method])))) / 1.05;

    let formatYTicks = this.getTickFormat();

    this.x = d3
      .scaleTime()
      .domain([
        this.parseDate(data.data[0].values[0].date),
        this.parseDate(data.data[0].values[data.data[0].values.length - 1].date),
      ])
      .range([0, this.width]);

    this.y = d3
      .scaleLinear()
      .domain([this.y.min, this.y.max])
      .range([this.height, 0]);

    this.yAxis.call(d3.axisLeft(this.y).tickFormat(formatYTicks));
    this.xAxis.call(d3.axisBottom(this.x)).attr('transform', `translate(0, ${this.height})`);

    let row = this.canvas.selectAll('path.row').data(data.data);
    let rowE = row
      .enter()
      .append('path')
      .attr('class', 'row');
    row.exit().remove();
    row = row.merge(rowE);

    row
      .attr('d', d => line(d.values))
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

    this.drawLabels();
  };

  this.init(svg);
}

export default Template;
