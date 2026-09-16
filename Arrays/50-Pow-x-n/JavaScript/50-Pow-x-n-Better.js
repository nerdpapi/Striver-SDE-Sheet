/**
 * Problem: 50. Pow(x, n)
 * Approach: Better - Recursive Divide and Conquer
 *
 * If n is even:
 *     x^n = x^(n/2) * x^(n/2)
 *
 * If n is odd:
 *     x^n = x * x^(n-1)
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(log n) for recursion stack
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

    function power(x, n) {
        if (n === 0) {
            return 1;
        }

        const half = power(x, Math.floor(n / 2));

        if (n % 2 === 0) {
            return half * half;
        }

        return x * half * half;
    }

    return power(x, n);
};