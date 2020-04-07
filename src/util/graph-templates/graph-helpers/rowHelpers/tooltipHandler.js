import { showTooltipOver, showTooltipMove, hideTooltip } from '@/util/tooltip';

export default function(selection) {
  selection
    .on('mouseover', d => showTooltipOver(this.format(d[this.method], this.method)))
    .on('mousemove', showTooltipMove)
    .on('mouseleave', hideTooltip);
}
