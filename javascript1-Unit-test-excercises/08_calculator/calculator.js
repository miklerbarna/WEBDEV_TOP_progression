const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }

  return sum;
};

const multiply = function(array) {
  let ret = 1;
  for (let index = 0; index < array.length; index++) {
    ret *= array[index];
  }

  return ret;
};

const power = function(base, exponent) {
  let ret = base;
  for (let index = 1; index < exponent; index++) {
    ret *= base;
  }

  return ret;
};

const factorial = function(num) {
  if (num == 0) return 1;
  if (num == 1) return 1;
	let ret = 1;
  for (let index = 2; index <= num; index++)
  {
    ret *= index;
  }

  return ret;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
