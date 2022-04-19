// ASSERT EQUAL FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual');

// findKeyByValue FUNCTION IMPLEMENTAION
const findKeyByValue = require('../findKeyByValue');

// TEST CODE

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);