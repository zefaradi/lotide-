// assertEqual and countLetters IMPLEMENTATION

const {assertEqual, countLetters} = require('../countLetters')

//TEST
assertEqual(countLetters("LHL"),{ L: 2, H: 1 });
assertEqual(countLetters("lighthouse in the house"),{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });