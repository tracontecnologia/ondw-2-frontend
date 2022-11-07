import { DateTime } from 'luxon';

function toFormat(date: string, format: string = 'dd/MM/yyyy') {
  return DateTime.fromISO(date).toUTC().toFormat(format);
}

export const DateHelper = {
  toFormat,
};
