"""
Problem: 53. Maximum Subarray
Approach: Optimal - Kadane's Algorithm

Time Complexity: O(n)
Space Complexity: O(1)
"""


class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        current = nums[0]
        maxi = nums[0]

        for i in range(1, len(nums)):
            current = max(current + nums[i], nums[i])
            maxi = max(maxi, current)

        return maxi