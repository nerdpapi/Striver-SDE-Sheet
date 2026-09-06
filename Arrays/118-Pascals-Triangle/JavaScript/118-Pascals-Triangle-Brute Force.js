/**
 * Problem: 118. Pascal's Triangle
 * Approach: Brute Force - Calculate Each Element
 *
 * Each element is calculated using the binomial coefficient:
 * C(r - 1, c - 1)
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(1) auxiliary space
 */

/**
 * @param {number} r
 * @param {number} c
 * @return {number}
 */

var get_element = function(r, c) {
    let n = r - 1;
    let k = c - 1;

    let result = 1;

    for (let i = 0; i < k; i++) {
        result = Math.floor(result * (n - i) / (i + 1));
    }

    return result;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
    let ans = [];

    for (let r = 1; r <= numRows; r++) {
        let row = [];

        for (let c = 1; c <= r; c++) {
            row.push(get_element(r, c));
        }

        ans.push(row);
    }

    return ans;
};