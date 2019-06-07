/**
 * Template for composite chart with line chart for population
 * histogram for population change per year and a sidebar
 * displaying various metrics for the selected year.
 *
 * Render the chart using the highlight parameter in the options
 * object to change the focused year.
 *
 * This chart has four main parts:
 *  * Sidebar - displays the contents of the selected year
 *  * Upper - displays the population line
 *  * Lower - displays histogram of change per year
 *  * Triggers - transparent overlays to trigger clicks
 *
 */

import Base_Template from './baseTemplate';
import { color } from './colors';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'h';

  this.padding = { top: 40, left: 80, right: 20, bottom: 20 };
  this.height1 = 400;
  this.gapX = 50;
  this.gapY = 70;
  this.height2 = 80;
  this.height = this.height1 + this.gapY + this.height2;
  this.sidebarWidth = 250;
  this.width1 = 750; // width of upper and lower graphs
  this.width = this.width1 + this.gapX + this.sidebarWidth;
  this.x = d3.scaleTime();
  this.y = d3.scaleLinear();
  this.y2 = d3.scaleLinear();

  this.barWidth;
  this.sidebar;
  this.upper;
  this.lower;
  this.triggersContainer;
  this.selected;

  this.line = d3
    .line()
    .x(d => this.x(this.parseYear(d.date)))
    .y(d => this.y(d.population));

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    this.filtered = this.data.data.filter(d => d.avgRow)[0] || this.data.data.filter(d => d.totalRow)[0];

    this.highlight = options.highlight || this.filtered.values[0][this.filtered.values[0].length - 1].date;
    this.selected = this.filtered.values[0].filter(d => d.date === this.highlight)[0];
    this.width1 = this.parentWidth() - this.padding.left - this.padding.right - this.gapX - this.sidebarWidth;
    this.width1 = d3.max([this.width1, 300]);
    this.width = this.width1 + this.gapX + this.sidebarWidth;
    this.height = this.height1 + this.gapY + this.height2;

    this.svg
      .transition()
      .duration(this.duration)
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.padding.left + this.width + this.padding.right);

    this.resetScales();
    this.drawSidebar();
    this.drawTable();
    this.drawUpper();
    this.drawLower();
    this.drawTriggers();
    this.drawSource(
      'Statistisk sentralbyrå (test)',
      this.padding.top + this.height + this.padding.bottom + this.sourceHeight
    );
  };

  this.drawTable = function() {
    const thead = this.table.select('thead');
    const tbody = this.table.select('tbody');

    thead.selectAll('*').remove();
    tbody.selectAll('*').remove();

    const hRow1 = thead.append('tr');
    const hRow2 = thead.append('tr');

    const years = this.data.data[0].values[0].map(d => d.date);
    const yearsProjected = this.data.data[0].values[1].map(d => d.date);

    const columnNames = [
      { key: 'population', label: 'Befolkning', method: 'value' },
      { key: 'change', label: 'Endring (%)', method: 'ratio' },
      { key: 'births', label: 'Fødsler', method: 'value' },
      { key: 'deaths', label: 'Døde', method: 'value' },
      { key: 'immigration', label: 'Innflyttere', method: 'value' },
      { key: 'emigration', label: 'Utflyttere', method: 'value' },
    ];

    hRow1
      .selectAll('th')
      .data(['Geografi', ...columnNames, { label: 'Fremskriving', method: 'value' }])
      .join('th')
      .attr('rowspan', (d, i) => (i === 0 ? 2 : 1))
      .attr('colspan', (d, i, j) => {
        if (i === 0) return 1;
        if (i === j.length - 1) return yearsProjected.length;
        return years.length;
      })
      .attr('scope', 'col')
      .classed('border-cell', (d, i) => i > 0)
      .attr('id', (d, i) => `${this.data.meta.heading}_th_1_${i}`)
      .text(d => d.label);

    hRow2
      .selectAll('th')
      .data(() => {
        let columns = [];
        columnNames.forEach(() => {
          years.forEach(year => {
            columns.push(year);
          });
        });
        columns = [...columns, ...yearsProjected];

        return columns;
      })
      .join('th')
      .classed('border-cell', (d, i) => i % years.length === 0)
      .attr('id', (d, i) => `${this.data.meta.heading}_th_2_${i}`)
      .text(d => d);

    const tableData = JSON.parse(JSON.stringify(this.data.data));

    const rows = tbody
      .selectAll('tr')
      .data(tableData.sort(this.tableSort))
      .join('tr');

    // Geography cells
    rows
      .selectAll('th')
      .data(d => [d.geography])
      .join('th')
      .attr('scope', 'row')
      .attr('headers', `${this.data.meta.heading}_th_1_0`)
      .text(d => d);

    // Value cells
    rows
      .selectAll('td')
      .data(geo => {
        return [
          ...columnNames.flatMap(col =>
            geo.values[0].map(year => this.format(year[col.key] || 'N/A', col.method, false, true))
          ),
          ...geo.values[1].map(year => this.format(year.projection, 'value', false, true)),
        ];
      })
      .join('td')
      .attr('headers', (d, i, j) => {
        const first = Math.floor(i / (j.length / this.data.meta.series.length)) + 1;
        return `${this.data.meta.heading}_th_1_${first} th_2_${i}`;
      })
      .classed('border-cell', (d, i) => i % years.length === 0)
      .text(d => d);
  };

  // Empties canvas and creates the neccessary DOM elements
  // for this chart
  this.created = function() {
    this.canvas.selectAll('*').remove();
    this.canvas.remove();

    this.createSidebarElements();
    this.createUpperElements();
    this.createLowerElements();

    this.triggersContainer = this.svg.append('g').attr('class', 'triggers');
  };

  // Creates the DOM elements for the sidebar
  // called from this.created()
  this.createSidebarElements = function() {
    this.sidebar = this.svg.append('g').attr('class', 'sidebar');

    const section_year = this.sidebar.append('g').attr('class', 'section-year');
    section_year
      .append('rect')
      .attr('class', 'section-year__bg')
      .attr('width', 88)
      .attr('rx', 4)
      .attr('height', 40)
      .attr('fill', color.purple);
    section_year
      .append('text')
      .attr('class', 'section-year__text')
      .attr('fill', 'white')
      .attr('y', 30)
      .attr('font-size', 26)
      .attr('font-weight', 700)
      .attr('text-anchor', 'middle')
      .attr('x', 44);

    const rowOptions = [
      [{ label: 'Befolkning', class: 'row-population' }],
      [
        { label: 'Befolkningsvekst', class: 'row-change' },
        { label: 'Befolkningsvekst (%)', class: 'row-change-percent' },
      ],
      [
        { label: 'Fødte', class: 'row-births' },
        { label: 'Døde', class: 'row-deaths' },
        { label: 'Naturlig tilvekst', class: 'row-growth-natural' },
      ],
      [
        { label: 'Innvandrere', class: 'row-immigration' },
        { label: 'Utvandrere', class: 'row-emigration' },
        { label: 'Tilvekst flytting', class: 'row-growth-migration' },
      ],
    ];

    const rowHeight = 30;
    const rowStartHeight = 90;
    let rowIterator = 0;

    rowOptions.forEach(group => {
      group.forEach(row => {
        row.y = rowHeight * rowIterator + rowStartHeight;
        createSidebarRow(this, row, rowHeight);
        rowIterator++;
      });
      rowIterator++;
    });
  };

  // Creates the DOM elements for the upper graph
  // called from this.created()
  this.createUpperElements = function() {
    this.upper = this.svg.append('g').attr('class', 'upper');
    this.xAxis = this.upper.append('g').attr('class', 'axis x');
    this.yAxis = this.upper.append('g').attr('class', 'axis y');

    this.upper
      .append('path')
      .attr('class', 'projection')
      .attr('fill', 'none')
      .attr('stroke', color.blue)
      .attr('stroke-width', 3);

    this.upper
      .append('path')
      .attr('class', 'valueLine')
      .attr('fill', 'none')
      .attr('stroke', color.purple)
      .attr('stroke-width', 3);

    this.upper
      .append('line')
      .attr('class', 'currentDate')
      .attr('stroke', color.purple)
      .attr('opacity', 0.7)
      .attr('stroke-width', 1)
      .style('stroke-dasharray', '3,3');

    this.upper
      .append('text')
      .attr('class', 'populationTooltip')
      .attr('font-size', 12)
      .attr('text-anchor', 'end');

    this.upper
      .append('line')
      .attr('class', 'highlightLine')
      .attr('stroke-width', 5)
      .attr('stroke-opacity', 0.1)
      .attr('stroke', color.yellow);

    this.upper
      .append('line')
      .attr('class', 'highlightLine')
      .attr('stroke-width', 2)
      .attr('stroke', color.yellow);

    const highlightContainer = this.upper.append('g').attr('class', 'highlightContainer');

    highlightContainer
      .append('rect')
      .attr('class', 'highlightDateBox')
      .attr('fill', color.yellow)
      .attr('height', 26)
      .attr('width', 48)
      .attr('transform', 'translate(-24, 0)');

    highlightContainer
      .append('text')
      .attr('class', 'highlightText')
      .attr('fill', color.purple)
      .attr('font-size', 12)
      .attr('font-weight', 700)
      .attr('y', 18)
      .attr('text-anchor', 'middle');
  };

  // Creates the DOM elements for the lower histogram
  // called from this.created()
  this.createLowerElements = function() {
    this.lower = this.svg.append('g').attr('class', 'lower');
    this.lower.append('g').attr('class', 'bars');
    this.lower
      .append('line')
      .attr('class', 'zeroline')
      .attr('stroke-width', 1)
      .attr('stroke', color.purple);
    this.y2Axis = this.lower.append('g').attr('class', 'axis y');

    this.lower
      .append('text')
      .attr('class', 'sectionHeading')
      .attr('fill', color.purple)
      .attr('font-weight', 500)
      .text('Befolkningsendring per år');
  };

  // Updates the sidebar contents on each render
  this.drawSidebar = function() {
    this.sidebar.attr('transform', `translate(${this.padding.left + this.width1 + this.gapX}, ${this.padding.top})`);

    const naturalGrowth = this.selected.births - this.selected.deaths;
    const migration = this.selected.immigration - this.selected.emigration;
    const change = naturalGrowth + migration;

    this.sidebar.select('text.section-year__text').text(this.formatYear(this.parseYear(this.selected.date)));
    this.sidebar.select('g.row-population text.row-value').text(this.formatDecimal(this.selected.population));
    this.sidebar.select('g.row-change text.row-value').text(this.formatChange(change));
    this.sidebar.select('g.row-change-percent text.row-value').text(this.formatChangePercent(this.selected.change));
    this.sidebar.select('g.row-births text.row-value').text(this.formatDecimal(this.selected.births));
    this.sidebar.select('g.row-deaths text.row-value').text(this.formatDecimal(this.selected.deaths));
    this.sidebar.select('g.row-immigration text.row-value').text(this.formatDecimal(this.selected.immigration));
    this.sidebar.select('g.row-emigration text.row-value').text(this.formatDecimal(this.selected.emigration));
    this.sidebar.select('g.row-growth-natural text.row-value').text(this.formatChange(naturalGrowth));
    this.sidebar.select('g.row-growth-migration text.row-value').text(this.formatChange(migration));
  };

  // Updates the upper line graph on each render.
  this.drawUpper = function() {
    this.upper.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);
    this.xAxis.attr('transform', `translate(0, ${this.height1})`);
    this.upper.select('text.highlightText').text(this.formatYear(this.parseYear(this.highlight)));

    this.upper
      .select('g.highlightContainer')
      .attr('transform', `translate(${this.x(this.parseYear(this.highlight))}, ${this.height1})`);

    this.upper
      .select('text.populationTooltip')
      .text(this.formatDecimal(this.selected.population))
      .attr('y', this.y(this.selected.population))
      .attr('x', this.x(this.parseYear(this.selected.date)))
      .attr('transform', () => {
        const left = this.x(this.parseYear(this.highlight));
        return left < 100 ? `translate(8, 16)` : `translate(-8, -5)`;
      })
      .attr('text-anchor', () => {
        const left = this.x(this.parseYear(this.highlight));
        return left < 100 ? 'start' : 'end';
      });

    this.upper
      .selectAll('line.highlightLine')
      .attr('x1', this.x(this.parseYear(this.highlight)))
      .attr('x2', this.x(this.parseYear(this.highlight)))
      .attr('y1', 0)
      .attr('y2', this.height1);

    this.upper
      .select('line.currentDate')
      .attr('x1', this.x(new Date()))
      .attr('x2', this.x(new Date()))
      .attr('y1', 0)
      .attr('y2', this.height1);

    this.upper
      .select('path.valueLine')
      .datum(this.filtered)
      .attr('d', d => this.line(d.values[0]));

    this.drawProjection();
  };

  // Updates the lower histogram on each render
  this.drawLower = function() {
    this.barWidth = this.x(this.parseDate('2018-01-01')) - this.x(this.parseDate('2017-01-01')) - 1;

    this.lower.attr('transform', `translate(${this.padding.left}, ${this.padding.top + this.height1 + this.gapY})`);
    this.lower
      .select('line.zeroline')
      .attr('x1', 0)
      .attr('x2', this.width1)
      .attr('y1', this.y2(0))
      .attr('y2', this.y2(0));

    let bar = this.lower
      .select('g.bars')
      .selectAll('rect.bar')
      .data(this.filtered.values[0]);

    const barE = bar
      .enter()
      .append('rect')
      .attr('class', 'bar');
    bar.exit().remove();
    bar = bar.merge(barE);

    bar
      .attr('width', this.barWidth)
      .attr('x', d => this.x(this.parseYear(d.date)) - this.barWidth / 2)
      .attr('height', d => Math.abs(this.y2(0) - this.y2(d.change) || 0))
      .attr('y', d => (d.change > 0 ? this.y2(d.change) : this.y2(0)))
      .attr('fill', d => {
        if (d.date === this.highlight) return color.purple;
        return d.change > 0 ? color.blue : color.red;
      });

    this.lower
      .select('text.sectionHeading')
      .attr('y', -5)
      .attr('x', 20);
  };

  // Draws the projected path on the upper graph
  // called from this.drawUpper()
  this.drawProjection = function() {
    // Draw projection
    const lastDate = this.filtered.values[0][this.filtered.values[0].length - 1];
    const projection = [lastDate, ...this.filtered.values[1].map(d => ({ date: d.date, population: d.projection }))];
    this.upper.select('path.projection').attr('d', this.line(projection));
  };

  // Draws the transparent triggers on each render
  this.drawTriggers = function() {
    this.triggersContainer.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

    let trigger = this.triggersContainer.selectAll('rect').data(this.filtered.values[0]);
    const triggerE = trigger.enter().append('rect');
    trigger.exit().remove();
    trigger = trigger.merge(triggerE);

    trigger
      .attr('width', this.barWidth + 1)
      .attr('height', this.height1 + this.gapY + this.height2)
      .attr('x', d => this.x(this.parseYear(d.date)) - this.barWidth / 2)
      .style('cursor', 'pointer')
      .on('click keyup', (d, i, j) => {
        if (d3.event && d3.event.type === 'keyup' && d3.event.key !== 'Enter') return;
        if (d3.event && d3.event.type === 'click') j[i].blur();
        this.render(this.data, { highlight: d.date });
      })
      .on('mouseover', function() {
        d3.select(this).attr('fill-opacity', 0.03);
      })
      .on('mouseleave', function() {
        d3.select(this)
          .transition()
          .duration(this.duration)
          .duration(40)
          .attr('fill-opacity', 0);
      })
      .transition()
      .duration(this.duration)
      .duration(1000)
      .attr('fill-opacity', 0)
      .attr('tabindex', 0);
  };

  // Sets and draws all the scales and axis
  // for the whole template on each render.
  this.resetScales = function() {
    const dateExtent = d3.extent(this.filtered.values.flatMap(serie => serie.map(d => this.parseYear(d.date))));
    const populationExtent = d3.extent(
      this.filtered.values.flatMap(serie => serie.map(d => d.population || d.projection))
    );
    const changeExtent = d3.extent(this.filtered.values.flatMap(serie => serie.map(d => d.change))).map((d, i) => {
      if (i === 0) {
        return d3.min([d, 0]);
      } else {
        return d;
      }
    });

    this.y2
      .range([this.height2, 0])
      .domain(changeExtent)
      .nice();

    this.x
      .range([0, this.width1])
      .domain(dateExtent)
      .nice();
    this.y
      .range([this.height1, 0])
      .domain([0, populationExtent[1]])
      .nice();
    this.xAxis.call(d3.axisBottom(this.x).ticks(this.width1 / 60));
    this.yAxis.call(
      d3
        .axisLeft(this.y)
        .ticks(this.height1 / 40)
        .tickFormat(d => this.format(d, this.method, true))
    );
    this.y2Axis.call(
      d3
        .axisLeft(this.y2)
        .ticks(this.height2 / 30)
        .tickFormat(d => d3.format('+.2p')(d))
    );
  };

  this.init(svg);
}

export default Template;

function createSidebarRow(self, options, rowHeight) {
  const row = self.sidebar
    .append('g')
    .attr('class', `row ${options.class}`)
    .attr('transform', `translate(0, ${options.y})`);

  row
    .append('rect')
    .attr('height', 1)
    .attr('width', self.sidebarWidth)
    .attr('y', (rowHeight - 12) / 2)
    .attr('fill', color.purple)
    .attr('fill-opacity', 0.1);

  row
    .append('text')
    .attr('class', 'row-label')
    .text(options.label);

  row
    .append('text')
    .attr('class', 'row-value')
    .attr('x', self.sidebarWidth)
    .attr('font-weight', 600)
    .attr('text-anchor', 'end');

  return row;
}
