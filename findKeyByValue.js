// findKeyByValue FUNCTION IMPLEMENTAION

const findKeyByValue = (object, value) => {
  for (const key in object){
    if (object[key] === value) {
      return key
    }
  }
}

module.exports = findKeyByValue;