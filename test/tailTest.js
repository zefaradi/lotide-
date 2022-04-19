const assert = require('chai').assert;
const tail = require('../tail');

// TEST CODE

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns a length of 3 for ['Yo Yo', 'Lighthouse', 'Labs'] without effecting the original array", () => {
    let word = ["Yo Yo", "Lighthouse", "Labs"];
    tail(word);
    assert.deepEqual(word.length,3);
  });

});
