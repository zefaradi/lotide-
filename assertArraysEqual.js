// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = require('./eqArrays');

// assertArraysEqual  FUNCTION IMPLEMENTATION
const assertArraysEqual  = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
    
};

module.exports = assertArraysEqual;