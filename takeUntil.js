// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

// takeUntil FUNCTION IMPLEMENTATION
const takeUntil = function(array, callback) {
  // ...
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results
    }
    results.push(item);
  }
  return results;
}

module.exports = takeUntil