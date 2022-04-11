// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length ; i++) {
    if (actual[i] !== expected[i]) {
      return false
    }
  } return true
}

// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
  console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !=== ${expected}`)
  }
};

// Map FUNCTION IMPLEMENTATION
const map = function (array,callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
// console.log(results1);

// TEST CODE

assertEqual(words, results1)