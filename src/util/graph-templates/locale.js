/**
 * Norwegian date and number formatting.
 */

import { formatLocale } from 'd3';

const timeFormat = {
  dateTime: '%A %e %B %Y %H:%M:%S',
  date: '%d.%m.%Y',
  time: '%H:%M:%S',
  periods: ['AM', 'PM'],
  days: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
  shortDays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
  months: [
    'Januar',
    'Februar',
    'Mars',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
};

const norwegianLocale = formatLocale({
  decimal: ',',
  thousands: ' ',
  grouping: [3],
  currency: ['', ' kr'],
  percent: '%',
});

const tableLocale = formatLocale({
  decimal: ',',
  thousands: ' ',
  grouping: [3],
  currency: ['', ' kr'],
  percent: ' ',
});

export { timeFormat, norwegianLocale, tableLocale };
