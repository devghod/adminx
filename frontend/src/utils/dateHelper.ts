import moment from 'moment-timezone';

/**
 * @param date
 * @param format
 * @param tz
 * @returns
 */
export const dateFormat = (
  date: string,
  format: string = 'MM-DD-YYYY',
  tz = 'Asia/Manila',
) => {
  return moment(date).tz(tz).format(format);
};
