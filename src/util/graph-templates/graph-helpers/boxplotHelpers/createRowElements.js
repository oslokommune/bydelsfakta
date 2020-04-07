import { color } from '@/util/graph-templates/colors';
import { initRowBox } from './rowBox';
import { initRowGeography } from './rowGeography';
import { initRowMedianText } from './rowMedianText';
import { initMeanText } from './rowMeanText';
import { initMeanRect } from './rowMeanRect';
import { initRowMedianRect } from './rowMedianRect';
import { initRowFill } from './rowFill';

export default function(enter) {
  const g = enter
    .append('g')
    .classed('row', true)
    .attr('transform', (d, i) => `translate(0, ${i * this.rowHeight})`);

  g.append('rect').call(initRowFill.bind(this));
  g.append('rect').call(initRowDivider.bind(this));
  g.append('text').call(initRowGeography.bind(this));
  g.append('rect').call(initRowBox.bind(this));
  g.append('text').call(initRowMedianText.bind(this));
  g.append('rect').call(initRowMedianRect.bind(this));
  g.append('text').call(initMeanText.bind(this));
  g.append('rect').call(initMeanRect.bind(this));

  return g;
}

function initRowDivider(selection) {
  selection
    .attr('class', 'divider')
    .attr('fill', color.purple)
    .attr('x', -this.padding.left)
    .attr('height', 1)
    .attr('y', this.rowHeight);
}
