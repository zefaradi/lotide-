// assertEqual FUNCTION IMPLEMENTATION

const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length ; i++) {
    if (actual[i] !== expected[i]) {
      return `${actual} not equal to ${expected}`
    }
  } return `${actual} equal to ${expected}`
}


// Middle FUNCTION IMPLEMENTATION
const middle = function(arr) {
  let newArr = [];
  let index;
  if (arr.length <= 2) {
    return newArr
  } else if (arr.length % 2 !== 0) {
    index = Math.round(arr.length/2) - 1;
    newArr.push(arr[index])
    return newArr
  }else {
    index = Math.round(arr.length/2)
    newArr.push(arr[index -1 ]);
    newArr.push(arr[index]);
    return newArr
  }
}


// TEST CODE
console.log(middle([1,2,3,4,5,6]));
console.log((eqArrays([1,2,3,4,5,6], [1,2,3,4,5,6])));