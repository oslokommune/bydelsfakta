import { drawVoronoi } from '../graph-helpers';
import generateFlattenData from './generateFlattenData';
import drawLines from './drawLines';
import updateZeroLines from './updateZeroLines';

export default function(el, opt) {
  const { scale } = opt;
  const { clipId } = opt;

  // Update clip paths
  this.defs.select(`#${clipId}-${this.salt}`).call(updateClipPaths.bind(this), scale);

  // Update lines (and attach clipId)
  el.call(drawLines.bind(this), scale, clipId);

  // Update voronoi for chart
  const flattenData = generateFlattenData.call(this, this.filteredData, scale, clipId);
  const dataAccessor = d => d.data.label;
  el.select('.voronoi').call(drawVoronoi.bind(this), flattenData, [this.width, this.lineChartHeight], dataAccessor);

  // Update zero line position
  el.select('.zero').call(updateZeroLines.bind(this), scale);
}

function updateClipPaths(selection, scale) {
  selection
    .select('rect')
    .attr('width', this.width)
    .attr('y', scale(0))
    .attr('height', Math.abs(this.lineChartHeight - scale(0)));
}
