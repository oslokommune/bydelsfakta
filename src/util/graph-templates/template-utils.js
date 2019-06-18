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

    const computedWidth = this.getTextWidth(str, size, weight);

    const overflowingCharacters = Math.max(str.length - Math.floor((width / computedWidth) * str.length), 0);

    if (overflowingCharacters) {
      str = str.substring(0, str.length - overflowingCharacters - 1);
      str += '...';
    }

    return str;
  },

  getTextWidth: function(str, size = 14, weight = 400) {
    let computedWidth;

    // create placeholder svg
    const svg = d3.select('body').append('svg');

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

  drawTable: function(self, head, body, options = {}) {
    const method = options.method || 'value';
    const hideFootnote = options.hideFootnote || false;

    const thead = self.table.select('thead');
    const tbody = self.table.select('tbody');

    if (hideFootnote) {
      self.table.classed('hide-footnote', true);
      d3.select(self.table.node().parentNode)
        .select('.table-footnote')
        .classed('hide-footnote', true);
    }

    thead.selectAll('*').remove();
    tbody.selectAll('*').remove();

    const hRow1 = thead.append('tr');
    const hRow2 = thead.append('tr');

    hRow1
      .selectAll('th')
      .data(head[0])
      .join('th')
      .attr('rowspan', (d, i) => (i === 0 ? 2 : 1))
      .attr('colspan', (d, i) => (i > 0 ? head[1].length : 1))
      .attr('scope', 'col')
      .classed('border-cell', (d, i) => i > 0)
      .text(d => d)
      .attr('id', (d, i) => `${self.data.meta.heading}_th_1_${i}`);

    hRow2
      .selectAll('th')
      .data(head[0].flatMap((d, i) => (i > 0 ? head[1] : [])))
      .join('th')
      .classed('border-cell', (d, i) => i % head[1].length === 0)
      .text(d => d)
      .attr('id', (d, i) => `${self.data.meta.heading}_th_2_${i}`);

    const rows = tbody
      .selectAll('tr')
      .data(body)
      .join('tr');

    // key cell
    rows
      .selectAll('th')
      .data(d => [d.key])
      .join('th')
      .attr('scope', 'row')
      .text(d => d);

    // Value cells
    rows
      .selectAll('td')
      .data(d => d.values)
      .join('td')
      .classed('border-cell', (d, i) => i % head[1].length === 0)
      .text(d => self.format(d, method, false, true));
  },
};

export default util;
