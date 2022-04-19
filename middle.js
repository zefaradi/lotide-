// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

// assertArraysEqual  FUNCTION IMPLEMENTATION
const assertArraysEqual = require('./assertArraysEqual');


// middle FUNCTION IMPLEMENTATION
const middle = function(arr) {
  let newArr = [];
  let index;
  if (arr.length <= 2) {
    return newArr;
  } else if (arr.length % 2 !== 0) {
    index = Math.round(arr.length / 2) - 1;
    newArr.push(arr[index]);
    return newArr;
  } else {
    index = Math.round(arr.length / 2);
    newArr.push(arr[index - 1 ], arr[index]);
    return newArr;
  }
};

module.exports = middle;
