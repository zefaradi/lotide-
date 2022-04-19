// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

// assertArraysEqual  FUNCTION IMPLEMENTATION
const assertArraysEqual = require('./assertArraysEqual');

// without FUNCTION IMPLEMENTATION
const without = function(arr, rm) {
  let arr2 = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < rm.length; j++) {
      if (arr[i] === rm[j]) {
        arr2.splice(i, 1);
      }
    }
  } return arr2;
};

module.exports = without;