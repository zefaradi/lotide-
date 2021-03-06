// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const letterPositions  = function(sentence) {
  let newSentence = sentence.replace(/\s/g, '');
  const results = {};
  for (let i = 0; i < (newSentence.length); i++) {
    let objKey = newSentence[i];
    if (results[objKey]) {
      results[objKey].push(i);
    } else {
      results[objKey] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;


