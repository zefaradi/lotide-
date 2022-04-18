// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length){
    return false
  }
  for (let i = 0; i < actual.length ; i++) {
    if (actual[i] !== expected[i]) {
      return false
      break
    }
  } return true
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keyObject1 = Object.keys(object1);
  const keyObject2 = Object.keys(object2);
  // console.log("keyObject1: ", keyObject1, "keyObject2: ", keyObject2)
  if (keyObject1.length !== keyObject2.length){
    return false
  } for (key of keyObject1) {
    // console.log(object1[key], object2[key])
    if (Array.isArray(object1[key])) {
      return (eqArrays(object1[key], object2[key]));
    }
    if (object1[key]!== object2[key]){
      return false
    }
  }
  return true
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`)
  }
};

// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);