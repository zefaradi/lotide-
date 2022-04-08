// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
      console.log(`Assertion Passed: ${actual} === ${expected}`)
  }else{
      console.log(`Assertion Failed: ${actual} !=== ${expected}`)
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countLetters = function(words) {
  let newWord = words.replace(/\s/g, '')
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
}

//TEST

console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));

