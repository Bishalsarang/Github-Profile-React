/**
 * utils.js
 * This file contains utilities function
 */
import moment from 'moment';

export function isObjectEmpty(obj) {
  return JSON.stringify(obj) === '{}';
}

export function isArrayEmpty(arr) {
  return arr.length === 0;
}

export function getDayMonth(date) {
  return moment(date).format('MMMM, Do YYYY');
}
