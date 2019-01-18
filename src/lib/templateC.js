import { Base_Template, util } from './baseTemplate';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);

  this.padding.top = 130;
  this.padding.left = 60;
  this.padding.right = 220;
  this.height = 500;
  this.width = 640;

  let line = d3
    .line()
    .x(d => this.x(this.parseDate(d.date)))
    .y(d => this.y(d[this.method]));

  this.created = function() {
    // Create tabs placeholder
    this.tabs = this.svg
      .append('g')
      .attr('class', 'tabs')
      .attr('transform', 'translate(0, 20)');
    this.tabs.append('rect').attr('class', 'rule');

    this.createInfoBoxElements();
  };

  this.getTickFormat = function() {
    let format;
    let range = this.y.max - this.y.min;

    if (this.method === 'value') {
      return d3.format('');
    }
    if (range < 0.001) {
      format = d3.format('.2%');
    } else if (range < 0.005) {
      format = d3.format('.1%');
    } else {
      format = d3.format('.0%');
    }

    return format;
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
    let data = this.data.data[this.highlight].values.filter((d, i) => i === this.series)[0];
    let geography = this.data.data[this.highlight].geography;
    let high = this.data.data.reduce((prev, curr) => (prev.value > curr.value ? prev : curr));
    let low = this.data.data.reduce((prev, curr) => (prev.value < curr.value ? prev : curr));

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
      .text(
        util
          .truncate(
            `${this.data.meta.series[this.series].heading} (${this.data.meta.series[this.series].subheading})`,
            this.padding.right - 90,
            12,
            700
          )
          .toUpperCase()
      );

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

  this.drawTabs = function() {
    this.tabs
      .select('rect.rule')
      .attr('height', 1)
      .attr('width', this.width + this.padding.left + this.padding.right)
      .attr('fill', util.color.purple)
      .attr('opacity', 0.2)
      .attr('y', 40);

    let tab = this.tabs.selectAll('g.tab').data(this.data.meta.series);
    let tabE = tab
      .enter()
      .append('g')
      .attr('class', 'tab');

    tabE
      .append('rect')
      .attr('class', 'bar')
      .attr('height', 4)
      .attr('width', this.tabWidth)
      .attr('y', 37)
      .attr('fill', util.color.blue);

    tabE
      .append('text')
      .attr('class', 'heading')
      .attr('font-size', 16)
      .attr('y', 5);
    tabE
      .append('text')
      .attr('class', 'subHeading')
      .attr('font-size', 12)
      .attr('y', 20);

    tabE
      .append('rect')
      .attr('class', 'tabOverlay')
      .attr('width', this.tabWidth)
      .attr('height', 60)
      .attr('opacity', 0)
      .attr('y', -20);

    tab.exit().remove();
    tab = tab.merge(tabE);

    tab.attr('transform', (d, i) => `translate(${i * (this.tabWidth + this.tabGap)}, 0)`);

    tab
      .select('text.heading')
      .attr('font-weight', (d, i) => (this.series === i ? '500' : '400'))
      .text(d => d.heading);
    tab
      .select('text.subHeading')
      .attr('font-weight', (d, i) => (this.series === i ? '500' : '400'))
      .text(d => d.subheading);

    tab.select('rect.tabOverlay').on('click', (d, i) => {
      this.render(this.data, this.method, i);
    });

    tab.select('rect.bar').attr('opacity', (d, i) => (this.series === i ? 1 : 0));
  };

  this.drawLabels = function() {
    let labelsData = (() => {
      if (this.highlight >= 0) {
        return this.data.data.filter((row, i) => i === this.highlight);
      } else {
        return this.data.data.filter(row => row.avgRow || row.totalRow);
      }
    })();

    let labels = this.canvas.selectAll('text.label').data(labelsData);
    let labelsE = labels
      .enter()
      .append('text')
      .attr('class', 'label');

    labels.exit().remove();
    labels = labels.merge(labelsE);

    labelsE.append('title');

    labels
      .text(d => util.truncate(d.geography, this.padding.right - 30))
      .attr('x', this.width + 5)
      .attr('font-weight', 'bold')
      .transition()
      .attr('y', d => {
        return this.y(d.values[this.series][d.values[this.series].length - 1][this.method]) + 5;
      });

    labels
      .selectAll('title')
      .data(d => [d.geography])
      .enter()
      .append('title')
      .html(d => d);
  };

  this.drawLines = function() {
    const strokeWidth = this.strokeWidth;
    const strokeWidthHighlight = this.strokeWidthHighlight;

    let row = this.canvas.selectAll('path.row').data(this.data.data);
    let rowE = row
      .enter()
      .append('path')
      .attr('class', 'row');
    row.exit().remove();
    row = row.merge(rowE);

    row
      .attr('stroke', (d, i) => {
        if (this.highlight >= 0 && i === this.highlight) return util.color.yellow;
        if (this.highlight >= 0 && i !== this.highlight) return util.color.grey;
        if (d.totalRow) return util.color.blue;
        if (d.avgRow) return util.color.red;
        return util.color.grey;
      })
      .attr('stroke-width', this.strokeWidth)
      .attr('fill', 'none')
      .transition()
      .attr('d', d => line(d.values[this.series]));

    row.on('mouseover', function() {
      d3.select(this).attr('stroke-width', strokeWidthHighlight);
    });

    row.on('mouseleave', function() {
      d3.select(this).attr('stroke-width', strokeWidth);
    });

    row.on('click', (d, i) => {
      if (i === this.highlight) {
        this.render(this.data, this.method, this.series, -1);
      } else {
        this.render(this.data, this.method, this.series, i);
      }
    });
  };

  this.setScales = function() {
    this.y.max = d3.max(this.data.data.map(row => d3.max(row.values[this.series].map(d => d[this.method])))) * 1.05;
    this.y.min = d3.min(this.data.data.map(row => d3.min(row.values[this.series].map(d => d[this.method])))) / 1.05;

    this.x = d3
      .scaleTime()
      .domain([
        this.parseDate(this.data.data[0].values[0][0].date),
        this.parseDate(this.data.data[0].values[this.series][this.data.data[0].values[this.series].length - 1].date),
      ])
      .range([0, this.width]);

    this.y = d3
      .scaleLinear()
      .domain([this.y.min, this.y.max])
      .range([this.height, 0]);
  };

  this.drawAxis = function() {
    let formatYTicks = this.getTickFormat();

    this.yAxis.transition().call(d3.axisLeft(this.y).tickFormat(formatYTicks));
    this.xAxis
      .attr('transform', `translate(0, ${this.height})`)
      .transition()
      .call(d3.axisBottom(this.x));
  };

  this.render = function(data, method = 'ratio', series = 0, highlight = -1) {
    this.highlight = highlight;
    this.data = data;
    this.series = series;
    this.heading.attr('y', 90).text(this.data.meta.heading[this.series]);
    this.method = method;

    this.svg
      .attr('height', this.height + this.padding.top + this.padding.bottom)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.setScales();
    this.drawAxis();
    this.drawLines();
    this.drawTabs();
    this.drawLabels();
    this.drawInfobox();
  };

  this.init(svg);
}

export default Template;
