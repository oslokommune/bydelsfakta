import { select, selectAll, event, selection } from 'd3-selection';
import { scaleLinear, scaleTime, scaleBand, scaleOrdinal } from 'd3-scale';
import { axisTop, axisBottom, axisLeft } from 'd3-axis';
import { format } from 'd3-format';
import { max, min, sum } from 'd3-array';
import { timeFormat, timeParse } from 'd3-time-format';
import { line } from 'd3-shape';
import { brushX, move, extent, on } from 'd3-brush';
import * as d3 from 'd3';

// export default {
//   select,
//   selectAll,
//   event,
//   selection,
//   scaleLinear,
//   scaleTime,
//   scaleBand,
//   scaleOrdinal,
//   axisTop,
//   axisBottom,
//   axisLeft,
//   format,
//   max,
//   min,
//   sum,
//   timeFormat,
//   timeParse,
//   line,
//   brushX,
//   move,
//   extent,
//   on,
// };

export default d3;
