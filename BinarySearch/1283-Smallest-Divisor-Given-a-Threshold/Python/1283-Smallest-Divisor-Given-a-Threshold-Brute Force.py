"""
Problem: 1283. Find the Smallest Divisor Given a Threshold
Approach: Brute Force — Check Every Divisor
Time Complexity: O(n * max(nums))
Space Complexity: O(1)
"""

import math

class Solution:
    def smallestDivisor(self, nums: list[int], threshold: int) -> int:
        n = len(nums)

        def sumDiv(nums, div):
            total = 0
            for i in range(n):
                total += math.ceil(nums[i] / div)
            return total

        for div in range(1, max(nums) + 1):
            if sumDiv(nums, div) <= threshold:
                return div

        return -1