// REQUIRING ASSERT EQUAL
const assertEqual = require('./assertEqual');


// HEAD FUNCTION IMPLEMENTATION
const head = function(array) {
  if (array.length === 0 || array === undefined) {
    return undefined;
  } else {
    return (array[0]);
  }
};

module.exports = head;