import { color } from '../../colors';

export default function (selection) {
  const g = selection.append('g').attr('class', 'column');
  g.append('rect').call(styleColumnBackground);
  g.append('rect').call(styleClickTrigger);
  g.append('rect').call(styleArrow);
  g.append('text').call(styleColumnHeading);
  g.append('text').call(styleColumnSubheading);
  return g;
}

function styleColumnBackground(el) {
  el.attr('fill', color.light_grey).attr('class', 'colFill');
}

function styleClickTrigger(el) {
  el.attr('fill', color.light_grey).attr('class', 'clickTrigger');
}

function styleArrow(el) {
  el.attr('class', 'arrow').attr('width', 1).attr('height', 11);
}

function styleColumnHeading(el) {
  el.attr('class', 'colHeading').attr('transform', 'translate(0, -40)').style('pointer-events', 'none');
}

function styleColumnSubheading(el) {
  el.attr('class', 'colSubheading').attr('transform', 'translate(0, -20)').style('pointer-events', 'none');
}
