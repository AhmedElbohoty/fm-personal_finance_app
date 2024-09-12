export function formatPercentage(num: number) {
  let precision = num < 10 ? 3 : 4;

  if (Number.isInteger(num)) precision--;

  return num.toPrecision(precision);
}
