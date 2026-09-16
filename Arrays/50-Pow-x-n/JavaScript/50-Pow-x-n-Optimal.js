/**
 * Problem: 50. Pow(x, n)
 * Approach: Optimal - Binary Exponentiation
 *
 * Use exponentiation by squaring.
 *
 * If n is odd:
 *     multiply result by x.
 *
 * Otherwise:
 *     square x and divide n by 2.
 *
 * Time Complexity: O(log n)
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

    while (n > 0) {
        if (n % 2 === 1) {
            result *= x;
            n -= 1;
        } else {
            x *= x;
            n = Math.floor(n / 2);
        }
    }

    return result;
};