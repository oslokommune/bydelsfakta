import d3 from '@/assets/d3';

const body = d3.select('body');

// Creates DOM elements for generic tooltip
export const showTooltipOver = (str, delay = 0) => {
  const tooltip = body
    .append('div')
    .attr('class', 'tooltip')
    .attr('aria-hidden', true)
    .html(str)
    .style('top', '-30px')
    .style('left', function() {
      const div = d3
        .select(this)
        .node()
        .getBoundingClientRect().width;
      return `${div / -2}px`;
    });

  setTimeout(() => {
    tooltip.classed('showTooltip', true);
  }, delay);
};

export const showTooltipMove = () => {
  body.select('div.tooltip').style('transform', `translate(${d3.event.pageX}px, ${d3.event.pageY}px)`);
};

export const hideTooltip = () => {
  body.select('div.tooltip').remove();
};
