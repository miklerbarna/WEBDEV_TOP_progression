const ftoc = function(degree) {
  let ret = (((degree - 32) * 5) / 9);

  if (Number.isInteger(ret)) return ret;
  return Math.round(ret * 10) / 10;
};

const ctof = function(degree) {
  let ret = (((degree * 9) / 5) + 32);

  if (Number.isInteger(ret)) return ret;
  return Math.round(ret * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
