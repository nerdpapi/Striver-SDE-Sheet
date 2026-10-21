
"""
Problem: 162. Find Peak Element
Approach: Brute Force — Check Neighbors
Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def findPeakElement(self, nums: list[int]) -> int:
        n = len(nums)

        for i in range(n):
            if (
                (i == 0 or nums[i] > nums[i - 1])
                and
                (i == n - 1 or nums[i] > nums[i + 1])
            ):
                return i

        return -1
