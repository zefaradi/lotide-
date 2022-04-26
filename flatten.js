// flatten FUNCTION IMPLEMENTATION
const flatten = function(arr) {
  let result = [];
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      for (let ele of elem) {
        result.push(ele);
      }
    } else {
      result.push(elem);
    }
  }
  return result;
};

module.exports = flatten;

