/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (!Array.isArray(arr)) return depth;

    depth += 1;
    const nestedDepth = arr
      .map(this.calculateDepth.bind(this))
      .reduce((maxDepth, depth) => Math.max(maxDepth, depth), 0);

    return depth + nestedDepth;
  }
}

module.exports = {
  DepthCalculator,
};
