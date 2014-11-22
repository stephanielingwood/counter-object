/*jshint node: true */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var Counter = require('../lib/counter.js');


describe('Counter', function() {
  var c;

  before(function() {
    c = new Counter();
  });

  it('has a counter value of zero after the object is created', function(done) {
    expect(c.returnCount()).to.eql(0);
    done();
  });

  it('the counter value after an increment() will be one more than before', function(done) {
    expect(c.increment()).to.eql(1);
    done();
  });
});
