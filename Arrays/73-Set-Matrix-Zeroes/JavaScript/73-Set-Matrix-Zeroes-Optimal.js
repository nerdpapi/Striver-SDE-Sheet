/**
 * Problem: 73. Set Matrix Zeroes
 * Approach: Optimal - Matrix Markers
 *
 * Use the first row and first column as marker arrays.
 * col0 separately tracks whether column 0 needs to be zero.
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[][]} matrix
 * @return {void}
 */

var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let col0 = 1;

    // Mark rows and columns
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {

                // Mark row
                matrix[i][0] = 0;

                // Mark column only if j is not 0
                if (j !== 0) {
                    matrix[0][j] = 0;
                } else {
                    col0 = 0;
                }
            }
        }
    }

    // Set inner matrix
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // First row
    if (matrix[0][0] === 0) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // First column
    if (col0 === 0) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};