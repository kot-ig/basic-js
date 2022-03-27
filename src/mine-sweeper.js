/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.reduce((playField, line, l, matrix) => {
    return [
      ...playField,
      line.map(
        (_, idx) =>
          sumSubLine(matrix[l - 1], idx) +
          !!line[idx + 1] +
          !!line[idx - 1] +
          sumSubLine(matrix[l + 1], idx)
      ),
    ];
  }, []);
}

module.exports = {
  minesweeper
};

const sumSubLine = (line, pos) =>
  line
    ? line.slice(pos && pos - 1, pos + 2).reduce((sum, val) => sum + val, 0)
    : 0;
