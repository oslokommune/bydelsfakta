import { closeButton } from '@/util/graph-templates/graph-helpers';

export default function() {
  this.canvas.append('g').attr('class', 'columns');
  this.canvas.append('g').attr('class', 'rows');

  // Create and initialise the close button
  this.close = closeButton.init.call(this);
}
