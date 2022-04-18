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


// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);