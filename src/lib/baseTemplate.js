import d3 from '@/assets/d3';

function Base_Template(svg) {
  this.data = {};
  this.height = 800;
  this.width = 800;
  this.padding = { top: 30, right: 40, bottom: 40, left: 120 };
  this.height2 = 0;
  this.xGutter = 0;
  this.x = d3.scaleLinear();
  this.y = d3.scaleBand();
  this.max = 0;
  this.min = 0;
  this.barHeight = 40;
  this.tabWidth = 120;
  this.tabGap = 10;
  this.strokeWidth = 4;
  this.strokeWidthHighlight = 6;
  this.parseDate = d3.timeParse('%Y-%m-%d');

  // Common operations to be run once a template is initialized
  this.init = function() {
    this.svg = d3
      .select(svg)
      .attr('height', this.height + this.height2 + this.xGutter + this.padding.top + this.padding.bottom)
      .attr('width', this.width + this.padding.left + this.padding.right);

    this.svg.selectAll('*').remove();

    this.heading = this.svg
      .append('text')
      .attr('class', 'heading')
      .attr('font-size', 14)
      .attr('font-weight', 'bold')
      .attr('y', 14)
      .text('loading ...');

    this.heading.append('title').html('tooltip text goes here');

    this.canvas = this.svg
      .append('g')
      .attr('class', 'canvas')
      .attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

    this.xAxis = this.canvas.append('g').attr('class', 'axis x');
    this.yAxis = this.canvas.append('g').attr('class', 'axis y');
    this.x2Axis = this.canvas.append('g').attr('class', 'axis x2');
    this.y2Axis = this.canvas.append('g').attr('class', 'axis y2');

    this.created();
  };

  // Placeholder for operations to be run once a child template is initialized
  this.created = function() {};

  this.render = function() {};
}

const util = {
  color: {
    yellow: '#F8C66B',
    light_yellow: '#F8F0DC',
    purple: '#292858',
    grey: '#cccccc',
    light_grey: '#F0F1F1',
    red: '#FF8174',
    blue: '#6EE9FF',
  },

  formatTicksY_leftAlign: function(el, padding) {
    el.selectAll('.tick text')
      .attr('font-size', 16)
      .attr('x', -padding)
      .attr('text-anchor', 'start');
    el.selectAll('.tick line').attr('opacity', 0);
    el.select('.domain').attr('opacity', 0);
  },

  formatTicksX: function(el) {
    el.selectAll('.tick text').attr('font-size', 12);
    el.select('.domain').attr('opacity', 1);
  },

  truncate: function(str, width, size = 14, weight = 400) {
    width = width.length === 2 ? width[1] - width[0] : width;
    let computedWidth;

    // create placeholder svg
    let svg = d3.select('body').append('svg');

    svg
      .append('text')
      .text(str)
      .attr('font-size', size)
      .attr('font-weight', weight)
      .each(function(d) {
        computedWidth = this.getComputedTextLength();
      });
    svg.remove();

    let overflowingCharacters = Math.max(str.length - Math.floor((width / computedWidth) * str.length), 0);

    if (overflowingCharacters) {
      str = str.substring(0, str.length - overflowingCharacters - 1);
      str += '...';
    }

    return str;
  },
};

export { Base_Template, util };
