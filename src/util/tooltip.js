import { select, event } from 'd3';

const body = select('body');

// Creates DOM elements for generic tooltip
export const showTooltipOver = (str, delay = 0) => {
  const tooltip = body
    .append('div')
    .attr('class', 'tooltip')
    .attr('aria-hidden', true)
    .html(str)
    .style('top', '-30px')
    .style('left', function () {
      const div = select(this).node().getBoundingClientRect().width;
      return `${div / -2}px`;
    });

  setTimeout(() => {
    tooltip.classed('showTooltip', true);
  }, delay);
};

export const showTooltipMove = () => {
  body.select('div.tooltip').style('transform', `translate(${event.pageX}px, ${event.pageY}px)`);
};

export const hideTooltip = () => {
  body.select('div.tooltip').remove();
};
