import * as d3 from 'd3';

export const color = {
  yellow: '#F8C66B',
  light_yellow: '#F8F0DC',
  purple: '#292858',
  grey: '#cccccc',
  light_grey: '#F0F1F1',
  red: '#FF8174',
  blue: '#6EE9FF',
  positive: d3.interpolateRdBu(0.9),
  negative: d3.interpolateRdBu(0.1),
};

export const interpolator = d3.interpolateRdBu;
