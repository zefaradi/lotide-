// REQUIRING ASSERT EQUAL
const assertEqual = require('./assertEqual');


// FUNCTION IMPLEMENTATION
const tail = function(array) {
  return (array.slice((array.length * -1) + 1));
};

module.exports = tail;

