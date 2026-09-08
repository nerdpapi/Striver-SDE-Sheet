/**
 * Problem: 122. Best Time to Buy and Sell Stock II
 * Approach: Recursion + Memoization
 *
 * Store the answer for every (idx, buy) state
 * to avoid recalculating the same state.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    const n = prices.length;

    const dp = Array.from(
        { length: n },
        () => Array(2).fill(-1)
    );

    function f(idx, buy) {
        if (idx === n) {
            return 0;
        }

        if (dp[idx][buy] !== -1) {
            return dp[idx][buy];
        }

        if (buy) {
            dp[idx][buy] = Math.max(
                -prices[idx] + f(idx + 1, 0),
                f(idx + 1, 1)
            );
        } else {
            dp[idx][buy] = Math.max(
                prices[idx] + f(idx + 1, 1),
                f(idx + 1, 0)
            );
        }

        return dp[idx][buy];
    }

    return f(0, 1);
};