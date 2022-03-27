/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  return arr
    .reduceRight(
      (tempArr, v, idx, list) =>
        // create temporary array with -1 and remove -1 from initial array
        v === -1 ? ((tempArr[idx] = list.splice(idx, 1)[0]), tempArr) : tempArr,
      []
    )
    .reduce(
      //sort initial array and put -1 back to arr at corresponding positions
      (arr, item, idx) => (arr.splice(idx, 0, item), arr),
      arr.sort((a, b) => a - b)
    );
}

module.exports = {
  sortByHeight
};
