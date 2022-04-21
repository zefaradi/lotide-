// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

// assertArraysEqual  FUNCTION IMPLEMENTATION
const assertArraysEqual = require('./assertArraysEqual');

// without FUNCTION IMPLEMENTATION
const without = function(arr, rm) {
  let arr2 = [];
  arr.forEach(item => {
    if (!rm.includes(item)) {
      arr2.push(item);
    }
  });
  return arr2;
};

module.exports = without;