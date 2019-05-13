import d3 from '@/assets/d3';

const tooltip = d3
  .select('body')
  .append('div')
  .attr('class', 'tooltip')
  .attr('aria-hidden', true);

// Creates DOM elements for generic tooltip
export const showTooltipOver = (str, delay = 0) => {
  setTimeout(() => {
    tooltip.html(str).classed('showTooltip', true);
  }, delay);
};

export const showTooltipMove = () => {
  tooltip
    .style('top', `${d3.event.pageY - 30}px`)
    .style('left', `${d3.event.pageX}px`)
    .style('transform', function() {
      const div = d3
        .select(this)
        .node()
        .getBoundingClientRect().width;
      return `translate(${-div / 2}px, 0px)`;
    });
};

export const hideTooltip = () => {
  tooltip.classed('showTooltip', false);
};
