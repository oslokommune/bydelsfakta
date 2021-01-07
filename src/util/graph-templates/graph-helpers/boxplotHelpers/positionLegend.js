import { boxWidth } from './_legendConfig';

export default function (selection) {
  const offsetX = -this.padding.left + (this.padding.left + this.width + this.padding.right) - (boxWidth + 120);
  const offsetY = this.height + 30;

  selection.attr('transform', `translate(${[offsetX, offsetY]})`);
}
