/**
 * Problem: 121. Best Time to Buy and Sell Stock
 * Approach: Optimal - One Pass
 *
 * Keep track of the minimum price seen so far.
 * For every current price, calculate the profit if we sell today.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
};