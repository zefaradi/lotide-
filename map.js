// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

// Map FUNCTION IMPLEMENTATION
const map = function (array,callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;