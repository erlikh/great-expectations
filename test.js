var ge = require("./ge.js");

var expect = ge.expect
  , eq = ge.eq
  , beGreaterThan = ge.beGreaterThan
;



var test1 = expect( 3 ).to( eq(3) ) // should return true
  , test2 = expect( 3 ).not.to( eq(3) ) // should return false
  , test3 = expect( 4 ).to( beGreaterThan(3) ) // should return true
;

console.log(test1, test2, test3);
