"""
Problem: 122. Best Time to Buy and Sell Stock II
Approach: Recursion + Memoization

Store the answer for every (idx, buy) state
to avoid recalculating the same state.

Time Complexity: O(n)
Space Complexity: O(n)
"""


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        n = len(prices)

        dp = [[-1] * 2 for _ in range(n)]

        def f(idx, buy):
            if idx == n:
                return 0

            if dp[idx][buy] != -1:
                return dp[idx][buy]

            if buy:
                dp[idx][buy] = max(
                    -prices[idx] + f(idx + 1, 0),
                    f(idx + 1, 1)
                )

            else:
                dp[idx][buy] = max(
                    prices[idx] + f(idx + 1, 1),
                    f(idx + 1, 0)
                )

            return dp[idx][buy]

        return f(0, 1)