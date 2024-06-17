/**
 * Displays net population growth over time as a bar chart,
 * and two smaller line charts to display net immigration
 * and net births.
 */

import d3 from '@/assets/d3';
import { hideTooltip, showTooltipMove, showTooltipOver } from '../tooltip';
import BaseTemplate from './baseTemplate';
import { drawVoronoi } from './graph-helpers';
import { color } from './colors';
import util from './template-utils';

const variations = {
  'population-growth': {
    lineData1: {
      heading: 'Netto innflytting',
      data: (obj) => obj.immigration - obj.emigration || 'N/A',
    },
    lineData2: {
      heading: 'Fødselsoverskudd',
      data: (obj) => obj.births - obj.deaths || 'N/A',
    },
    barData: {
      heading: 'Befolkningsvekst',
      data: (obj) => {
        if (!obj) return 'N/A';

        const netImmigration = obj.immigration - obj.emigration || 'N/A';
        const netBirths = obj.births - obj.deaths || 'N/A';
        const netGrowth =
          typeof netImmigration === 'number' && typeof netBirths === 'number' ? netImmigration + netBirths : 'N/A';

        return netGrowth;
      },
    },
  },
  'births-and-deaths': {
    lineData1: {
      heading: 'Antall fødte',
      data: (obj) => obj.births || 'N/A',
    },
    lineData2: {
      heading: 'Antall døde',
      data: (obj) => obj.deaths || 'N/A',
    },
    barData: {
      heading: 'Fødselsoverskudd',
      data: (obj) => obj.births - obj.deaths || 'N/A',
    },
  },

  migrations: {
    lineData1: {
      heading: 'Antall innflyttere',
      data: (obj) => obj.immigration || 'N/A',
    },
    lineData2: {
      heading: 'Antall utflyttere',
      data: (obj) => obj.emigration || 'N/A',
    },
    barData: {
      heading: 'Netto innflytting',
      data: (obj) => obj.immigration - obj.emigration || 'N/A',
    },
  },
};

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'barsAndLines';

  this.salt = Math.round(Math.random() * 100000).toString();
  this.padding = { top: 80, left: 60, right: 20, bottom: 30 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;
  this.barChartHeight = 230;
  this.lineChartHeight = 85;
  this.gapY = 70;
  this.mobileWidth = 520;

  this.render = function (data, options = {}) {
    if (!this.commonRender(data, options)) return;

    this.filteredData = JSON.parse(JSON.stringify(data.data))
      .filter((row) => row.totalRow || row.avgRow)[0]
      .values[0].map(cleanupData.bind(this));

    this.height = this.barChartHeight + this.gapY + this.lineChartHeight + this.gapY + this.lineChartHeight;
    this.width = d3.max([this.width, this.mobileWidth]);
    this.svg
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.width + this.padding.left + this.padding.right);

    // Set headings for each of the three charts
    this.barChart.select('.group-heading').text(variations[this.variant].barData.heading);
    this.lineChart1.select('.group-heading').text(variations[this.variant].lineData1.heading);
    this.lineChart2.select('.group-heading').text(variations[this.variant].lineData2.heading);

    drawTable.call(this);
    setScales.call(this);
    updateAxis.call(this);

    this.barChart.select('.zero').call(updateZeroLines.bind(this), this.y[0]);

    this.lineChart1.call(updateLineChart.bind(this), {
      scale: this.y[1],
      clipId: `lineData1`,
    });

    this.lineChart2.call(updateLineChart.bind(this), {
      scale: this.y[2],
      clipId: `lineData2`,
    });

    this.barChart.selectAll('rect').call(updateBars.bind(this));
  };

  this.created = function () {
    this.barChart = this.canvas.append('g').attr('class', 'barChart').call(initBarChart.bind(this));

    this.lineChart1 = this.canvas
      .append('g')
      .attr('class', 'lineChart1')
      .call(initLineChart.bind(this), this.barChartHeight + this.gapY, this.lineChartHeight);

    this.lineChart2 = this.canvas
      .append('g')
      .attr('class', 'lineChart2')
      .call(
        initLineChart.bind(this),
        this.barChartHeight + this.gapY + this.lineChartHeight + this.gapY,
        this.lineChartHeight
      );

    this.canvas.selectAll('.group-heading').attr('transform', 'translate(20, -10)');

    this.defs = this.svg.insert('defs');
    this.defs.append('clipPath').attr('id', `lineData1-${this.salt}`).append('rect');
    this.defs.append('clipPath').attr('id', `lineData2-${this.salt}`).append('rect');

    this.lineChart2.append('g').attr('class', 'voronoi');
  };

  this.init(svg);
}

