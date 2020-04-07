import {
  createRowElements,
  updateRowBox,
  updateRowGeography,
  updateRowMedianText,
  updateRowMeanText,
  updateRowMeanRect,
  updateRowMedianRect,
  updateRowFill,
  updateRowDivider,
} from '@/util/graph-templates/graph-helpers/boxplotHelpers';

// Update the contents for each row on each render
export default function() {
  const rows = this.canvas
    .selectAll('g.row')
    .data(this.data.data)
    .join(createRowElements.bind(this));

  rows
    .transition()
    .duration(this.duration)
    .attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

  rows
    .call(updateRowBox.bind(this))
    .call(updateRowGeography.bind(this))
    .call(updateRowMedianText.bind(this))
    .call(updateRowMeanText.bind(this))
    .call(updateRowMeanRect.bind(this))
    .call(updateRowMedianRect.bind(this))
    .call(updateRowFill.bind(this))
    .call(updateRowDivider.bind(this));
}
