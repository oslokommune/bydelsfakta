import { createBoxPlotLegend } from '@/util/graph-templates/graph-helpers/boxplotHelpers';

export default function() {
  this.canvas
    .append('text')
    .attr('class', 'label-median')
    .attr('font-size', 13)
    .attr('y', -40)
    .attr('x', this.width1 + this.gapX + this.width2 / 2)
    .attr('text-anchor', 'middle')
    .text('Aldersfordeling og medianalder');

  this.canvas
    .append('text')
    .attr('class', 'label-mean')
    .attr('font-size', 13)
    .attr('y', -40)
    .attr('x', this.width1 / 2)
    .attr('text-anchor', 'middle')
    .text('Gjennomsnittsalder');

  this.legend = this.canvas
    .append('g')
    .classed('legend', true)
    .call(createBoxPlotLegend.bind(this));
}
