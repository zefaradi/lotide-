// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  } return true;
};

// assertArraysEqual  FUNCTION IMPLEMENTATION
const assertArraysEqual  = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
    
};

// TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [3, 2, 1]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
assertArraysEqual([1, 2, 3], [1, 2, 3]);