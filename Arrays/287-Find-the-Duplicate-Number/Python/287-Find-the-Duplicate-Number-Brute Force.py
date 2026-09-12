"""
Problem: 287. Find the Duplicate Number
Approach: Brute Force - Sorting

Sort the array so that duplicate values become adjacent.
Return the first pair of equal adjacent elements.

Time Complexity: O(n log n)
Space Complexity: O(1) auxiliary
"""


class Solution:
    def findDuplicate(self, nums: list[int]) -> int:
        nums.sort()

        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1]:
                return nums[i]

        return -1