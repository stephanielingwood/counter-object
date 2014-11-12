/*jshint node: true */
'use strict';

var Counter = function() {
  this.count = 0;
};

Counter.prototype.increment = function() {
  this.count++;
  return this.count;
};

Counter.prototype.returnCount = function() {
  return this.count;
};


module.exports = Counter;
