// @flow
/* eslint-env mocha */

var assert = require('power-assert')
var calendar = require('./')

describe('calendar', function () {
  var now = Date.now();
  var periodDay = 1000*60*60*24;
  var formats = {
    sameDay:  '[SAME_DAY]',
    nextDay:  '[NEXT_DAY]',
    nextWeek: '[NEXT_WEEK]',
    lastDay:  '[LAST_DAY]',
    lastWeek: '[LAST_WEEK]',
    sameElse: '[SAME_ELSE]'
  };

  it('sameDay', function () {
    var result = calendar(now, formats);
    assert.equal(result, "SAME_DAY");
  })

  it('nextDay', function () {
    var result = calendar(now + periodDay, formats);
    assert.equal(result, "NEXT_DAY");
  })

  it('nextWeek', function () {
    var result = calendar(now + (periodDay * 4), formats);
    assert.equal(result, "NEXT_WEEK");
  })

  it('lastDay', function () {
    var result = calendar(now - periodDay, formats);
    assert.equal(result, "LAST_DAY");
  })

  it('lastWeek', function () {
    var result = calendar(now - (periodDay * 4), formats);
    assert.equal(result, "LAST_WEEK");
  })

  it('sameElse', function () {
    var result = calendar(now - (periodDay * 20), formats);
    assert.equal(result, "SAME_ELSE");
  })

})
