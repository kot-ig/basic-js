/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str
    .split('')
    .reduce((codeParts, char) => {
      const curEl = codeParts[codeParts.length - 1];
      if (curEl && char === curEl.key) {
        curEl.value += 1;
      } else {
        codeParts.push({ key: char, value: 1 });
      }
      return codeParts;
    }, [])
    .map(({ key, value }) => (value > 1 ? `${value}${key}` : key)).join``;
}

module.exports = {
  encodeLine
};
