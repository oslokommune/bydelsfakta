import variations from './_variations';

/**
 * Helper function to reduce the data objects.
 * `this.variant` controls which data points should
 * be displayed in each graph section
 */
export default function(obj) {
  if (!Object.keys(variations).includes(this.variant)) {
    throw new Error('Missing or misspelled graph variant');
  }

  const { date } = obj;
  const lineData1 = variations[this.variant].lineData1.data(obj);
  const lineData2 = variations[this.variant].lineData2.data(obj);
  const barData = variations[this.variant].barData.data(obj);

  return { date, barData, lineData1, lineData2 };
}
