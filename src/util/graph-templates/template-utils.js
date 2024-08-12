/**
 * Utility methods for commonly used operations in the graph templates.
 */

import d3 from '@/assets/d3';
import router from '../../router';
import allDistricts from '../../config/allDistricts';

const util = {
  truncate(str, width, size = 14, weight = 400) {
    if (!str) return null;

    width = width.length === 2 ? width[1] - width[0] : width;

    const computedWidth = this.getTextWidth(str, size, weight);

    const overflowingCharacters = Math.max(str.length - Math.floor((width / computedWidth) * str.length), 0);

    if (overflowingCharacters) {
      str = str.substring(0, str.length - overflowingCharacters - 1);
      str += '...';
    }

    return str;
  },

  getTextWidth(str, size = 14, weight = 400) {
    let computedWidth;

    // create placeholder svg
    const svg = d3.select('body').append('svg');

    svg
      .append('text')
      .text(str)
      .attr('font-size', size)
      .attr('font-weight', weight)
      .each(function () {
        computedWidth = this.getComputedTextLength();
      });
    svg.remove();

    return computedWidth;
  },

  capitalize(str) {
    const arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
  },

  goto(e, geo) {
    let district = allDistricts.find((d) => d.value === geo.geography);
    const { topic } = router.currentRoute.value.params;

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

  allDistricts,

  drawTable(head, body, options = {}) {
    const formatter = options.formatter || this.format;
    const tableElement = this.table;
    const thead = tableElement.select('thead');
    const tbody = tableElement.select('tbody');

    const isMultiLevel = typeof head[1] === 'object';

    const hideFootnote =
      tableElement.node().querySelector('tbody').querySelectorAll('th[data-footnote=true]').length === 0;

    tableElement.classed('hide-footnote', hideFootnote);
    d3.select(tableElement.node().parentNode).select('.table-footnote').classed('hide-footnote', hideFootnote);

    thead.selectAll('*').remove();
    tbody.selectAll('*').remove();

    const hRow1 = thead.append('tr');
    hRow1
      .selectAll('th')
      .data(() => (isMultiLevel ? head[0] : head))
      .join('th')
      .attr('rowspan', (d, i) => (i === 0 && isMultiLevel ? 2 : 1))
      .attr('colspan', (d, i) => {
        if (isMultiLevel) {
          if (i > 0) return head[1].length / (head[0].length - 1);
          return 1;
        }
        return 0;
      })
      .attr('scope', 'col')
      .classed('border-cell', (d, i) => i > 0)
      .text((d) => d);

    if (isMultiLevel) {
      const hRow2 = thead.append('tr');
      hRow2
        .selectAll('th')
        .data(head[1])
        .join('th')
        .classed('border-cell', (d, i) => {
          if (!isMultiLevel) return true;
          const l = head[1].length / (head[0].length - 1);
          return i % l === 0;
        })
        .text((d) => d)
        .attr('scope', 'col');
    }

    const rows = tbody.selectAll('tr').data(body).join('tr');

    // key cell
    rows
      .selectAll('th')
      .data((d) => [d.key])
      .join('th')
      .attr('scope', 'row')
      .text((d) => d)
      .attr('data-footnote', (d) => {
        return d === 'Oslo i alt' && this.isCompare;
      });

    // Value cells
    rows
      .selectAll('td')
      .data((d) => d.values)
      .join('td')
      .classed('border-cell', (d, i) => {
        if (!isMultiLevel) return true;
        const l = head[1].length / (head[0].length - 1);
        return i % l === 0;
      })
      .text((d) => formatter(d, this.method, false, true));
  },
};

export default util;
