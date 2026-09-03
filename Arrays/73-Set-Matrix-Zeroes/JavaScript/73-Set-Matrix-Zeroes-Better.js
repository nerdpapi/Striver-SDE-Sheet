/**
 * Problem: 73. Set Matrix Zeroes
 * Approach: Better - Row and Column Arrays
 *
 * Store which rows and columns contain zeroes.
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(m + n)
 */

/**
 * @param {number[][]} matrix
 * @return {void}
 */

var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const row = new Array(m).fill(false);
    const col = new Array(n).fill(false);

    // Find zeroes
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                col[j] = true;
            }
        }
    }

    // Set zeroes
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};