function expect(val) {
  return {
    to: function(assert) {
      return assert(val);
    },
    not: {
      to: function(assert) {
        return !assert(val);
      }
    }
  }
};

function eq(example) {
  return function assertEqual(val) {
    return example === val;
  }
};

function beGreaterThan(example) {
  return function assertGT(val) {
    return val > example;
  }
};


module.exports = {
  expect: expect,
  eq: eq,
  beGreaterThan: beGreaterThan
};
