# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @azefar/lotide`

**Require it:**

`const _ = require('@azefar/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

assertArraysEqual(actual, expected): implements if two arrays are equal

assertEqual(actual, expected): implements if two variable or values are equal

assertObjectsEqual(actual, expected): implements if two objects are equal

countOnly(allItems, itemsToCount): This function takes in a collection of items 
and return counts for a specific subset of those items

countLetters(words): Implements the number of letters in a word

eqObjects(object1, object2): Implement if two objects are equal

findKey(object, callback): finds the keys of an object with a specific value

findKeyByValue(object, value):finds the keys of a key value pair

flatten(arr): flatten an array with two level of square brackets

head(array): return the the first element of array

letterPositions(sentence): return the position of letters in an array

tail(array): returns all the elements of an except the first element

takeUntil(array, callback): returns an array until the word in the "callback"

map(array,callback): return an array as per the callback function

middle(arr): return the middle element of evenn array and the middle of the two elements for an odd array

without(arr, rm): returns a new array wiithout affecting the original array excluding the words in the rm array