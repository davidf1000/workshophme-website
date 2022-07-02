import { Tool, ToolRent } from '../components/rent/rent.types';

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

export const calculateBetweenTwoDate = (date1: Date, date2: Date): number[] => {
  let seconds = Math.floor((date2.getTime() - date1.getTime()) / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  // bulatkan jam keatas
  if (minutes > 0) {
    hours += 1;
  }
  return [days, hours, minutes, seconds];
};

export const calculatePrices = (
  buys: ToolRent[],
  tools: Tool[],
  days: number,
  hours: number,
): number => {
  // harga = hargahari + hargajam
  // hargahari = qty * hari*hargaperhari
  // hargajam = qty * jam*hargaperjam
  // jika hargajam > hargaperhari, then hargajam = hargaperhari

  let sum = 0;
  buys.map((item) => {
    const find = tools.find((x) => x.id === item.toolId);
    if (!find) return;
    let totalDayPrice = item.quantity * find.priceDay * days;
    let totalHourPrice = item.quantity * find.priceHour * hours;
    if (totalHourPrice > find.priceDay) {
      totalHourPrice = find.priceDay;
    }
    const sumForThisItem = Math.ceil(totalDayPrice + totalHourPrice);
    sum += sumForThisItem;
  });
  return sum;
};