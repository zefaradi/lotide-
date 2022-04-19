// ASSERT EQUAL FUNCTION
const assertEqual = require('./assertEqual');

// FIND KEY BY VALUE FUNCTION
const findKey = (object, callback) => {
  for (const key in object){
    if (callback(object[key])) {
      return key
    }
  }
}

module.exports = findKey;
