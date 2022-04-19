// assertArraysEqual  FUNCTION IMPLEMENTATION
const assertArraysEqual  = require('../assertArraysEqual');

// flatten FUNCTION IMPLEMENTATION
const flatten = require('../flatten');

//TEST
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[ 1, 2, 3, 4, 5, 6 ]);