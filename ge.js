var noop = function() {}

var expect = function() {
  return {
    to: noop,
    not: {
      to: noop
    }
  }
};

var eq = noop;
var beGreaterThan = noop;

module.exports = { expect, eq, beGreaterThan };
