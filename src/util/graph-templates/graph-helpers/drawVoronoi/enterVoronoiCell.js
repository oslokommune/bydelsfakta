export default function(enter) {
  const g = enter.append('g');
  g.append('path');
  g.append('rect');
  g.append('circle');
  g.append('text');
  return g;
}
