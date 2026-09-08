/**
 * Problem: 122. Best Time to Buy and Sell Stock II
 * Approach: Recursion
 *
 * State:
 * buy = 1 -> allowed to buy
 * buy = 0 -> holding stock, allowed to sell
 *
 * At every index, choose between taking the action or skipping it.
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n) recursion stack
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    const n = prices.length;

    function f(idx, buy) {
        if (idx === n) {
            return 0;
        }

        if (buy) {
            return Math.max(
                -prices[idx] + f(idx + 1, 0),
                f(idx + 1, 1)
            );
        }

        return Math.max(
            prices[idx] + f(idx + 1, 1),
            f(idx + 1, 0)
        );
    }

    return f(0, 1);
};