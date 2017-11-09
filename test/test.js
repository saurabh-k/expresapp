var chai = require('chai');

var assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    var arr = ['1'];

    assert.equal(arr.length, 0);
  });
});