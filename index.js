// index.js
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const head = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');;
const middle = require('./middle');
const tail = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly,
  countLetters: countLetters,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  head:   head,
  letterPositions: letterPositions,
  tail: tail,
  takeUntil: takeUntil,
  map: map,
  middle: middle,
  without: without
};