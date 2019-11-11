import d3 from '@/assets/d3';
import { color } from '../colors';
import util from '../template-utils';

export default function drawVoronoi(container, scale, key) {
  const flattenData = generateFlattenData.call(this, this.filteredData, scale, key);
  const voronoiData = generateVoronoiData.call(this, flattenData);

  // Draw DOM elements for each voronoi cell
  container
    .select('g.voronoi')
    .selectAll('g')
    .data(voronoiData)
    .join(enterVoronoiCell.bind(this))
    .call(styleCircles.bind(this))
    .call(styleRects.bind(this))
    .call(styleTexts.bind(this))
    .call(drawPaths.bind(this));
}

function generateFlattenData(data, scale, key) {
  return data.map(row => {
    return {
      x: this.x(row.date),
      y: scale(row[key]),
      label: `${row[key]}`,
    };
  });
}

function generateVoronoiData(data) {
  return d3
    .voronoi()
    .extent([[1, 1], [this.width, this.height2]])
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

function styleRects(selection) {
  selection
    .select('rect')
    .attr('height', 25)
    .attr('width', d => util.getTextWidth(d.data.label) + 12)
    .attr('x', d => d.data.x + this.x.bandwidth() / 2 - 2)
    .attr('y', d => d.data.y - 26)
    .attr('fill', color.yellow)
    .attr('stroke', 'white')
    .attr('rx', 12.5)
    .attr('opacity', 0)
    .style('pointer-events', 'none');
}

function styleTexts(selection) {
  selection
    .select('text')
    .attr('x', d => d.data.x + this.x.bandwidth() / 2 + 4)
    .attr('y', d => d.data.y - 8)
    .text(d => d.data.label)
    .attr('opacity', 0)
    .style('pointer-events', 'none')
    .style('cursor', 'auto');
}

function drawPaths(selection) {
  const path = selection
    .select('path')
    .attr('d', d => 'M' + d.join('L') + 'Z')
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
