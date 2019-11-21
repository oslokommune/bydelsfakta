import d3 from '@/assets/d3';
import { color } from '../colors';
import util from '../template-utils';

export default function drawVoronoi(container, flattenData, shape, dataAccessor) {
  const voronoiData = generateVoronoiData.call(this, flattenData, shape);

  // Draw DOM elements for each voronoi cell
  container
    .selectAll('g')
    .data(voronoiData)
    .join(enterVoronoiCell.bind(this))
    .call(styleCircles.bind(this))
    .call(styleRects.bind(this), dataAccessor)
    .call(styleTexts.bind(this), dataAccessor)
    .call(drawPaths.bind(this));
}

function generateVoronoiData(data, shape) {
  return d3
    .voronoi()
    .extent([[1, 1], shape])
    .x(d => d.x + this.x.bandwidth() / 2)
    .y(d => d.y)
    .polygons(data)
    .filter(Boolean);
}

function enterVoronoiCell(enter) {
  const g = enter.append('g');
  g.append('path');
  g.append('rect');
  g.append('circle');
  g.append('text');
  return g;
}

function styleCircles(selection) {
  selection
    .select('circle')
    .attr('r', 6)
    .attr('cx', d => d.data.x + this.x.bandwidth() / 2)
    .attr('cy', d => d.data.y)
    .attr('opacity', 0)
    .style('pointer-events', 'none')
    .attr('stroke', 'white')
    .attr('stroke-width', 2);
}

function styleRects(selection, dataAccessor) {
  selection
    .select('rect')
    .attr('height', 25)
    .attr('data-value', dataAccessor)
    .attr('width', (d, i, j) => util.getTextWidth(j[i].dataset.value) + 12)
    .attr('x', d => d.data.x + this.x.bandwidth() / 2 - 2)
    .attr('y', d => d.data.y - 26)
    .attr('fill', color.yellow)
    .attr('stroke', 'white')
    .attr('rx', 12.5)
    .attr('opacity', 0)
    .style('pointer-events', 'none');
}

function styleTexts(selection, dataAccessor) {
  selection
    .select('text')
    .attr('x', d => d.data.x + this.x.bandwidth() / 2 + 4)
    .attr('y', d => d.data.y - 8)
    .text(dataAccessor)
    .attr('opacity', 0)
    .style('pointer-events', 'none')
    .style('cursor', 'auto');
}

function drawPaths(selection) {
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
