// without FUNCTION IMPLEMENTATION
const without = function(arr, rm) {
  let arr2 = arr.slice()
  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < rm.length ; j++){
      if (arr[i] === rm[j]) {
        arr2.splice(i, 1);
    }
  }
  } return arr2
}

// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length ; i++) {
    if (actual[i] !== expected[i]) {
      return `${actual} not equal to ${expected}`
    }
  } return `${actual} equal to ${expected}`
}

// assertEqual FUNCTION IMPLEMENTATION
// const assertArraysEqual = function(actual, expected) {
//   if (actual === expected){
//   console.log(`Assertion Passed: ${actual} === ${expected}`)
//   }else{
//     console.log(`Assertion Failed: ${actual} !=== ${expected}`)
//   }
// };

// TEST CODE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(eqArrays(words, ["hello", "world", "lighthouse"]));