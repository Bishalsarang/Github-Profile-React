/**
 * Utils/index.js: This file contains utilities function.
 *
 */
import moment from 'moment';

/**
 * IsObjectEmpty: Utility function to check if an object is empty.
 *
 * @param {Object} obj
 */
export function isObjectEmpty(obj) {
  return JSON.stringify(obj) === '{}';
}

/**
 * IsArrayEmpty: Utility Function to check if an array is empty.
 *
 * @param {Array} arr
 */
export function isArrayEmpty(arr) {
  return arr.length === 0;
}

/**
 * GetDayMonth: Returns Date in Word format.
 * Eg: Aug 1st, 2019.
 *
 * @param {String} date
 */
export function getDayMonth(date) {
  return moment(date).format('MMMM, Do YYYY');
}
