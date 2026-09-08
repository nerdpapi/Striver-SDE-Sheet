/**
 * Problem: 122. Best Time to Buy and Sell Stock II
 * Approach: Greedy
 *
 * Whenever the next day's price is higher than today's price,
 * take that positive difference.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        profit += Math.max(0, prices[i] - prices[i - 1]);
    }

    return profit;
};