var parse = require('./parse')

/**
 * Set the milliseconds to the given date.
 * @param {Date|String|Number} dirtyDate - the date to be changed
 * @param {Number} milliseconds of the new date
 * @returns {Date} new date with the milliseconds setted
 */
var setMilliseconds = function(dirtyDate, milliseconds) {
  var date = parse(dirtyDate)
  date.setMilliseconds(milliseconds)
  return date
}

module.exports = setMilliseconds
