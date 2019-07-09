const { expect } = require('chai');
const sinon = require('sinon');

const _ = require('../lodashrebuild');

describe('#identity', () => {
  it('returns the value passed as an argument', () => {
    expect(_.identity(3)).to.equal(3);
    expect(_.identity('hello')).to.equal('hello');
    expect(_.identity(true)).to.equal(true);
  });
  it('returns a reference to the same reference type passed as an argument', () => {
    const arr = [];
    expect(_.identity(arr)).to.equal(arr);
  });
});

describe('#take', () => {
  it('returns a new array', () => {
    const arr = [];
    expect(_.take(arr)).to.not.equal(arr);
  });
  it('returns an array with one element when passed an array with no second parameter', () => {
    expect(_.take([1, 2])).to.eql([1]);
  });
  it('returns an array with multiple elements when passed an array an integer as a second parameter', () => {
    expect(_.take([1, 2, 3], 2)).to.eql([1, 2]);
    expect(_.take(['one', 'two', 'three', 'four'], 3)).to.eql([
      'one',
      'two',
      'three'
    ]);
  });
  it('returns a copy of the array when x exceeds the bounds of the array', () => {
    expect(_.take([1, 2, 3], 4)).to.eql([1, 2, 3]);
  });
});

describe('#uniq', () => {
  it('returns a new array', () => {
    const arr = [];
    expect(_.uniq(arr)).to.not.equal(arr);
  });
  it('returns a copy of the array when passed an array with no duplicates', () => {
    expect(_.uniq([1, 2, 3])).to.eql([1, 2, 3]);
  });
  it('returns an new array without duplicate elements when passed an array with duplicate elements ', () => {
    expect(_.uniq([50, 45, 45])).to.eql([50, 45]);
    expect(_.uniq([-1, 1, -2, -2])).to.eql([-1, 1, -2]);
  });
  it('0 and -0 are equal values', () => {
    expect(_.uniq([0, -0])).to.eql([0]);
  });
});
