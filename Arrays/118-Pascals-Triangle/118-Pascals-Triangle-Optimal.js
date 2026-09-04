/**
 * Problem: 118. Pascal's Triangle
 * Approach: Optimal - Generate Each Row Using Previous Element
 *
 * Each row is generated using the previous element in O(row length).
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) auxiliary space
 *                   O(n^2) including the output
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex) {
    let row = [1];
    let result = 1;

    let n = rowIndex + 1;

    for (let i = 1; i < n; i++) {
        result = Math.floor(result * (n - i) / i);
        row.push(result);
    }

    return row;
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function(numRows) {
    let ans = [];

    for (let i = 0; i < numRows; i++) {
        ans.push(getRow(i));
    }

    return ans;
};