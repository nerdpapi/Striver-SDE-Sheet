"""
Problem: 53. Maximum Subarray
Approach: Better - Prefix Sum

Time Complexity: O(n^2)
Space Complexity: O(n)
"""


class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        n = len(nums)

        prefix = [0] * (n + 1)

        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]

        maxi = float("-inf")

        for i in range(n):
            for j in range(i, n):
                total = prefix[j + 1] - prefix[i]
                maxi = max(maxi, total)

        return maxi