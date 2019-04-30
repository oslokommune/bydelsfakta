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
  this.padding = { top: 70, left: 1, right: 1, bottom: 30 };
  this.width = this.parentWidth() - this.padding.left - this.padding.right;
  this.nodes;
  this.links;
  this.labels;
  this.sankeyData;
  this.order = [
    { id: 'immigrant_type', disabled: false, label: 'Innvandrer' },
    { id: 'moving_type', disabled: false, label: 'Type' },
    { id: 'age', disabled: false, label: 'Alder' },
  ];

  this.render = function(data, options = {}) {
    if (!this.commonRender(data, options)) return;

    if (options.order) {
      this.order = options.order;
    }

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
    drawControls(this);

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
    this.canvas.append('g').attr('class', 'controls');
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

function parseData(data, orderObject) {
  const order = orderObject.filter(d => !d.disabled).map(d => d.id);

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

function drawControls(self) {
  const g = self.canvas.select('g.controls').attr('transform', `translate(0, ${self.height})`);
  const items = g
    .selectAll('g.item')
    .data(self.order, d => d.id)
    .join(enter => {
      let g = enter.append('g');

      g.append('rect').attr('class', 'bg');
      const tick = g.append('g').attr('class', 'tick');
      tick.append('rect').attr('class', 'bigbox');
      tick.append('rect').attr('class', 'smallbox');

      g.append('text');
      return g;
    })
    .attr('class', 'item')
    .style('cursor', 'move')
    .call(styleControllerItem);

  items.transition().attr('transform', (d, i) => `translate(${i * 140 - 2}, 0)`);

  items.call(
    d3
      .drag()
      .on('start', dragStart)
      .on('drag', dragging)
      .on('end', (d, i, j) => dragEnd(d, i, j, self))
  );

  items.on('click', function(d, i, j) {
    const currentlyDisabled = self.order.filter(d => !d.disabled).length;
    if (currentlyDisabled === 1 && !d.disabled) return;

    d.disabled = !d.disabled;
    d3.select(this).call(styleControllerItem);
    self.order = getOrder(j);
    self.render(self.data);
  });
}

function dragStart(d, i, j) {
  d3.selectAll(j).attr('opacity', 0.4);
  d3.select(this)
    .attr('opacity', 1)
    .raise();
}

function dragging(d, i, j) {
  const pos = d3.event.x;
  if (pos < -40) return;
  d3.select(this).attr('transform', `translate(${pos - 70}, 0)`);
}

function dragEnd(d, i, j, self) {
  d3.selectAll(j).attr('opacity', 1);
  let newOrder = getOrder(j);

  if (self.order.map(d => d.id).join('') === newOrder.map(d => d.id).join('')) {
    resetItemsPosition(j);
    return;
  }

  self.order = newOrder;
  self.render(self.data);
}

// Finds the translated x-position of
// the provided element
function getXPos(el) {
  return d3
    .select(el)
    .attr('transform')
    .split('(')[1]
    .split(',')[0];
}

function resetItemsPosition(el) {
  d3.selectAll(el)
    .transition()
    .attr('transform', (d, i) => `translate(${i * 140 - 2}, 0.5)`);
}

function styleControllerItem(el) {
  const tickbox = el.select('g.tick');

  tickbox
    .select('.bigbox')
    .attr('height', 14)
    .attr('width', 14)
    .attr('fill', 'white')
    .attr('stroke', color.purple)
    .attr('rx', 2)
    .attr('x', 9)
    .attr('y', 8);

  tickbox
    .select('.smallbox')
    .attr('fill', color.purple)
    .attr('rx', 1)
    .transition()

    .attr('x', d => {
      return d.disabled ? 16 : 12;
    })
    .attr('y', d => {
      return d.disabled ? 15 : 11;
    })
    .attr('height', d => {
      return d.disabled ? 0 : 8;
    })
    .attr('width', d => {
      return d.disabled ? 0 : 8;
    });

  el.select('rect.bg')
    .attr('width', 136)
    .attr('x', 2)
    .attr('height', 30)
    .attr('stroke', d => (d.disabled ? color.purple : 'white'))
    .attr('stroke-opacity', d => (d.disabled ? 0.5 : 1))
    .attr('fill', d => (d.disabled ? '#eee' : color.purple));

  el.select('text')
    .attr('x', 28)
    .attr('y', 20)
    .attr('fill', d => (d.disabled ? color.purple : 'white'))
    .attr('opacity', d => (d.disabled ? 0.8 : 1))
    .attr('font-weight', 500)
    .style('pointer-events', 'none')
    .text(d => d.label);
}

function getOrder(el) {
  return el
    .map(d => d)
    .sort((a, b) => getXPos(a) - getXPos(b))
    .map(d => d.__data__);
}
