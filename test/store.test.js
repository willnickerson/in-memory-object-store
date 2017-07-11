const assert = require('assert');
const store = require('../src/store');

describe('memory store', () => {
  describe('save', () => {
    it('generates an _id', () => {
      let savedObj = store.save({ foo: 'bar' });
      assert.ok(savedObj._id);
    })
  })
})