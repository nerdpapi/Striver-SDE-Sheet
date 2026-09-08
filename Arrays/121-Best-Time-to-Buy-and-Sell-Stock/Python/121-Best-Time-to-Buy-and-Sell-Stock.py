"""
Problem: 121. Best Time to Buy and Sell Stock
Approach: Optimal - One Pass

Keep track of the minimum price seen so far.
For every current price, calculate the profit if we sell today.

Time Complexity: O(n)
Space Complexity: O(1)
"""


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        minPrice = float("inf")
        maxProfit = 0

        for price in prices:
            minPrice = min(minPrice, price)
            maxProfit = max(maxProfit, price - minPrice)

        return maxProfit