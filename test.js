var ge = require("./ge.js")
  , expect = ge.expect
  , eq = ge.eq
  , beGreaterThan = ge.beGreaterThan
;

var tests = [
  expect( 3 ).to( eq(3) ), // should return true
  expect( 3 ).not.to( eq(3) ), // should return false
  expect( 4 ).to( beGreaterThan(3) ) // should return true
];

console.log("results", tests);
