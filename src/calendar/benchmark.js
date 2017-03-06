// @flow
/* eslint-env mocha */
/* global suite, benchmark */

var calendar = require('./')

suite('calendar', function () {
  benchmark('date-fns', function () {
    return calendar(this.date, this.formats)
  })
}, {
  setup: function () {
    this.date = new Date()
    this.formats = {
      sameDay:  '[SAME_DAY]',
      nextDay:  '[NEXT_DAY]',
      nextWeek: '[NEXT_WEEK]',
      lastDay:  '[LAST_DAY]',
      lastWeek: '[LAST_WEEK]',
      sameElse: '[SAME_ELSE]'
    };
  }
})
