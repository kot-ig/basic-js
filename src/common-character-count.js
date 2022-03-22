/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  const _s2 = s2.split``;
  return s1.split``.reduce((res, i1) => {
    const index = _s2.indexOf(i1);
    return ~index ?  _s2.splice(index, 1) && res.concat(i1) : res
  }, []).length
}

module.exports = {
  getCommonCharacterCount
};
