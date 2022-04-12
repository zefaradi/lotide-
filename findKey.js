// ASSERT EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected){
      console.log(`Assertion Passed: ${actual} === ${expected}`)
  }else{
      console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
};

// FIND KEY BY VALUE FUNCTION
const findKey = (object, callback) => {
  for (const key in object){
    if (callback(object[key])) {
      return key
    }
  }
}

// TEST CASES
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

// const a = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// console.log(a["noma"].stars)