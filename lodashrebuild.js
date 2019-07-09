const _ = {};

// This method returns the first argument it receives.
_.identity = x => {
  return x;
};

// Creates a slice of array with n elements taken from the beginning.
_.take = (collection, x) => {
  const newArr = [...collection];
  if (x === undefined) return newArr.slice(0, 1);
  return newArr.slice(0, x);
};

// Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.
_.uniq = collection => {
  const newArr = [...collection];
  const absArr = newArr.map(num => {
    if (num === -0) {
      return Math.abs(num);
    } else {
      return num;
    }
  });
  const noDups = absArr.filter((num, index) => {
    return absArr.lastIndexOf(num) === index;
  });
  return noDups;
};

// Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:(value, index|key, collection).
_.map = (collection, func) => {
  let newArr = [];
  if (!Array.isArray(collection)) {
    newArr = Object.values(collection);
  } else {
    newArr = [...collection];
  }
  const finArr = [];
  for (let i = 0; i < newArr.length; i++) {
    finArr.push(func(newArr[i]));
  }
  return finArr;
};

// Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
_.forEach = (coll, func) => {
  if (Array.isArray(coll)) {
    for (let i = 0; i < coll.length; i++) {
      func();
    }
  } else {
    for (const property in coll) {
      func();
    }
  }
};

// Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:(value, index|key, collection).
_.filter = (collection, func) => {};

// Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:(accumulator, value, index|key, collection).
_.reduce = (collection, func, accumulator) => {};

// Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function.
_.once = func => {};

// Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times. Subsequent calls to the created function return the result of the last func invocation.
_.before = func => {};

module.exports = _;
