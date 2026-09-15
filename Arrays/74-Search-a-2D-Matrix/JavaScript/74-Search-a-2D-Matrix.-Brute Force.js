/**
 * Problem: 74. Search a 2D Matrix
 * Approach: Brute Force
 *
 * Traverse every element of the matrix and check
 * whether it matches the target.
 *
 * Time Complexity: O(m * n)
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

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] === target) {
                return true;
            }
        }
    }

    return false;
};