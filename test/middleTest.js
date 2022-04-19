// Middle, assertArraysEqual and eqArrays FUNCTION IMPLEMENTATION

// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');
// const middle = require('../middle');

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });

  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

});


// // TEST CODE
// assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);