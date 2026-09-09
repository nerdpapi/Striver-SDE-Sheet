/**
 * Problem: 48. Rotate Image
 * Approach: Optimal - Transpose + Reverse
 *
 * 1. Transpose the matrix.
 * 2. Reverse every row.
 *
 * This rotates the matrix 90 degrees clockwise in-place.
 *
 * Brute Force:
 * Create a new matrix and place matrix[i][j] at
 * result[j][n - 1 - i].
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) for the optimal approach
 */

/**
 * @param {number[][]} matrix
 * @return {void}
 */

var rotate = function(matrix) {
    const n = matrix.length;

    // Step 1: Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] =
            [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse every row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};