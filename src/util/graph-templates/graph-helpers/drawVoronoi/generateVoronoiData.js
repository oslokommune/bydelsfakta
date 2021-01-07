import d3 from '@/assets/d3';

export default function (data, shape) {
  return d3
    .voronoi()
    .extent([[1, 1], shape])
    .x((d) => d.x + this.x.bandwidth() / 2)
    .y((d) => d.y)
    .polygons(data)
    .filter(Boolean);
}
