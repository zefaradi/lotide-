// REQUIRING ASSERT EQUAL
const assertEqual = require('./assertEqual');


// FUNCTION IMPLEMENTATION
const tail = function(array) {
  // for the case or empty or one element in the array
  if (array.length === 0 || array.length === 1) {
    return [];
  }
  return (array.slice((array.length * -1) + 1));
};

module.exports = tail;

