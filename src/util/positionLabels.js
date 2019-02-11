function avoidCollisions(data, height) {
  let spacing = 15;
  let walk = 2;

  data = data.map(d => {
    d.start = d.y;
    d.end = d.y + spacing;
    return d;
  });
  let collision = true;
  while (collision) {
    collision = false;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i].end > data[i + 1].start) {
        if (data[i].start > 0) {
          data[i].start -= walk;
          data[i].end -= walk;
        }
        if (data[i + 1].end < height) {
          data[i + 1].start += walk;
          data[i + 1].end += walk;
        }
        collision = true;
      }
    }
  }
  return data;
}

export default avoidCollisions;
