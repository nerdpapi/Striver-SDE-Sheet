"""
Problem: 1. Two Sum
Approach: Brute Force

Check every possible pair of elements.
If their sum equals target, return their indices.

Time Complexity: O(n^2)
Space Complexity: O(1)
"""

class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        n = len(nums)

        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]

        return []