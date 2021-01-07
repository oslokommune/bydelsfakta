import { boxHeight, boxWidth, textLabels } from './_legendConfig';

export default function (selection) {
  selection.call(createBox).call(createMedianLine).call(createTextLabels);
}

const createBox = (selection) => {
  selection
    .attr('opacity', 0.5)
    .append('rect')
    .classed('box', true)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('height', boxHeight)
    .attr('width', boxWidth)
    .attr('rx', 3);

  return selection;
};

const createMedianLine = (selection) => {
  selection
    .append('rect')
    .classed('median', true)
    .attr('height', boxHeight + 8)
    .attr('y', -4)
    .attr('x', boxWidth / 2 - 16)
    .attr('fill', 'black')
    .attr('width', 3);
};

const createTextLabels = (selection) => {
  selection
    .append('text')
    .text(textLabels[0])
    .attr('text-anchor', 'end')
    .attr('x', -10)
    .attr('y', boxHeight - 5);

  selection
    .append('text')
    .text(textLabels[1])
    .attr('x', boxWidth / 2 - 10)
    .attr('y', boxHeight - 5);

  selection
    .append('text')
    .text(textLabels[2])
    .attr('x', boxWidth + 10)
    .attr('y', boxHeight - 5);
};
