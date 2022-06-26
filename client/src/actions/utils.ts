export const numberToIDR = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

export const getCurrentDateFormatted = (): Date => {
  const date = new Date();
  const dateCopy = new Date(date.getTime());
  dateCopy.setHours(0, 0, 0, 0);
  return dateCopy;
};

export const range = (
  start: number,
  stop: number,
  step: number = 1,
): number[] =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);
