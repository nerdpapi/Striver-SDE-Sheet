/**
 * Problem: 2965. Find Missing and Repeated Values
 * Approach: Optimal - Mathematical Equations
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */

var findMissingAndRepeatedValues = function(grid) {

    let n = grid.length;
    let total = n * n;

    let sum_val = 0;
    let sqr_sum = 0;

    for (let row of grid) {
        for (let num of row) {
            sum_val += num;
            sqr_sum += num * num;
        }
    }

    // Expected sum
    let expected_sum = total * (total + 1) / 2;

    // Expected square sum
    let expected_sqr_sum =
        total * (total + 1) * (2 * total + 1) / 6;

    let sum_diff = sum_val - expected_sum;

    let sqr_diff = sqr_sum - expected_sqr_sum;

    // R + M
    let sum_add = sqr_diff / sum_diff;

    let repeating = (sum_diff + sum_add) / 2;

    let missing = (sum_add - sum_diff) / 2;

    return [repeating, missing];
};