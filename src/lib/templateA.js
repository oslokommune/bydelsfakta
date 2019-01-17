import { Base_Template, util } from './baseTemplate';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding.top = 100;
  this.padding.left = 190;
  this.gutter = 30;
  this.x2 = d3.scaleLinear();
  this.x = [];

  const formatPercent = d3.format('.0%');

  this.render = function(data) {
    this.heading.text(data.meta.heading);

    let maxValues = data.meta.series.map((row, i) => {
      return d3.max(data.data.map(d => d.values[i]));
    });

    this.height = data.data.length * this.rowHeight;
    this.svg.attr('height', this.height + this.padding.top + this.padding.bottom);

    this.x2 = d3
      .scaleLinear()
      .range([0, this.width - (this.gutter * data.meta.series.length - 1)])
      .domain([0, d3.sum(maxValues)]);

    this.x = data.meta.series.map((series, index) => {
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
        .transition()
        .call(
          d3
            .axisBottom(this.x[i])
            .ticks(2)
            .tickFormat(formatPercent)
        );

      util.formatTicksX(d3.select(j[i]));
    });

    this.x2.domain(data.meta.series.map((d, i) => i)).range([0, this.width]);

    this.y
      .domain(data.data.map(d => d.geography))
      .range([0, this.height])
      .padding(0.35);
    this.yAxis.call(d3.axisLeft(this.y));

    util.formatTicksY_leftAlign(this.yAxis, this.padding.left);

    let columns = this.canvas.selectAll('g.column').data(data.meta.series);
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

    columns
      .select('text.colHeading')
      .text(d => d.heading)
      .append('title')
      .html(d => d.heading);
    columns
      .select('text.colSubheading')
      .text((d, i) => util.truncate(d.subheading, this.x[i].range()))
      .append('title')
      .html(d => d.subheading);
    columns
      .select('rect')
      .attr('y', -10)
      .attr('height', this.height + 10)
      .transition()
      .attr('width', (d, i) => {
        if (data.data.filter(d => d.totalRow).length) {
          return this.x[0](data.data.filter(d => d.totalRow)[0].values[i]);
        } else {
          return 0;
        }
      });

    columns
      .select('rect.arrow')
      .attr('y', () => {
        return this.y(data.data.filter(d => d.totalRow)[0].geography) + this.y.bandwidth() / 2;
      })
      .transition()
      .attr('x', (d, i) => {
        return this.x[0](data.data.filter(d => d.totalRow)[0].values[i]);
      });

    let rows = this.canvas.selectAll('g.row').data(data.data);

    let rowsE = rows
      .enter()
      .append('g')
      .attr('class', 'row');
    rows.exit().remove();
    rows = rows.merge(rowsE);

    rows
      .attr('transform', d => {
        if (d.avgRow || d.totalRow) {
          return `translate(0, ${this.y(d.geography) + 5})`;
        } else {
          return `translate(0, ${this.y(d.geography) - 5})`;
        }
      })
      .attr('data-avg', d => d.avgRow)
      .attr('data-total', d => d.totalRow);

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
        return j[0].parentNode.getAttribute('data-total') ? 1 : this.y.bandwidth();
      })
      .attr('y', (d, i, j) => {
        return j[0].parentNode.getAttribute('data-total') ? this.y.bandwidth() / 2 : 0;
      })
      .attr('fill', (d, i, j) => {
        return j[0].parentNode.getAttribute('data-avg') ? util.color.yellow : util.color.purple;
      });

    bars
      .transition()
      .attr('width', d => this.x[0](d))
      .attr('x', (d, i) => this.x[i](0));
  };

  this.init(svg);
}

export default Template;
