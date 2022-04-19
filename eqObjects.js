// eqArrays FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  } return true;
};

// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keyObject1 = Object.keys(object1);
  const keyObject2 = Object.keys(object2);
  if (keyObject1.length !== keyObject2.length) {
    return false;
  } for (let key of keyObject1) {
    if (Array.isArray(object1[key])) {
      return (eqArrays(object1[key], object2[key]));
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = {eqArrays, eqObjects};