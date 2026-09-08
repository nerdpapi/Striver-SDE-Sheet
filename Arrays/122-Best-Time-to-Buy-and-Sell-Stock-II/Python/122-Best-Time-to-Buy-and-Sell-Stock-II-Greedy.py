"""
Problem: 122. Best Time to Buy and Sell Stock II
Approach: Greedy

Whenever the next day's price is higher than today's price,
take that positive difference.

Because unlimited transactions are allowed, every positive
price increase can contribute to the maximum profit.

Time Complexity: O(n)
Space Complexity: O(1)
"""


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        profit = 0

        for i in range(1, len(prices)):
            profit += max(0, prices[i] - prices[i - 1])

        return profit