export default Template;

/**
 * Helper function to reduce the data objects.
 * `this.variant` controls which data points should
 * be displayed in each graph section
 */
function cleanupData(obj) {
  if (!Object.keys(variations).includes(this.variant)) {
    throw new Error('Missing or misspelled graph variant');
  }

  const { date } = obj;
  const lineData1 = variations[this.variant].lineData1.data(obj);
  const lineData2 = variations[this.variant].lineData2.data(obj);
  const barData = variations[this.variant].barData.data(obj);

  return { date, barData, lineData1, lineData2 };
}

function initBarChart(selection) {
  selection.append('text').attr('class', 'group-heading');

  selection.append('g').attr('class', 'axis y').append('line').attr('class', 'zero').attr('stroke', 'black');

  selection.append('g').attr('class', 'axis x').attr('transform', `translate(0, ${this.barChartHeight})`);
}

function initLineChart(selection, offsetY, height) {
  selection.attr('transform', `translate(0, ${offsetY})`);

  selection.append('text').attr('class', 'group-heading');
  selection.append('g').attr('class', 'axis y');

  selection.append('line').attr('class', 'zero').attr('stroke', 'black');

  selection
    .append('path')
    .attr('class', 'line positive')
    .attr('fill', 'none')
    .attr('stroke', color.purple)
    .attr('stroke-width', 3);

  selection
    .append('path')
    .attr('class', 'line negative')
    .attr('fill', 'none')
    .attr('stroke', color.red)
    .attr('stroke-width', 3);

  selection.append('g').attr('class', 'axis x').attr('transform', `translate(0, ${height})`);

  selection.append('g').attr('class', 'voronoi');
}

function updateZeroLines(selection, scale) {
  selection
    .raise()
    .attr('x1', 0)
    .attr('x2', this.width)
    .transition()
    .attr('y1', scale(0))
    .attr('y2', scale(0))
    .attr('opacity', scale.domain()[0] < 0 ? 0.75 : 0);
}

function setScales() {
  const years = this.filteredData.map((d) => d.date);

  this.y[0] = d3
    .scaleLinear()
    .domain([d3.min([0, ...this.filteredData.map((d) => d.barData)]), d3.max(this.filteredData.map((d) => d.barData))])
    .range([this.barChartHeight, 0])
    .nice();

  this.y[1] = d3
    .scaleLinear()
    .domain(d3.extent(this.filteredData.map((d) => d.lineData1)))
    .range([this.lineChartHeight, 0])
    .nice();

  this.y[2] = d3
    .scaleLinear()
    .domain(d3.extent(this.filteredData.map((d) => d.lineData2)))
    .range([this.lineChartHeight, 0])
    .nice();

  this.x = d3.scaleBand().rangeRound([0, this.width]).domain(years).padding(0.15);
}

function updateAxis() {
  this.barChart
    .select('g.axis.y')
    .transition()
    .call(d3.axisLeft(this.y[0]).tickFormat((d) => this.format(d, 'value', true)));
  this.lineChart1
    .select('g.axis.y')
    .transition()
    .call(
      d3
        .axisLeft(this.y[1])
        .ticks(4)
        .tickFormat((d) => this.format(d, 'value', true))
    );
  this.lineChart2
    .select('g.axis.y')
    .transition()
    .call(
      d3
        .axisLeft(this.y[2])
        .ticks(4)
        .tickFormat((d) => this.format(d, 'value', true))
    );

  this.barChart.select('g.axis.x').call(d3.axisBottom(this.x));
  this.lineChart1.select('g.axis.x').call(d3.axisBottom(this.x));
  this.lineChart2.select('g.axis.x').call(d3.axisBottom(this.x));
}

