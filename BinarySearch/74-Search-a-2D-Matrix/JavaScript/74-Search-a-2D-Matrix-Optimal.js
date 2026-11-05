/**
 * Problem: 74. Search a 2D Matrix
 * Approach: Optimal - Binary Search on Virtual 1D Array
 *
 * Treat the matrix as a sorted 1D array.
 *
 * row = Math.floor(mid / n)
 * col = mid % n
 *
 * Time Complexity: O(log(m * n))
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

    let low = 0;
    let high = m * n - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        const row = Math.floor(mid / n);
        const col = mid % n;

        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
};