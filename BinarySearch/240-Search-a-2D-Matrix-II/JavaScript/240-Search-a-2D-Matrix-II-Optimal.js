/**
 * Problem: 240. Search a 2D Matrix II
 * Approach: Optimal - Staircase Search
 *
 * Start from the top-right corner.
 *
 * If current element is smaller than target, move down.
 * If current element is larger than target, move left.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let row = 0;
    let col = n - 1;

    while (row < m && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }

    return false;
};