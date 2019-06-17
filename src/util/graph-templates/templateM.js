/**
 * Template for comparing 8 different variables
 */

import Base_Template from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import d3 from '@/assets/d3';
// import { showTooltipOver, showTooltipMove, hideTooltip } from '../tooltip';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'k';

  this.padding = { top: 130, left: 60, right: 20, bottom: 50 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;
  this.mobileWidth = 520;

  this.height1 = 260;
  this.height2 = 160;
  this.gapY = 50;
  this.height = this.height1 + this.gapY + this.height2;

  this.upper = null;
  this.lower = null;
  this.radio = null;
  this.x = d3.scaleBand().paddingOuter(0.15);
  this.y1 = d3.scaleLinear().range([this.height1, 0]);
  this.y2 = d3.scaleLinear().range([this.height2, 0]);

  const tabData = [
    { label: 'Totalt', value: 'totalt' },
    { label: 'Innvandrer', value: 'Innvandrer' },
    { label: 'Norskfødt', value: 'Norskfødt' },
    { label: 'Øvrige', value: 'Øvrige' },
  ];

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;
    this.filteredData = this.data.data[0];

    this.width = d3.max([this.width, 360]);
    this.svg
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.width + this.padding.left + this.padding.right);

    this.setScales();
    this.drawUpper();
    this.drawLower();
    this.drawTabs();
  };

  this.created = function() {
    this.radio = this.svg
      .append('g')
      .attr('class', 'radio')
      .attr('transform', 'translate(5, 50)');
    this.upper = this.canvas.append('g').attr('class', 'upper');
    this.lower = this.canvas
      .append('g')
      .attr('class', 'lower')
      .attr('transform', `translate(0, ${this.height1 + this.gapY})`);

    this.upper
      .append('g')
      .attr('class', 'axis axisX')
      .attr('transform', `translate(0, ${this.height1})`);
    this.upper.append('g').attr('class', 'axis axisY');

    this.upper
      .append('path')
      .attr('class', 'immigration')
      .attr('fill', 'none')
      .attr('stroke', color.purple)
      .attr('stroke-width', 4);
    this.upper
      .append('path')
      .attr('class', 'emigration')
      .attr('fill', 'none')
      .attr('stroke', color.red)
      .attr('stroke-width', 4);

    this.lower.append('g').attr('class', 'axis axisX');
    this.lower.append('g').attr('class', 'axis axisY');
    this.lower.append('g').attr('class', 'bars');
    this.lower.append('rect').attr('class', 'zero');
  };

  this.drawUpper = function() {
    const line = d3
      .line()
      .y(d => this.y1(d[tabData[this.series].value]))
      .x(d => this.x.bandwidth() / 2 + this.x(d.alder.join('–')));
    // .curve(d3.curveMonotoneX);

    this.upper
      .select('path.immigration')
      .data([this.filteredData.immigration])
      .transition()
      .attr('d', line);

    this.upper
      .select('path.emigration')
      .data([this.filteredData.emigration])
      .transition()
      .attr('d', line);
  };

  this.drawLower = function() {
    const barData = [...new Array(this.filteredData.immigration.length)].map((d, i) => {
      return {
        age: this.filteredData.immigration[i].alder.join('–'),
        diff:
          this.filteredData.immigration[i][tabData[this.series].value] -
          this.filteredData.emigration[i][tabData[this.series].value],
      };
    });

    this.lower
      .select('.bars')
      .selectAll('rect')
      .data(barData)
      .join('rect')
      .attr('x', d => this.x(d.age))
      .attr('stroke', d => (d.diff <= 0 ? color.red : color.purple))
      .attr('fill-opacity', 0.6)
      .attr('width', this.x.bandwidth())
      .transition()
      .attr('fill', d => (d.diff <= 0 ? color.red : color.purple))
      .attr('height', d => this.y2(0) - this.y2(Math.abs(d.diff)))
      .attr('y', d => (d.diff <= 0 ? this.y2(0) + 1 : this.y2(d.diff)));

    this.lower
      .select('.zero')
      .attr('height', 1)
      .attr('width', this.width)
      .transition()
      .attr('y', this.y2(0));

    this.lower.select('.axisX').attr('transform', `translate(0, ${this.height2})`);
  };

  // Updates the tabs. Highlights the active series
  this.drawTabs = function() {
    let g = this.radio
      .selectAll('g.tab')
      .data(tabData)
      .join(enter => enterTab(enter))
      .attr('class', 'tab');

    g.exit().remove();

    const rowCount = this.isMobileView ? 3 : 2;
    const gapX = 36;
    const gapY = 24;
    const radio = g.select('g.radio');
    const inner = radio.select('.inner');
    const label = g.select('.label');
    const bg = g.select('.bg');
    const maxWidth = d3.max(tabData, d => util.getTextWidth(d.label)) + gapX;

    g.attr('transform', (d, i) => {
      const col = Math.floor(i / rowCount);
      const row = i % rowCount;
      return `translate(${col * maxWidth}, ${row * (gapY + 3)})`;
    });

    bg.attr('fill', 'white')
      .attr('height', gapX)
      .attr('width', maxWidth)
      .attr('y', -gapX / 2);

    radio.attr('transform', 'translate(5, 0)');
    label.attr('transform', 'translate(16, 5)').text(d => d.label);

    inner.attr('transform', (d, i) => {
      return `scale(${i === this.series ? 1 : 0})`;
    });

    g.on('click keyup', (d, i) => {
      if (i === this.series) return;
      if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
      this.render(this.data, { method: this.method, series: i });
    })
      .attr('tabindex', 0)
      .style('cursor', 'pointer');

    function enterTab(enter) {
      const g = enter.append('g').attr('class', 'tab');

      g.append('rect')
        .classed('bg', true)
        .attr('height', 20);
      g.append('text').classed('label', true);
      const radio = g.append('g').classed('radio', true);

      radio
        .append('circle')
        .classed('outer', true)
        .attr('r', 6)
        .attr('stroke', color.purple)
        .attr('stroke-width', 1)
        .attr('fill', 'none');
      radio
        .append('circle')
        .classed('inner', true)
        .attr('r', 4)
        .attr('fill', color.purple);

      return g;
    }
  };
  this.setScales = function() {
    const ages = this.filteredData.immigration.map(d => d.alder.join('–'));

    const max1 = d3.max([
      d3.max(this.filteredData.immigration.map(d => d[tabData[this.series].value])),
      d3.max(this.filteredData.emigration.map(d => d[tabData[this.series].value])),
    ]);

    const extent2 = d3.extent(
      [...new Array(this.filteredData.immigration.length)].map((d, i) => {
        return (
          this.filteredData.immigration[i][tabData[this.series].value] -
          this.filteredData.emigration[i][tabData[this.series].value]
        );
      })
    );

    this.x.domain(ages).range([0, this.width]);
    this.y1.domain([0, max1]).nice();
    this.y2.domain(extent2).nice();
    this.upper
      .select('g.axisX')
      .transition()
      .call(d3.axisBottom(this.x));
    this.upper
      .select('g.axisY')
      .transition()
      .call(d3.axisLeft(this.y1));
    this.lower
      .select('g.axisX')
      .transition()
      .call(d3.axisBottom(this.x));
    this.lower
      .select('g.axisY')
      .transition()
      .call(d3.axisLeft(this.y2));
  };

  this.init(svg);
}

export default Template;
