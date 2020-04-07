import generateVoronoiData from './generateVoronoiData';
import enterVoronoiCell from './enterVoronoiCell';
import styleCircles from './styleCircles';
import styleRects from './styleRects';
import styleTexts from './styleTexts';
import drawPaths from './drawPaths';

export default function(container, flattenData, shape, dataAccessor) {
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
