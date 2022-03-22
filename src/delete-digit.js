/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  return String(n).split``.reduce((max, digit, idx, numbers) => {
    const part1 = numbers.slice(0, idx);
    const part2 = numbers.slice(idx+1);
    const newNumber = +[].concat(part1, part2).join``;

    return Math.max(max, newNumber)
  }, 0)
}

module.exports = {
  deleteDigit
};
