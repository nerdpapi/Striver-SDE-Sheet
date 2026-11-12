
"""
Problem: 283. Move Zeroes
Approach: Temporary Array
Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        n = len(nums)
        temp = []

        for i in range(n):
            if nums[i] != 0:
                temp.append(nums[i])

        for i in range(n):
            if nums[i] == 0:
                temp.append(nums[i])

        for i in range(n):
            nums[i] = temp[i]