"""
Problem: 122. Best Time to Buy and Sell Stock II
Approach: Recursion

State:
buy = 1 -> allowed to buy
buy = 0 -> holding stock, allowed to sell

At every index, choose between taking the action or skipping it.

Time Complexity: O(2^n)
Space Complexity: O(n) recursion stack
"""


class Solution:
    def f(self, idx: int, buy: int, prices: list[int]) -> int:
        n = len(prices)

        if idx == n:
            return 0

        if buy:
            return max(
                -prices[idx] + self.f(idx + 1, 0, prices),
                self.f(idx + 1, 1, prices)
            )

        return max(
            prices[idx] + self.f(idx + 1, 1, prices),
            self.f(idx + 1, 0, prices)
        )

    def maxProfit(self, prices: list[int]) -> int:
        return self.f(0, 1, prices)