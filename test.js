var ge = require("./ge.js");

var expect = ge.expect
  , eq = ge.eq
  , beGreaterThan = ge.beGreaterThan
;

expect( 3 ).to( eq(3) ) // should return true
expect( 3 ).not.to( eq(3) ) // should return false
expect( 4 ).to( beGreaterThan(3) ) // should return true
