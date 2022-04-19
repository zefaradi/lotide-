// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual');

// Map FUNCTION IMPLEMENTATION
const map = require('../map');

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

assertEqual(words, results1)