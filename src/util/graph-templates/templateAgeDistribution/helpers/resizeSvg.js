export default function(selection) {
  const h = this.padding.top + this.height2 + this.yGutter + this.height + this.padding.bottom + this.sourceHeight;
  const w = this.padding.left + this.width + this.padding.right;

  selection.attr('height', h).attr('width', w);
}
