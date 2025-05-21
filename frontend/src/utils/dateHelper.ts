import moment from 'moment-timezone';

export const dateFormat = (
  date: string,
  format: string,
  tz = 'Asia/Manila',
) => {
  return moment(date).tz(tz).format(format);
};
