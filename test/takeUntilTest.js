// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual');

// takeUntil FUNCTION IMPLEMENTATION
const takeUntil = require('../takeUntil');

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertEqual(data1,results1);
assertEqual(data2,results2);