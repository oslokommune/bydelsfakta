/**
 * Template for comparing immigration vs emigration
 */

import d3 from '@/assets/d3';
import { hideTooltip, showTooltipMove, showTooltipOver } from '../tooltip';
import Base_Template from './baseTemplate';
import { color } from './colors';
import util from './template-utils';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'm';

  this.padding = { top: 110, left: 60, right: 20, bottom: 30 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;
  this.mobileWidth = 520;

  this.height1 = 260;
  this.height2 = 160;
  this.gapY = 65;

  this.upper = null;
  this.lower = null;
  this.radio = null;
  this.x = d3.scaleBand().paddingOuter(0.15);
  this.y1 = d3.scaleLinear().rangeRound([this.height1, 0]);
  this.y2 = d3.scaleLinear().rangeRound([this.height2, 0]);

  const tabData = [
    { label: 'Totalt', value: 'totalt' },
    { label: 'Mellom bydeler', value: 'mellomBydeler' },
    { label: 'Innenfor bydelen', value: 'innenforBydelen' },
    { label: 'Til/fra Oslo', value: 'tilFraOslo' },
  ];

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;
    this.filteredData = JSON.parse(JSON.stringify(this.data.data.find(d => d.avgRow || d.totalRow).values));

    const keys = ['emigration', 'immigration'];

    keys.map(key => {
      this.filteredData[key].forEach(row => {
        const str = row.alder;
        let arr = [];

        if (str === 'Under 10 år') {
          arr = [0, 9];
        } else if (str === '90 år og eldre') {
          arr = [90, 119];
        } else {
          arr = str
            .split(' år')[0]
            .split(' - ')
            .map(d => +d);
        }
        row.totalt = row['mellomBydeler'] + row['innenforBydelen'] + row['tilFraOslo'];
        row.alder = arr;
      });
      this.filteredData[key].sort((a, b) => a.alder[0] - b.alder[0]);
    });

    this.height = this.height1 + this.gapY + this.height2;
    this.width = d3.max([this.width, 360]);
    this.svg
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.width + this.padding.left + this.padding.right);

    this.setScales();
    this.drawUpper();
    this.drawLower();
    this.drawVoronoi();
    this.drawTabs();
    this.drawHeadings();
    this.drawTable();
  };

  this.created = function() {
    // Container for radio buttons
    this.radio = this.svg
      .append('g')
      .attr('class', 'radio')
      .attr('transform', 'translate(5, 50)');

    // Container for upper chart
    this.upper = this.canvas.append('g').attr('class', 'upper');

    // Container for lower chart
    this.lower = this.canvas
      .append('g')
      .attr('class', 'lower')
      .attr('transform', `translate(0, ${this.height1 + this.gapY})`);

    // Containers for axis on upper chart
    this.upper
      .append('g')
      .attr('class', 'axis axisX')
      .attr('transform', `translate(0, ${this.height1})`);
    this.upper.append('g').attr('class', 'axis axisY');

    // Path elements for lines
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

    this.upper
      .append('g')
      .attr('class', 'heading')
      .attr('transform', `translate(20, 4)`);

    // Container for voronoi needs to be last
    this.canvas.append('g').attr('class', 'voronoi');

    // Containers for elements on the lower chart
    this.lower
      .append('g')
      .attr('class', 'axis axisX')
      .attr('transform', `translate(0, ${this.height2})`);
    this.lower.append('g').attr('class', 'axis axisY');
    this.lower.append('g').attr('class', 'bars');
    this.lower.append('rect').attr('class', 'zero');
    this.lower
      .append('text')
      .attr('class', 'heading')
      .attr('transform', `translate(20, 4)`);
  };

  this.drawHeadings = function() {
    this.lower
      .select('.heading')
      .text('Netto innflytting')
      .attr('y', -12);

    const g = this.upper
      .select('.heading')
      .selectAll('g')
      .data(['Innflytting', 'Utflytting'])
      .join(enter => {
        const g = enter.append('g');
        g.append('rect')
          .attr('height', 5)
          .attr('rx', 3)
          .attr('width', 23);
        g.append('text');
        return g;
      });

    g.attr('transform', (d, i) => `translate(${this.width - 250 + i * 125}, 10)`);
    g.select('text')
      .text(d => d)
      .attr('x', 30);

    g.select('rect')
      .text(d => d)
      .attr('y', -7)
      .attr('fill', (d, i) => (i === 0 ? color.purple : color.red));
  };

  this.drawUpper = function() {
    // Line constructor
    const line = d3
      .line()
      .y(d => this.y1(d[tabData[this.series].value]))
      .x(d => this.x.bandwidth() / 2 + this.x(d.alder.join('–')));

    this.upper
      .select('path.immigration')
      .data([this.filteredData.immigration])
      .transition()
      .attr('d', line); // Use line constructor to generate line

    this.upper
      .select('path.emigration')
      .data([this.filteredData.emigration])
      .transition()
      .attr('d', line); // Use line constructor to generate line
  };

  this.drawLower = function() {
    // Prepare data for bar chart
    const barData = [...new Array(this.filteredData.immigration.length)].map((d, i) => {
      return {
        age: this.filteredData.immigration[i].alder.join('–'),
        diff:
          this.filteredData.immigration[i][tabData[this.series].value] -
          this.filteredData.emigration[i][tabData[this.series].value],
      };
    });

    const bars = this.lower
      .select('.bars')
      .selectAll('rect')
      .data(barData)
      .join('rect')
      .attr('x', d => this.x(d.age))
      .attr('stroke', d => (d.diff <= 0 ? color.red : color.purple))
      .attr('fill-opacity', 0.6)
      .attr('width', this.x.bandwidth());

    bars
      .transition()
      .attr('fill', d => (d.diff <= 0 ? color.red : color.purple))
      .attr('height', d => this.y2(0) - this.y2(Math.abs(d.diff)))
      .attr('y', d => (d.diff <= 0 ? this.y2(0) + 1 : this.y2(d.diff)));

    bars.on('mouseenter', d => {
      showTooltipOver(`${d.age} år: ${this.formatChange(d.diff)}`);
      showTooltipMove();
    });

    bars.on('mousemove', showTooltipMove);
    bars.on('mouseleave', hideTooltip);

    // Reposition line at zero
    this.lower
      .select('.zero')
      .attr('height', 1)
      .attr('width', this.width)
      .transition()
      .attr('y', this.y2(0));
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

  this.drawVoronoi = function() {
    // Prepare data for voronoi generator
    const flattenData = [...new Array(this.filteredData.immigration.length)].flatMap((d, i) => {
      return [
        {
          x: this.x(this.filteredData.immigration[i].alder.join('–')),
          y: this.y1(this.filteredData.immigration[i][tabData[this.series].value]),
          value: this.filteredData.immigration[i][tabData[this.series].value],
          age: this.filteredData.immigration[i].alder,
        },
        {
          x: this.x(this.filteredData.emigration[i].alder.join('–')),
          y: this.y1(this.filteredData.emigration[i][tabData[this.series].value]),
          value: this.filteredData.emigration[i][tabData[this.series].value],
          age: this.filteredData.emigration[i].alder,
        },
      ];
    });

    // Generate voronoi cells
    const voronoiData = d3
      .voronoi()
      .extent([[1, 1], [this.width, this.height1]])
      .x(d => d.x + this.x.bandwidth() / 2)
      .y(d => d.y)
      .polygons(flattenData)
      .filter(Boolean);

    // Draw DOM elements for each voronoi cell
    const voronoiCells = this.canvas
      .select('g.voronoi')
      .selectAll('g')
      .data(voronoiData)
      .join(enter => {
        const g = enter.append('g');
        g.append('path');
        g.append('rect');
        g.append('circle');
        g.append('text');
        return g;
      });

    const circle = voronoiCells
      .select('circle')
      .attr('r', 6)
      .attr('cx', d => d.data.x + this.x.bandwidth() / 2)
      .attr('cy', d => d.data.y)
      .attr('opacity', 0)
      .style('pointer-events', 'none')
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    const rect = voronoiCells
      .select('rect')
      .attr('height', 25)
      .attr('width', d => util.getTextWidth(d.data.value) + 12)
      .attr('x', d => d.data.x + this.x.bandwidth() / 2 - 2)
      .attr('y', d => d.data.y - 26)
      .attr('fill', color.yellow)
      .attr('stroke', 'white')
      .attr('rx', 12.5)
      .attr('opacity', 0)
      .style('pointer-events', 'none');

    const text = voronoiCells
      .select('text')
      .attr('x', d => d.data.x + this.x.bandwidth() / 2 + 4)
      .attr('y', d => d.data.y - 8)
      .text(d => d.data.value)
      .attr('opacity', 0)
      .style('pointer-events', 'none')
      .style('cursor', 'auto');

    // Draw path for the voronoi cell
    const path = voronoiCells
      .select('path')
      .attr('d', d => 'M' + d.join('L') + 'Z')
      .attr('fill-opacity', 0);

    // Handle mouse interactions
    path.on('mouseenter', (d, i, j) => {
      const parent = d3.select(j[i].parentNode);
      parent.select('rect').attr('opacity', 1);
      parent.select('text').attr('opacity', 1);
      parent.select('circle').attr('opacity', 1);
    });
    path.on('mouseleave', () => {
      circle.attr('opacity', 0);
      text.attr('opacity', 0);
      rect.attr('opacity', 0);
    });
  };

  this.drawTable = function() {
    // Prepare data for table head
    const table_head = [
      ['Alder', ...tabData.map(d => d.label)],
      tabData.flatMap(() => ['Innflytting', 'Utflytting', 'Netto flytting']),
    ];

    // Prepare data for table body
    const table_body = this.filteredData.immigration.map((d, i) => {
      return {
        key: d.alder.join('–') + ' år',
        values: [
          this.filteredData.immigration[i]['totalt'],
          this.filteredData.emigration[i]['totalt'],
          this.filteredData.immigration[i]['totalt'] - this.filteredData.emigration[i]['totalt'],

          this.filteredData.immigration[i]['mellomBydeler'],
          this.filteredData.emigration[i]['mellomBydeler'],
          this.filteredData.immigration[i]['mellomBydeler'] - this.filteredData.emigration[i]['mellomBydeler'],

          this.filteredData.immigration[i]['innenforBydelen'],
          this.filteredData.emigration[i]['innenforBydelen'],
          this.filteredData.immigration[i]['innenforBydelen'] - this.filteredData.emigration[i]['innenforBydelen'],

          this.filteredData.immigration[i]['tilFraOslo'],
          this.filteredData.emigration[i]['tilFraOslo'],
          this.filteredData.immigration[i]['tilFraOslo'] - this.filteredData.emigration[i]['tilFraOslo'],
        ],
      };
    });

    table_body.push({
      key: 'Totalt',
      values: [
        d3.sum(this.filteredData.immigration.map(d => d.totalt)),
        d3.sum(this.filteredData.emigration.map(d => d.totalt)),
        d3.sum(this.filteredData.immigration.map(d => d.totalt)) -
          d3.sum(this.filteredData.emigration.map(d => d.totalt)),

        d3.sum(this.filteredData.immigration.map(d => d.mellomBydeler)),
        d3.sum(this.filteredData.emigration.map(d => d.mellomBydeler)),
        d3.sum(this.filteredData.immigration.map(d => d.mellomBydeler)) -
          d3.sum(this.filteredData.emigration.map(d => d.mellomBydeler)),

        d3.sum(this.filteredData.immigration.map(d => d.innenforBydelen)),
        d3.sum(this.filteredData.emigration.map(d => d.innenforBydelen)),
        d3.sum(this.filteredData.immigration.map(d => d.innenforBydelen)) -
          d3.sum(this.filteredData.emigration.map(d => d.innenforBydelen)),

        d3.sum(this.filteredData.immigration.map(d => d.tilFraOslo)),
        d3.sum(this.filteredData.emigration.map(d => d.tilFraOslo)),
        d3.sum(this.filteredData.immigration.map(d => d.tilFraOslo)) -
          d3.sum(this.filteredData.emigration.map(d => d.tilFraOslo)),
      ],
    });

    const tableGenerator = util.drawTable.bind(this);
    tableGenerator(table_head, table_body);
  };

  this.setScales = function() {
    const ages = this.filteredData.immigration.map(d => d.alder.join('–'));

    const extent1 = [
      0,
      d3.max([
        d3.max(this.filteredData.immigration.map(d => d[tabData[this.series].value])),
        d3.max(this.filteredData.emigration.map(d => d[tabData[this.series].value])),
      ]),
    ];

    const extent2 = d3.extent(
      [...new Array(this.filteredData.immigration.length)].map((d, i) => {
        return (
          this.filteredData.immigration[i][tabData[this.series].value] -
          this.filteredData.emigration[i][tabData[this.series].value]
        );
      })
    );

    this.x.domain(ages).rangeRound([0, this.width]);
    this.y1.domain(extent1).nice();
    this.y2.domain(extent2).nice();
    this.upper
      .select('g.axisX')
      .transition()
      .call(d3.axisBottom(this.x));
    this.upper
      .select('g.axisY')
      .transition()
      .call(d3.axisLeft(this.y1).tickFormat(d => this.format(d, 'value', true)));
    this.lower
      .select('g.axisX')
      .transition()
      .call(d3.axisBottom(this.x));
    this.lower
      .select('g.axisY')
      .transition()
      .call(
        d3
          .axisLeft(this.y2)
          .tickFormat(d3.format('+'))
          .ticks(5)
      );
  };

  this.init(svg);
}

export default Template;
