// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length ; i++) {
    if (actual[i] !== expected[i]) {
      return false
      break
    }
  } return true
}

// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
  console.log(`Assertion Passed: ${actual} === ${expected}`)
  }else{
    console.log(`Assertion Failed: ${actual} !=== ${expected}`)
  }
};

// TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [3, 2, 1]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)