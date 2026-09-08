/**
 * Problem: 122. Best Time to Buy and Sell Stock II
 * Approach: Tabulation
 *
 * dp[idx][buy] represents the maximum profit
 * starting from idx with the given buy state.
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
        { length: n + 1 },
        () => Array(2).fill(0)
    );

    for (let idx = n - 1; idx >= 0; idx--) {

        dp[idx][1] = Math.max(
            -prices[idx] + dp[idx + 1][0],
            dp[idx + 1][1]
        );

        dp[idx][0] = Math.max(
            prices[idx] + dp[idx + 1][1],
            dp[idx + 1][0]
        );
    }

    return dp[0][1];
};