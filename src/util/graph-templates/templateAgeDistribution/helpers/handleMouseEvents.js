import { showTooltipOver, showTooltipMove, hideTooltip } from '@/util/tooltip';

export default function(selection) {
  selection
    .on('mouseover', () => showTooltipOver('Dra for å velge alderssegment', 700))
    .on('mousemove', showTooltipMove)
    .on('mouseleave', hideTooltip);
}
