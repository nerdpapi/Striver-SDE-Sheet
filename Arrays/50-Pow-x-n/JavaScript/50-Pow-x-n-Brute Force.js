/**
 * Problem: 50. Pow(x, n)
 * Approach: Brute Force
 *
 * Multiply x by itself n times.
 *
 * For negative n:
 *     x = 1 / x
 *     n = -n
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
};