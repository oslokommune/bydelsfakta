import { max, quantile, mean } from 'd3';

import { positionLegend } from '@/util/graph-templates/graph-helpers/boxplotHelpers';

export default function(data, options = {}) {
  if (!this.commonRender(data, options)) return;

  this.width = max([this.width, 360]);

  // Bind quartiles, mean and median to each geography
  data.data.forEach(district => {
    if (district.low) return district;
    const ages = district.values.flatMap(obj => [...Array(obj.value)].fill(+obj.age));
    district.low = quantile(ages, 0.25);
    district.median = quantile(ages, 0.5);
    district.high = quantile(ages, 0.75);
    district.mean = mean(ages);
    return district;
  });

  this.svg
    .attr('height', this.padding.top + this.height + this.padding.bottom + this.sourceHeight)
    .attr('width', this.width + this.padding.left + this.padding.right);

  this.legend.call(positionLegend.bind(this));

  this.drawScales();
  this.drawAxisLabels();
  this.drawRows();
  this.drawTable();
}
