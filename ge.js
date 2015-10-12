function expect(val) {
  return {
    to: function(checker) {
      return checker(val);
    },
    not: {
      to: function(checker) {
        return !checker(val);
      }
    }
  }
};

function eq(example) {
  return function eqChecker(val) {
    return example === val;
  }
};

function beGreaterThan(example) {
  return function gtChecker(val) {
    return val > example;
  }
}

module.exports = {
  expect, eq, beGreaterThan
};
