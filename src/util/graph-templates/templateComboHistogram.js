/**
 * Template for comparing immigration vs emigration
 */

import d3 from '@/assets/d3';
import { hideTooltip, showTooltipMove, showTooltipOver } from '../tooltip';
import BaseTemplate from './baseTemplate';
import { drawVoronoi } from './graph-helpers';
import { color } from './colors';
import util from './template-utils';

const tabData = [
  { label: 'Totalt', value: 'totalt' },
  { label: 'Mellom bydeler', value: 'mellomBydeler' },
  { label: 'Innenfor bydelen', value: 'innenforBydelen' },
  { label: 'Til/fra Oslo', value: 'tilFraOslo' },
];

function Template(svg) {
  BaseTemplate.apply(this, arguments);
  this.template = 'comboHistogram';

  this.padding = { top: 110, left: 60, right: 20, bottom: 30 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;
  this.mobileWidth = 520;

  this.height1 = 260;
  this.height2 = 160;
  this.gapY = 65;

  this.x = d3.scaleBand().paddingOuter(0.15).paddingInner(0.03);
  this.y1 = d3.scaleLinear().rangeRound([this.height1, 0]);
  this.y2 = d3.scaleLinear().rangeRound([this.height2, 0]);

  this.render = function (data, options = {}) {
    if (!this.commonRender(data, options)) return;
    this.filteredData = JSON.parse(JSON.stringify(this.data.data.find((d) => d.avgRow || d.totalRow).values));

    prepareData.call(this, this.filteredData);

    this.height = this.height1 + this.gapY + this.height2;
    this.width = d3.max([this.width, 360]);
    this.svg.call(resizeSvg.bind(this));

    setScales.call(this);
    drawHeadings.call(this);

    this.upper.call(updateUpper.bind(this));
    this.lower.call(updateLower.bind(this));
    this.radio.call(updateRadio.bind(this));

    // Update voronoi for chart
    const flattenData = generateFlattenData.call(this);
    const dataAccessor = (d) => d.data.value;
    this.voronoi.call(drawVoronoi.bind(this), flattenData, [this.width, this.height1], dataAccessor);

    util.drawTable.apply(this, generateTableData.call(this));
  };

  this.created = function () {
    this.radio = this.svg.append('g').call(initRadioContainer.bind(this));
    this.upper = this.canvas.append('g').call(initUpper.bind(this));
    this.lower = this.canvas.append('g').call(initLower.bind(this));
    this.voronoi = this.canvas.append('g').attr('class', 'voronoi');
  };

  this.init(svg);
}

export default Template;

function setScales() {
  const ages = this.filteredData.immigration.map((d) => d.alder.join('–'));

  const extent1 = [
    0,
    d3.max([
      d3.max(this.filteredData.immigration.map((d) => d[tabData[this.series].value])),
      d3.max(this.filteredData.emigration.map((d) => d[tabData[this.series].value])),
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
  this.upper.select('g.axisX').transition().call(d3.axisBottom(this.x));
  this.upper
    .select('g.axisY')
    .transition()
    .call(d3.axisLeft(this.y1).tickFormat((d) => this.format(d, 'value', true)));
  this.lower.select('g.axisX').transition().call(d3.axisBottom(this.x));
  this.lower
    .select('g.axisY')
    .transition()
    .call(d3.axisLeft(this.y2).tickFormat(d3.format('+')).ticks(5));
}

function prepareData(dataset) {
  const keys = ['emigration', 'immigration'];

  keys.map((key) => {
    dataset[key].forEach((row) => {
      const str = row.alder;
      let arr = [];

      if (str === 'Under 5 år') {
        arr = [0, 4];
      } else if (str === '90 år og eldre') {
        arr = [90, 119];
      } else {
        arr = str
          .split(' år')[0]
          .split(' - ')
          .map((d) => +d);
      }
      row.totalt = row.mellomBydeler + row.innenforBydelen + row.tilFraOslo;
      row.alder = arr;
    });
    dataset[key].sort((a, b) => a.alder[0] - b.alder[0]);
    return dataset;
  });
}

function generateTableData() {
  // Prepare data for table head
  const tableHead = [
    ['Alder', ...tabData.map((d) => d.label)],
    tabData.flatMap(() => ['Innflytting', 'Utflytting', 'Netto flytting']),
  ];

  // Prepare data for table body
  const tableBody = this.filteredData.immigration.map((d, i) => {
    return {
      key: `${d.alder.join('–')} år`,
      values: [
        this.filteredData.immigration[i].totalt,
        this.filteredData.emigration[i].totalt,
        this.filteredData.immigration[i].totalt - this.filteredData.emigration[i].totalt,

        this.filteredData.immigration[i].mellomBydeler,
        this.filteredData.emigration[i].mellomBydeler,
        this.filteredData.immigration[i].mellomBydeler - this.filteredData.emigration[i].mellomBydeler,

        this.filteredData.immigration[i].innenforBydelen,
        this.filteredData.emigration[i].innenforBydelen,
        this.filteredData.immigration[i].innenforBydelen - this.filteredData.emigration[i].innenforBydelen,

        this.filteredData.immigration[i].tilFraOslo,
        this.filteredData.emigration[i].tilFraOslo,
        this.filteredData.immigration[i].tilFraOslo - this.filteredData.emigration[i].tilFraOslo,
      ],
    };
  });

  tableBody.push({
    key: 'Totalt',
    values: [
      d3.sum(this.filteredData.immigration.map((d) => d.totalt)),
      d3.sum(this.filteredData.emigration.map((d) => d.totalt)),
      d3.sum(this.filteredData.immigration.map((d) => d.totalt)) -
        d3.sum(this.filteredData.emigration.map((d) => d.totalt)),

      d3.sum(this.filteredData.immigration.map((d) => d.mellomBydeler)),
      d3.sum(this.filteredData.emigration.map((d) => d.mellomBydeler)),
      d3.sum(this.filteredData.immigration.map((d) => d.mellomBydeler)) -
        d3.sum(this.filteredData.emigration.map((d) => d.mellomBydeler)),

      d3.sum(this.filteredData.immigration.map((d) => d.innenforBydelen)),
      d3.sum(this.filteredData.emigration.map((d) => d.innenforBydelen)),
      d3.sum(this.filteredData.immigration.map((d) => d.innenforBydelen)) -
        d3.sum(this.filteredData.emigration.map((d) => d.innenforBydelen)),

      d3.sum(this.filteredData.immigration.map((d) => d.tilFraOslo)),
      d3.sum(this.filteredData.emigration.map((d) => d.tilFraOslo)),
      d3.sum(this.filteredData.immigration.map((d) => d.tilFraOslo)) -
        d3.sum(this.filteredData.emigration.map((d) => d.tilFraOslo)),
    ],
  });

  return [tableHead, tableBody];
}

function resizeSvg(selection) {
  selection
    .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
    .attr('width', this.width + this.padding.left + this.padding.right);
}

function initRadioContainer(selection) {
  selection.attr('class', 'radio').attr('transform', 'translate(5, 50)');
}

function initUpper(selection) {
  selection.attr('class', 'upper');

  // Containers for axis on upper chart
  selection.append('g').attr('class', 'axis axisX').attr('transform', `translate(0, ${this.height1})`);

  // Path elements for lines
  selection
    .append('path')
    .attr('class', 'immigration')
    .attr('fill', 'none')
    .attr('stroke', color.purple)
    .attr('stroke-width', 4);

  selection
    .append('path')
    .attr('class', 'emigration')
    .attr('fill', 'none')
    .attr('stroke', color.blue)
    .attr('stroke-width', 4);

  selection.append('g').attr('class', 'heading').attr('transform', `translate(20, 4)`);

  selection.append('g').attr('class', 'axis axisY');
}

function initLower(selection) {
  selection.attr('class', 'lower').attr('transform', `translate(0, ${this.height1 + this.gapY})`);

  // Containers for elements on the lower chart
  selection.append('g').attr('class', 'axis axisX').attr('transform', `translate(0, ${this.height2})`);
  selection.append('g').attr('class', 'axis axisY');
  selection.append('g').attr('class', 'bars');
  selection.append('rect').attr('class', 'zero');
  selection.append('text').attr('class', 'heading').attr('transform', `translate(20, 4)`);
}

function drawHeadings() {
  this.lower.select('.heading').text('Netto innflytting').attr('y', -12);

  const g = this.upper
    .select('.heading')
    .selectAll('g')
    .data(['Innflytting', 'Utflytting'])
    .join((enter) => {
      const group = enter.append('g');
      group.append('rect').attr('height', 8).attr('rx', 4).attr('width', 23);
      group.append('text');
      return group;
    });

  g.attr('transform', (d, i) => `translate(${this.width - 250 + i * 125}, 10)`);
  g.select('text')
    .text((d) => d)
    .attr('x', 30);

  g.select('rect')
    .text((d) => d)
    .attr('y', -9)
    .attr('fill', (d, i) => (i === 0 ? color.purple : color.blue));
}

function updateUpper(selection) {
  // Line constructor
  const line = d3
    .line()
    .y((d) => this.y1(d[tabData[this.series].value]))
    .x((d) => this.x.bandwidth() / 2 + this.x(d.alder.join('–')));

  selection.select('path.immigration').data([this.filteredData.immigration]).transition().attr('d', line); // Use line constructor to generate line

  selection.select('path.emigration').data([this.filteredData.emigration]).transition().attr('d', line); // Use line constructor to generate line
}

function updateLower(selection) {
  // Prepare data for bar chart
  const barData = [...new Array(this.filteredData.immigration.length)].map((d, i) => {
    return {
      age: this.filteredData.immigration[i].alder.join('–'),
      diff:
        this.filteredData.immigration[i][tabData[this.series].value] -
        this.filteredData.emigration[i][tabData[this.series].value],
    };
  });

  selection.select('.bars').selectAll('rect').data(barData).join('rect').call(updateBars.bind(this));

  // Reposition line at zero
  selection.select('.zero').attr('height', 1).attr('width', this.width).transition().attr('y', this.y2(0));
}

function updateBars(selection) {
  selection
    .attr('x', (d) => this.x(d.age))
    .attr('width', this.x.bandwidth())
    .call(handleMouseEvents.bind(this))
    .transition()
    .attr('fill', (d) => (d.diff <= 0 ? color.negative : color.positive))
    .attr('height', (d) => this.y2(0) - this.y2(Math.abs(d.diff)))
    .attr('y', (d) => (d.diff <= 0 ? this.y2(0) + 1 : this.y2(d.diff)));
}

function handleMouseEvents(selection) {
  selection
    .on('mousemove', showTooltipMove)
    .on('mouseleave', hideTooltip)
    .on('mouseenter', (e, d) => {
      showTooltipOver(`${d.age} år: ${this.formatChange(d.diff)}`);
      showTooltipMove();
    });
}

function updateRadio(selection) {
  const g = selection.selectAll('g.tab').data(tabData).join(enterTabs).attr('class', 'tab');

  const rowCount = this.isMobileView ? 3 : 2;
  const gapX = 36;
  const gapY = 24;
  const radio = g.select('g.radio');
  const inner = radio.select('.inner');
  const label = g.select('.label');
  const bg = g.select('.bg');
  const maxWidth = d3.max(tabData, (d) => util.getTextWidth(d.label)) + gapX;

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
  label.attr('transform', 'translate(16, 5)').text((d) => d.label);

  inner.attr('opacity', (d, i) => (i === this.series ? 1 : 0));

  g.on('click keyup', (e) => {
    const i = g.nodes().indexOf(e.currentTarget);
    if (i === this.series) return;
    if (e && e.type === 'keyup' && e.key !== 'Enter') return;
    this.render(this.data, { method: this.method, series: i });
  })
    .attr('tabindex', 0)
    .style('cursor', 'pointer');
}

function enterTabs(enter) {
  const g = enter.append('g').attr('class', 'tab');

  g.append('rect').classed('bg', true).attr('height', 20);
  g.append('text').classed('label', true);

  const radio = g.append('g').classed('radio', true);

  radio
    .append('circle')
    .classed('outer', true)
    .attr('r', 6)
    .attr('stroke', color.purple)
    .attr('stroke-width', 1)
    .attr('fill', 'none');

  radio.append('circle').classed('inner', true).attr('r', 4).attr('fill', color.purple);

  return g;
}

function generateFlattenData() {
  return [...new Array(this.filteredData.immigration.length)].flatMap((d, i) => {
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
}
