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

//TEST

assertEqual(countLetters("LHL"),{ L: 2, H: 1 });
assertEqual(countLetters("lighthouse in the house"),{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });

