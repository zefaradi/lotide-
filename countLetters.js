// Assert Equal IMPLEMENTATION
const assertEqual = function(actual, expected) {
  for (let key in actual) {
    if (actual[key] === expected[key]) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      break;
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      break;
    }
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countLetters = function(words) {
  let newWord = words.replace(/\s/g, '');
  // console.log("newWord: ", newWord)
  const results = {};
  for (const item of newWord) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
};

module.exports = {countLetters, assertEqual};

