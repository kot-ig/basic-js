/**
 * Create a repeating string based on the given parameters
 *
 * @param {string} str string to repeat
 * @param {Object} [options] options object
 * @param {number} [options.repeatTimes] the number of repetitions of the str
 * @param {string} [options.separator] a string separating repetitions of the str
 * @param {string} [options.addition] an additional string that will be added to each repetition of the str
 * @param {number} [options.additionRepeatTimes] the number of repetitions of the addition
 * @param {string} [options.additionSeparator] a string separating repetitions of the addition
 *
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options= {} ) {
  str = String(str);
  if (!str) return '';

  const {
    repeatTimes=1, separator='+', addition='', additionRepeatTimes=1, additionSeparator='|'
  } = options;
  return Array(repeatTimes)
    .fill(str+repeater(addition, {repeatTimes: additionRepeatTimes, separator: additionSeparator}))
    .join(separator)
}

module.exports = {
  repeater
};
