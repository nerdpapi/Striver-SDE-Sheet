"""
Problem: 122. Best Time to Buy and Sell Stock II
Approach: Tabulation

Time Complexity: O(n)
Space Complexity: O(n)
"""


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        n = len(prices)

        dp = [[0] * 2 for _ in range(n + 1)]

        for idx in range(n - 1, -1, -1):
            dp[idx][1] = max(
                -prices[idx] + dp[idx + 1][0],
                dp[idx + 1][1]
            )

            dp[idx][0] = max(
                prices[idx] + dp[idx + 1][1],
                dp[idx + 1][0]
            )

        return dp[0][1]