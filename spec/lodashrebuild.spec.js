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

describe('#map', () => {
  const squared = function(n) {
    return n * n;
  };
  const addsTen = function(n) {
    return n + 10;
  };

  it('returns a new array', () => {
    const arr1 = [];
    expect(_.map(arr1)).to.not.equal(arr1);
  });
  it('performs a given function on single element array', () => {
    expect(_.map([2], squared)).to.eql([4]);
    expect(_.map([10], addsTen)).to.eql([20]);
  });
  it('iterates over each element in an array and peforms the stated function on each element', () => {
    expect(_.map([1, 4, 5, 6], squared)).to.eql([1, 16, 25, 36]);
    expect(_.map([10, 20, 35, 105], addsTen)).to.eql([20, 30, 45, 115]);
  });
  it('returns an array when passed an object', () => {
    const arr2 = [];
    const obj1 = {};
    expect(_.map(obj1)).to.not.equal(arr2);
  });
  it('iterates over each element in the produced array and performs a given function on each element', () => {
    expect(_.map({ name: 'Harry', age: 10 }, squared)).to.eql([NaN, 100]);
  });
});
