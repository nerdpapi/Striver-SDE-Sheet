"""
Problem: Remove Duplicates from Sorted Array
Approach: Two Pointers - In-Place
Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        n = len(nums)

        if n == 0:
            return 0

        j = 0

        for i in range(1, n):
            if nums[j] != nums[i]:
                j += 1
                nums[j] = nums[i]

        return j + 1