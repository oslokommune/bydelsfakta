import d3 from '@/assets/d3';

export default function(selection) {
  const path = selection
    .select('path')
    .attr('d', d => `M${d.join('L')}Z`)
    .attr('fill-opacity', 0);

  // Handle mouse interactions
  path.on('mouseenter', (d, i, j) => {
    const parent = d3.select(j[i].parentNode);
    parent.select('rect').attr('opacity', 1);
    parent.select('text').attr('opacity', 1);
    parent.select('circle').attr('opacity', 1);
  });
  path.on('mouseleave', (d, i, j) => {
    const parent = d3.select(j[i].parentNode);
    parent.select('rect').attr('opacity', 0);
    parent.select('text').attr('opacity', 0);
    parent.select('circle').attr('opacity', 0);
  });
}
