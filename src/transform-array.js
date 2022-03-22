/**
 * @typedef  {'--discard-next'|'--discard-prev'|'--double-next'|'--double-prev'} action
 *
 */

const ACTIONS = {
  SKIP_NEXT: '--discard-next',
  SKIP_PREV: '--discard-prev',
  DOUBLE_NEXT: '--double-next',
  DOUBLE_PREV: '--double-prev',
};

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array<number|action>} arr initial array
 * @returns {Array<number>} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");

  return arr.reduce((result, item, idx, initialArray) => {
    switch (item) {
      case ACTIONS.DOUBLE_NEXT:
        return initialArray[idx + 1] == null
          ? result
          : result.concat(initialArray[idx + 1]);
      case ACTIONS.DOUBLE_PREV:
        return result[idx - 1] == null
          ? result
          : result.concat(result[idx - 1]);
      case ACTIONS.SKIP_PREV:
      case ACTIONS.SKIP_NEXT:
        return result;
      default:
        return initialArray[idx - 1] === ACTIONS.SKIP_NEXT ||
          initialArray[idx + 1] === ACTIONS.SKIP_PREV
          ? result
          : result.concat(item);
    }
  }, []);
}

module.exports = {
  transform,
};
