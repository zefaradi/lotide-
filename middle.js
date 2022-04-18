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


// Middle FUNCTION IMPLEMENTATION
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


// TEST CODE
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);