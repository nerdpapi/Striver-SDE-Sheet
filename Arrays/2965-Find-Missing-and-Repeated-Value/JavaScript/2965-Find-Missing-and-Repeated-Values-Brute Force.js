/**
 * Problem: 2965. Find Missing and Repeated Values
 * Approach: Brute Force
 *
 * Time Complexity: O(n^4)
 * Space Complexity: O(1)
 */

/**
 * @param {number[][]} grid
 * @return {number[]}
 */

var findMissingAndRepeatedValues = function(grid) {

    let n = grid.length;

    let repeating = -1;
    let missing = -1;

    for (let num = 1; num < n * n + 1; num++) {

        let count = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {

                if (grid[i][j] === num) {
                    count++;
                }
            }
        }

        if (count === 2) {
            repeating = num;
        }
        else if (count === 0) {
            missing = num;
        }

        if (repeating !== -1 && missing !== -1) {
            break;
        }
    }

    return [repeating, missing];
};