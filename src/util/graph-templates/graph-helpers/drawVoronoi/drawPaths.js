import d3 from '@/assets/d3';

export default function (selection) {
  const path = selection
    .select('path')
    .attr('d', (d) => `M${d.join('L')}Z`)
    .attr('fill-opacity', 0);

  // Handle mouse interactions
  path.on('mouseenter', ({ currentTarget }) => {
    const parent = d3.select(currentTarget.parentNode);
    parent.select('rect').attr('opacity', 1);
    parent.select('text').attr('opacity', 1);
    parent.select('circle').attr('opacity', 1);
  });
  path.on('mouseleave', ({ currentTarget }) => {
    const parent = d3.select(currentTarget.parentNode);
    parent.select('rect').attr('opacity', 0);
    parent.select('text').attr('opacity', 0);
    parent.select('circle').attr('opacity', 0);
  });
}
