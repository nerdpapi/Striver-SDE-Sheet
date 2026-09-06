"""
Problem: 53. Maximum Subarray
Approach: Brute Force

Time Complexity: O(n^2)
Space Complexity: O(1)
"""


class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        maxi = float("-inf")

        for i in range(len(nums)):
            total = 0

            for j in range(i, len(nums)):
                total += nums[j]
                maxi = max(maxi, total)

        return maxi