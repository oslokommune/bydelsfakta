export default function() {
  if (this.parentWidth() < this.minWidth) {
    this.upper.attr('opacity', 0);
    this.middle.attr('opacity', 0);
    this.yGutter = 0;
    this.dropDownParent.style('top', '32px');
  } else {
    this.upper.attr('opacity', 1);
    this.middle.attr('opacity', 1);
    this.yGutter = 130;
    this.dropDownParent.style('top', 'none');
  }
}