function updateClipPaths(selection, scale) {
  selection
    .select('rect')
    .attr('width', this.width)
    .attr('y', scale(0))
    .attr('height', Math.abs(this.lineChartHeight - scale(0)));
}

function updateLineChart(el, opt) {
  const { scale } = opt;
  const { clipId } = opt;

  // Update clip paths
  this.defs.select(`#${clipId}-${this.salt}`).call(updateClipPaths.bind(this), scale);

  // Update lines (and attach clipId)
  el.call(drawLines.bind(this), scale, clipId);

  // Update voronoi for chart
  const flattenData = generateFlattenData.call(this, this.filteredData, scale, clipId);
  const dataAccessor = (d) => d.data.label;
  el.select('.voronoi').call(drawVoronoi.bind(this), flattenData, [this.width, this.lineChartHeight], dataAccessor);

  // Update zero line position
  el.select('.zero').call(updateZeroLines.bind(this), scale);
}

function drawLines(selection, scale, clipId) {
  const lineGenerator = d3
    .line()
    .x((d) => this.x(d.date))
    .y((d) => scale(d[clipId]));

  selection
    .selectAll('.line')
    .data([this.filteredData, this.filteredData])
    .attr('transform', `translate(${this.x.bandwidth() / 2}, 0)`)
    .style('pointer-events', 'none')
    .transition()
    .attr('d', lineGenerator);

  selection.select('path.negative').attr('clip-path', `url(#${clipId}-${this.salt})`);
}

function updateBars(selection) {
  const bars = selection.data(this.filteredData).join('rect');

  bars
    .attr('x', (d) => this.x(d.date))
    .attr('width', this.x.bandwidth())
    .attr('fill-opacity', 1)
    .transition()
    .attr('height', (d) => Math.abs(this.y[0](0) - this.y[0](d.barData)))
    .attr('y', (d) => (d.barData > 0 ? this.y[0](d.barData) : this.y[0](0)))
    .attr('stroke', (d) => (d.barData > 0 ? color.purple : color.red))
    .attr('fill', (d) => (d.barData > 0 ? color.purple : color.red));

  bars.on('mouseenter', (e, d) => {
    showTooltipOver(this.formatDecimal(d.barData));
    showTooltipMove();
  });
  bars.on('mousemove', showTooltipMove);
  bars.on('mouseleave', hideTooltip);
}

function drawTable() {
  // Prepare data for table head
  const tableHead = [
    ['Geografi', ...this.filteredData.map((d) => d.date)],
    this.filteredData.flatMap(() => [
      variations[this.variant].barData.heading,
      variations[this.variant].lineData1.heading,
      variations[this.variant].lineData2.heading,
    ]),
  ];

  // Find all years in dataset
  const years = Array.from(new Set(this.data.data.flatMap((geo) => geo.values[0].flatMap((year) => year.date)))).sort(
    d3.ascending
  );

  // Generate the table body from the raw data
  const tableBody = this.data.data.map((geo) => {
    return {
      key: geo.geography,
      values: years.flatMap((year) => {
        // Find the correct year and push the data to the array
        const yearData = geo.values[0].find((row) => row.date === year);
        if (!yearData) return ['N/A', 'N/A', 'N/A'];

        const barDataValue = variations[this.variant].barData.data(yearData);
        const lineData1Value = variations[this.variant].lineData1.data(yearData);
        const lineData2Value = variations[this.variant].lineData2.data(yearData);

        return [barDataValue, lineData1Value, lineData2Value];
      }),
    };
  });

  util.drawTable.call(this, tableHead, tableBody);
}

function generateFlattenData(data, scale, key) {
  return data.map((row) => {
    return {
      x: this.x(row.date),
      y: scale(row[key]),
      label: `${row[key]}`,
    };
  });
}
