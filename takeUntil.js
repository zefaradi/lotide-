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

const takeUntil = function(array, callback) {
  // ...
  const results = [];
  let count = 0;
  for (let item of array) {
    if (callback(item)) {
      return results
    }
    results.push(item);
  }
  return results;
}

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertEqual(data1,results1);
assertEqual(data2,results2);