"""
Problem: 1283. Find the Smallest Divisor Given a Threshold
Approach: Binary Search on Answer
Time Complexity: O(n * log(max(nums)))
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

        low = 1
        high = max(nums)
        ans = -1

        while low <= high:
            mid = (low + high) // 2

            if sumDiv(nums, mid) <= threshold:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1

        return ans