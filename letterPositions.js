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
const letterPositions  = function(sentence) {
  let newSentence = sentence.replace(/\s/g, '')
  const results = {};
  for (let i = 0; i < (newSentence.length); i++) {
    let objKey = newSentence[i];
    if (results[objKey]){
      results[objKey].push(i+1)
    } else {
      results[objKey] = [i+1]
    }
  }
  return results;
}

//TEST

console.log(letterPositions("lighthouse in the house"));


