var format            = require('../format');
var differenceInDays  = require('../difference_in_days')
var startOfDay        = require('../start_of_day')


/**
 * @category Common Helpers
 * @summary Calendar time displays time relative to a given date
 *
 * @description
 * Calendar time displays time relative to a given date
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} formats - output formats
 * @returns {String}
 *
 * @example
 * var result = calendar(Date.now() - 1000*60*60*24, {
 *   sameDay: '[Today]',
 *   nextDay: '[Tomorrow]',
 *   nextWeek: 'dddd',
 *   lastDay: '[Yesterday]',
 *   lastWeek: '[Last] dddd',
 *   sameElse: 'DD/MM/YYYY'
 * })
 * //=> "Yesterday"
 */
function calendar(date, formats) {
  var now = Date.now();
  var diff  = differenceInDays(startOfDay(date), startOfDay(now));

  // Logic from moment...
  var formatStr =
    diff < -6 ? formats.sameElse :
    diff < -1 ? formats.lastWeek :
    diff < 0  ? formats.lastDay  :
    diff < 1  ? formats.sameDay  :
    diff < 2  ? formats.nextDay  :
    diff < 7  ? formats.nextWeek : formats.sameElse;

  return format(date, formatStr);
}

module.exports = calendar;
