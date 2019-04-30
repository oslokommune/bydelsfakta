/**

 */

import * as Sankey from 'd3-sankey';
import Base_Template from './baseTemplate';
import util from './template-utils';
import { color } from './colors';
import d3 from '@/assets/d3';

function Template(svg) {
  Base_Template.apply(this, arguments);
  this.template = 'l';
  this.padding = { top: 70, left: 1, right: 1, bottom: 1 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;
  this.nodes;
  this.links;
  this.labels;
  this.sankeyData;
  this.order = ['immigrant_type', 'moving_type'];

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    this.sankeyData = parseData(data.data, this.order);

    this.width = d3.max([this.width, 1200]);
    this.height = 400;

    this.svg
      .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
      .attr('width', this.width + this.padding.left + this.padding.right);

    const graph = generateSankey(this);

    drawHeadings(this, ['Flytting inn', 'Flytting ut']);
    drawNodes(this, graph);
    drawLinks(this, graph);
    drawLabels(this, graph);

    this.drawSource(
      'Statistisk sentralbyrå (test)',
      this.padding.top + this.height + this.padding.bottom + this.sourceHeight
    );
  };

  this.created = function() {
    this.canvas.append('g').attr('class', 'headings');
    this.canvas.append('g').attr('class', 'links');
    this.canvas.append('g').attr('class', 'nodes');
    this.canvas.append('g').attr('class', 'labels');
  };

  this.init(svg);
}

export default Template;

function generateSankey(self) {
  const sankey = Sankey.sankey()
    .size([self.width, self.height])
    .nodeId(d => d.id)
    .nodes(d => d.nodes)
    .links(d => d.links)
    .nodeWidth(12)
    .nodePadding(5)
    .nodeSort((a, b) => b.label - a.label);

  return sankey(self.sankeyData);
}

function parseData(data, order) {
  const immigrantTypeIn = [
    ...new Set(data.filter(d => d.direction === 'in').map(d => d.direction + ' | ' + d.immigrant_type)),
  ];
  const immigrantTypeOut = [
    ...new Set(data.filter(d => d.direction === 'out').map(d => d.direction + ' | ' + d.immigrant_type)),
  ];
  const agesIn = [...new Set(data.filter(d => d.direction === 'in').map(d => d.direction + ' | ' + d.age))];
  const agesOut = [...new Set(data.filter(d => d.direction === 'out').map(d => d.direction + ' | ' + d.age))];
  const movingTypeIn = [
    ...new Set(data.filter(d => d.direction === 'in').map(d => d.direction + ' | ' + d.moving_type)),
  ];
  const movingTypeOut = [
    ...new Set(data.filter(d => d.direction === 'out').map(d => d.direction + ' | ' + d.moving_type)),
  ];
  const geography = [...new Set(data.map(d => d.geography))];

  const nodes = [
    ...immigrantTypeIn,
    ...agesIn,
    ...movingTypeIn,
    ...geography,
    ...movingTypeOut,
    ...immigrantTypeOut,
    ...agesOut,
  ].map(d => {
    const center = !d.split(' | ')[1];
    return {
      id: d,
      label: d.split(' | ')[1] || d,
      center,
      direction: d.split(' | ')[0],
    };
  });

  // DYNAMIC COLUMN ORDER
  let links = [];
  for (let i = 0; i < order.length; i++) {
    const direction = 'in';
    let source, target;

    if (order[i] === 'age') {
      source = { age: agesIn };
    } else if (order[i] === 'immigrant_type') {
      source = { immigrant_type: immigrantTypeIn };
    } else if (order[i] === 'moving_type') {
      source = { moving_type: movingTypeIn };
    }

    if (i === order.length - 1) {
      target = { geography };
    } else if (order[i + 1] === 'age') {
      target = { age: agesIn };
    } else if (order[i + 1] === 'immigrant_type') {
      target = { immigrant_type: immigrantTypeIn };
    } else if (order[i + 1] === 'moving_type') {
      target = { moving_type: movingTypeIn };
    }

    links.push(...createLinks(data, source, target, direction));
  }

  for (let i = order.length; i < order.length * 2; i++) {
    const direction = 'out';
    let source, target;

    if (i === order.length) {
      source = { geography };
    } else if (order[order.length * 2 - i] === 'age') {
      source = { age: agesOut };
    } else if (order[order.length * 2 - i] === 'immigrant_type') {
      source = { immigrant_type: immigrantTypeOut };
    } else if (order[order.length * 2 - i] === 'moving_type') {
      source = { moving_type: movingTypeOut };
    }

    if (order[order.length * 2 - i - 1] === 'age') {
      target = { age: agesOut };
    } else if (order[order.length * 2 - i - 1] === 'immigrant_type') {
      target = { immigrant_type: immigrantTypeOut };
    } else if (order[order.length * 2 - i - 1] === 'moving_type') {
      target = { moving_type: movingTypeOut };
    }

    links.push(...createLinks(data, source, target, direction));
  }

  return { nodes, links };
}

