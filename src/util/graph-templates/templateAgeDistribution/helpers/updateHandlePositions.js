import { event, selectAll } from 'd3';
import handleMouseEvents from './handleMouseEvents';

export default function() {
  // pixel range for selected age range
  let s;

  if (event && event.selection) {
    s = event.selection;
  } else {
    s = this.extent.map(this.age);
  }

  // Resize and move both selections to new location
  selectAll('rect.selection').call(updateSelections.bind(this), s);

  selectAll('.handle')
    .call(handleMouseEvents)
    .attr('transform', (d, i) => {
      const offsetX = i === 0 ? -10 : 10;
      return `translate(${offsetX}, 0)`;
    });

  // Move visible handles
  this.handle.attr('transform', d => (d.type === 'e' ? `translate(${s[1]}, -9)` : `translate(${s[0] - 21}, -9)`));
}

function updateSelections(selection, s) {
  selection
    .attr('x', s[0])
    .attr('opacity', 1)
    .attr('width', s[1] - s[0])
    .filter((d, i) => i === 1)
    .call(handleMouseEvents);
}
