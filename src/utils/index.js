/**
 * utils.js
 * This file contains utilities function
 */

export function isObjectEmpty(obj) {
  return JSON.stringify(obj) === '{}';
}

export function isArrayEmpty(arr) {
  return arr.length === 0;
}
