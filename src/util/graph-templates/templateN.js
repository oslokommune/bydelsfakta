/**
 * Displays net population growth over time as a bar chart,
 * and two smaller line charts to display net immigration
 * and net births.
 */

import d3 from '@/assets/d3';
import { hideTooltip, showTooltipMove, showTooltipOver } from '../tooltip';
import Base_Template from './baseTemplate';
import drawVoronoi from './graph-helpers/voronoiHelpers';
import { color } from './colors';
import util from './template-utils';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'n';

  this.padding = { top: 80, left: 60, right: 20, bottom: 30 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;
  this.height1 = 230;
  this.height2 = 85;
  this.height3 = 85;
  this.gapY = 70;
  this.mobileWidth = 520;
  this.filteredData = [];
  this.y = [];

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    this.filteredData = JSON.parse(JSON.stringify(data.data))
      .filter(row => row.totalRow || row.avgRow)[0]
      .values[0].map(cleanupData.bind(this));

    this.height = this.height1 + this.gapY + this.height2 + this.gapY + this.height3;
    this.width = d3.max([this.width, this.mobileWidth]);
    this.svg
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.width + this.padding.left + this.padding.right);

    this.setScales();
    this.setClips();
    this.drawBars();
    this.drawLines(this.graph2, this.y[1], 'netImmigration', '#clipImmigration');
    this.drawLines(this.graph3, this.y[2], 'netBirths', '#clipBirths');
    drawVoronoi.call(this, this.graph2, this.y[1], 'netImmigration');
    drawVoronoi.call(this, this.graph3, this.y[2], 'netBirths');
    this.drawTable();
  };

  this.created = function() {
    this.graph1 = this.canvas.append('g').attr('class', 'graph1');

    this.graph2 = this.canvas
      .append('g')
      .attr('class', 'graph2')
      .attr('transform', `translate(0, ${this.height1 + this.gapY})`);

    this.graph3 = this.canvas
      .append('g')
      .attr('class', 'graph3')
      .attr('transform', `translate(0, ${this.height1 + this.gapY + this.height2 + this.gapY})`);

    this.graph1
      .append('text')
      .attr('class', 'group-heading')
      .text('Befolkningsvekst');
    this.graph2
      .append('text')
      .attr('class', 'group-heading')
      .text('Netto innflytting');
    this.graph3
      .append('text')
      .attr('class', 'group-heading')
      .text('Fødselsoverskudd');

    this.graph1.append('g').attr('class', 'axis y');
    this.graph2.append('g').attr('class', 'axis y');
    this.graph3.append('g').attr('class', 'axis y');

    this.graph1
      .append('line')
      .attr('class', 'zero')
      .attr('stroke', 'black');
    this.graph2
      .append('line')
      .attr('class', 'zero')
      .attr('stroke', 'black');
    this.graph3
      .append('line')
      .attr('class', 'zero')
      .attr('stroke', 'black');

    this.graph2
      .append('path')
      .attr('class', 'line positive')
      .attr('fill', 'none')
      .attr('stroke', color.purple)
      .attr('stroke-width', 3);

    this.graph2
      .append('path')
      .attr('class', 'line negative')
      .attr('fill', 'none')
      .attr('stroke', color.red)
      .attr('stroke-width', 3);

    this.graph3
      .append('path')
      .attr('class', 'line positive')
      .attr('fill', 'none')
      .attr('stroke', color.purple)
      .attr('stroke-width', 3);

    this.graph3
      .append('path')
      .attr('class', 'line negative')
      .attr('fill', 'none')
      .attr('stroke', color.red)
      .attr('stroke-width', 3);

    this.graph1
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(0, ${this.height1})`);
    this.graph2
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(0, ${this.height2})`);
    this.graph3
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(0, ${this.height3})`);

    this.canvas.selectAll('.group-heading').attr('transform', 'translate(20, -10)');

    this.defs = this.svg.insert('defs');
    this.defs
      .append('clipPath')
      .attr('id', 'clipImmigration')
      .append('rect');
    this.defs
      .append('clipPath')
      .attr('id', 'clipBirths')
      .append('rect');

    this.graph2.append('g').attr('class', 'voronoi');
    this.graph3.append('g').attr('class', 'voronoi');
  };

  this.setScales = function() {
    const years = this.filteredData.map(d => d.date);

    this.y[0] = d3
      .scaleLinear()
      .domain([
        d3.min([0, ...this.filteredData.map(d => d.netGrowth)]),
        d3.max(this.filteredData.map(d => d.netGrowth)),
      ])
      .range([this.height1, 0])
      .nice();

    this.y[1] = d3
      .scaleLinear()
      .domain(d3.extent(this.filteredData.map(d => d.netImmigration)))
      .range([this.height2, 0])
      .nice();

    this.y[2] = d3
      .scaleLinear()
      .domain(d3.extent(this.filteredData.map(d => d.netBirths)))
      .range([this.height3, 0])
      .nice();

    this.x = d3
      .scaleBand()
      .rangeRound([0, this.width])
      .domain(years)
      .padding(0.15);

    this.graph1
      .select('g.axis.y')
      .transition()
      .call(d3.axisLeft(this.y[0]).tickFormat(d => this.format(d, 'value', true)));
    this.graph2
      .select('g.axis.y')
      .transition()
      .call(
        d3
          .axisLeft(this.y[1])
          .ticks(4)
          .tickFormat(d => this.format(d, 'value', true))
      );
    this.graph3
      .select('g.axis.y')
      .transition()
      .call(
        d3
          .axisLeft(this.y[2])
          .ticks(4)
          .tickFormat(d => this.format(d, 'value', true))
      );

    this.graph1.select('g.axis.x').call(d3.axisBottom(this.x));
    this.graph2.select('g.axis.x').call(d3.axisBottom(this.x));
    this.graph3.select('g.axis.x').call(d3.axisBottom(this.x));

    this.graph1
      .select('.zero')
      .raise()
      .attr('x1', 0)
      .attr('x2', this.width)
      .transition()
      .attr('y1', this.y[0](0))
      .attr('y2', this.y[0](0))
      .attr('opacity', this.y[1].domain()[0] < 0 ? 0.75 : 0);

    this.graph2
      .select('.zero')
      .raise()
      .attr('x1', 0)
      .attr('x2', this.width)
      .transition()
      .attr('y1', this.y[1](0))
      .attr('y2', this.y[1](0))
      .attr('opacity', this.y[1].domain()[0] < 0 ? 0.75 : 0);

    this.graph3
      .select('.zero')
      .raise()
      .attr('x1', 0)
      .attr('x2', this.width)
      .transition()
      .attr('y1', this.y[2](0))
      .attr('y2', this.y[2](0))
      .attr('opacity', this.y[2].domain()[0] < 0 ? 0.75 : 0);
  };

  this.setClips = function() {
    this.defs
      .select('#clipImmigration')
      .select('rect')
      .attr('width', this.width)
      .attr('y', this.y[1](0))
      .attr('height', Math.abs(this.height2 - this.y[1](0)));

    this.defs
      .select('#clipBirths')
      .select('rect')
      .attr('width', this.width)
      .attr('y', this.y[2](0))
      .attr('height', Math.abs(this.height3 - this.y[2](0)));
  };

  this.drawBars = function() {
    const bars = this.graph1
      .selectAll('rect')
      .data(this.filteredData)
      .join('rect');

    bars
      .attr('x', d => this.x(d.date))
      .attr('width', this.x.bandwidth())
      .attr('fill-opacity', 0.6)
      .attr('clip-path', 'url(#clip)')
      .transition()
      .attr('height', d => Math.abs(this.y[0](0) - this.y[0](d.netGrowth)))
      .attr('y', d => (d.netGrowth > 0 ? this.y[0](d.netGrowth) : this.y[0](0)))
      .attr('stroke', d => (d.netGrowth > 0 ? color.purple : color.red))
      .attr('fill', d => (d.netGrowth > 0 ? color.purple : color.red));

    bars.on('mouseenter', d => {
      showTooltipOver(this.formatDecimal(d.netGrowth));
      showTooltipMove();
    });

    bars.on('mousemove', showTooltipMove);
    bars.on('mouseleave', hideTooltip);
  };

  this.drawLines = function(container, scale, key, clipPathId) {
    const lineGenerator = d3
      .line()
      .x(d => this.x(d.date))
      .y(d => scale(d[key]));

    const line = container.selectAll('.line').data([this.filteredData, this.filteredData]);

    line
      .attr('transform', `translate(${this.x.bandwidth() / 2}, 0)`)
      .style('pointer-events', 'none')
      .transition()
      .attr('d', lineGenerator);

    container.select('path.negative').attr('clip-path', `url(${clipPathId})`);
  };

  this.drawTable = function() {
    // Prepare data for table head
    const table_head = [
      ['Geografi', ...this.filteredData.map(d => d.date)],
      this.filteredData.flatMap(() => ['Befolkningsvekst', 'Netto innflytting', 'Fødselsoverskudd']),
    ];

    // Find all years in dataset
    const years = Array.from(new Set(this.data.data.flatMap(geo => geo.values[0].flatMap(year => year.date)))).sort(
      d3.ascending
    );

    // Generate the table body from the raw data
    const table_body = this.data.data.map(geo => {
      return {
        key: geo.geography,
        values: years.flatMap(year => {
          // Find the correct year and push the data to the array
          const yearData = geo.values[0].find(row => row.date === year);
          if (!yearData) return ['N/A', 'N/A', 'N/A'];

          const netImmigration = yearData.immigration - yearData.emigration || 'N/A';
          const netBirths = yearData.births - yearData.deaths || 'N/A';
          const netGrowth =
            typeof netImmigration === 'number' && typeof netBirths === 'number' ? netImmigration + netBirths : 'N/A';

          return [netGrowth, netImmigration, netBirths];
        }),
      };
    });

    const tableGenerator = util.drawTable.bind(this);
    tableGenerator(table_head, table_body);
  };

  this.init(svg);
}

export default Template;

// Helper function to reduce the data objects
function cleanupData(obj) {
  console.log(this.variant);

  const date = obj.date;

  const netImmigration = obj.immigration - obj.emigration;
  const netBirths = obj.births - obj.deaths;
  const netGrowth = netImmigration + netBirths;

  return { date, netImmigration, netBirths, netGrowth };
}
