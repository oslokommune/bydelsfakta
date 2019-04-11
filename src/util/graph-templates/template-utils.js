/**
 * Utility methods for commonly used operations in the graph templates.
 */

import d3 from '@/assets/d3';
import router from '../../router';
import allDistricts from '../../config/allDistricts';

const util = {
  truncate: function(str, width, size = 14, weight = 400) {
    if (!str) return;

    width = width.length === 2 ? width[1] - width[0] : width;

    let computedWidth = this.getTextWidth(str, size, weight);

    let overflowingCharacters = Math.max(str.length - Math.floor((width / computedWidth) * str.length), 0);

    if (overflowingCharacters) {
      str = str.substring(0, str.length - overflowingCharacters - 1);
      str += '...';
    }

    return str;
  },

  getTextWidth: function(str, size = 14, weight = 400) {
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

    return computedWidth;
  },

  capitalize: function(str) {
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
  },

  goto: function(geo) {
    let district = allDistricts.find(d => d.value === geo.geography);
    const topic = router.currentRoute.params.topic;

    if (geo.geography === 'Oslo i alt') {
      district = {
        uri: 'alle',
      };
    }

    if (!district || !topic) return;

    router.push({
      name: 'Topic',
      params: {
        district: district.uri,
        topic,
      },
    });
  },

  allDistricts: allDistricts,
};

export default util;
