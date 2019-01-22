import d3 from '@/assets/d3';

const util = {
  color: {
    yellow: '#F8C66B',
    light_yellow: '#F8F0DC',
    purple: '#292858',
    grey: '#cccccc',
    light_grey: '#F0F1F1',
    red: '#FF8174',
    blue: '#6EE9FF',
    positive: '#06AFCD',
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
      .each(function() {
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

export default util;