function createLinks(data, sources, targets, direction) {
  let sourceKey = Object.keys(sources)[0];
  let targetKey = Object.keys(targets)[0];

  let geography = [...new Set(data.map(d => d.geography))][0];

  data = data
    .filter(d => d.direction === direction)
    .map((d, i) => {
      const source = d[sourceKey] === geography ? geography : `${direction} | ${d[sourceKey]}`;
      const target = d[targetKey] === geography ? geography : `${direction} | ${d[targetKey]}`;

      return {
        value: d.value,
        source,
        target,
      };
    });

  let links = [...new Set(data.map(d => `${d.source} %% ${d.target}`))].map(d => {
    return {
      key: d,
      source: d.split(' %% ')[0],
      target: d.split(' %% ')[1],
      value: 0,
    };
  });

  data.forEach(d => {
    let key = `${d.source} %% ${d.target}`;
    let index = links.findIndex(link => key === link.key);
    links[index].value += +d.value;
  });

  links = links.map(link => {
    delete link.key;
    return link;
  });

  return links;
}

function drawNodes(self, data) {
  self.nodes = self.canvas
    .select('g.nodes')
    .selectAll('rect')
    .data(data.nodes, d => d.id)
    .join('rect')
    .classed('node', true)
    .attr('width', d => d.x1 - d.x0)
    .on('mouseover', function(d) {
      self.links.attr('stroke-opacity', 0.05);

      const attachedLinks = self.links.filter(link => {
        return d.id === link.source.id || d.id === link.target.id;
      });

      attachedLinks.attr('stroke', color.purple).attr('stroke-opacity', 0.3);
      d3.select(this).attr('fill', color.purple);
    })

    .on('mouseleave', function(d) {
      self.links.attr('stroke-opacity', 0.16);
      const attached = self.links.filter(link => {
        return d.id === link.source.id || d.id === link.target.id;
      });
      attached.attr('stroke', '#606060');
      d3.select(this).attr('fill', color.blue);
    });

  self.nodes
    .transition()
    .attr('x', d => d.x0)
    .attr('y', d => d.y0)
    .attr('height', d => d.y1 - d.y0)
    .attr('fill', color.blue)
    .attr('stroke', color.purple)
    .attr('opacity', 1);
}

function drawLinks(self, data) {
  self.links = self.canvas
    .select('g.links')
    .selectAll('path')
    .data(data.links, d => {
      return `${d.source}${d.target}`;
    })
    .join('path')
    .classed('link', true)
    .on('mouseenter', function(d) {
      const attached = self.nodes.filter(node => node.id === d.source.id || node.id === d.target.id);
      attached.attr('fill', color.purple);

      d3.select(this).attr('stroke-opacity', 0.4);
    })
    .on('mouseleave', function(d) {
      const attached = self.nodes.filter(node => node.id === d.source.id || node.id === d.target.id);
      attached.attr('fill', color.blue);
      d3.select(this).attr('stroke-opacity', 0.16);
    });

  self.links
    .transition()
    .attr('fill', 'none')
    .attr('stroke', '#606060')
    .attr('stroke-width', d => d.width)
    .attr('stroke-opacity', 0.16)
    .attr('d', Sankey.sankeyLinkHorizontal());
}

function drawLabels(self, data) {
  self.labels = self.canvas
    .select('g.labels')
    .selectAll('text')
    .data(data.nodes)
    .join('text')
    .text(d => {
      return d.y1 - d.y0 > 15 ? d.label : '';
    });

  self.labels
    .transition()
    .attr('x', d => d.x0)
    .attr('y', d => d.y0 + (d.y1 - d.y0) / 2)
    .attr('font-size', 13)
    .attr('text-anchor', d => {
      if (d.center) return 'start';
      if (d.direction === 'out') return 'end';
      return 'start';
    })
    .attr('tx', 100)
    .attr('transform', d => {
      const offset = d.direction === 'out' ? -5 : 17;
      return `translate(${offset}, 6)`;
    })
    .attr('font-weight', 500)
    .style('pointer-events', 'none');
}

function drawHeadings(self, data) {
  self.canvas
    .select('g.headings')
    .selectAll('text')
    .data(data)
    .join('text')
    .text(d => d)
    .attr('y', -22)
    .attr('x', (d, i) => self.width / 4 + (self.width / 2) * i)
    .attr('width', self.width / 2)
    .attr('text-anchor', 'middle');
}
