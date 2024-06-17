import { voronoi } from 'd3-voronoi';

export default function (data, shape) {
  // TODO: The `d3-voronoi` module is now obsolete, and d3@6 bundles the `d3-delaunay` module instead.
  // It can still be loaded as an independent module, but should be replaced by `d3-delaunay`. The
  // API, algorithms, and data structure have been changed.
  // See https://observablehq.com/@d3/d3v6-migration-guide#delaunay.
  return voronoi()
    .extent([[1, 1], shape])
    .x((d) => d.x + this.x.bandwidth() / 2)
    .y((d) => d.y)
    .polygons(data)
    .filter(Boolean);
}
