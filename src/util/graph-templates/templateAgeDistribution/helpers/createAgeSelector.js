import { select } from 'd3';
import ageRanges from '@/config/ageRanges';

// Creates the styled age selector as normal HTML
// as sibling element to the SVG.
export default function() {
  const parent = select(this.svg.node().parentNode.parentNode);
  this.dropDownParent = parent
    .insert('div')
    .attr('class', 'graph__dropdown')
    .attr('aria-hidden', true);

  this.dropDownParent
    .insert('label')
    .attr('for', 'age_selector')
    .attr('class', 'graph__dropdown__label')
    .html('Velg aldersgruppe');

  const selectElement = this.dropDownParent
    .insert('select')
    .attr('aria-hidden', true)
    .attr('id', 'age_selector')
    .attr('aria-hidden', true)
    .attr('class', 'child graph__dropdown__select')
    .attr('data-no-dragscroll', true);

  selectElement
    .selectAll('option')
    .data(ageRanges)
    .join('option')
    .attr('disabled', d => d.disabled)
    .attr('value', d => d.range)
    .text(d => d.label);

  // Add eventlistener to the selector, and capture the value
  // and pass it on when re-rendering the chart
  selectElement.on('change', (d, i, j) => {
    this.extent = JSON.parse(j[i].value);
    this.render(this.data, { method: this.method, useDropdown: true });
  });
}
