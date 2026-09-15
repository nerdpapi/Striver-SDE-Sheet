/**
 * Problem: 240. Search a 2D Matrix II
 * Approach: Better - Binary Search in Every Row
 *
 * Since every row is sorted, perform binary search
 * on each row.
 *
 * Time Complexity: O(m * log n)
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

    for (let i = 0; i < m; i++) {
        let low = 0;
        let high = n - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (matrix[i][mid] === target) {
                return true;
            } else if (matrix[i][mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return false;
};