"""
Problem: Remove Duplicates from Sorted Array
Approach: Brute Force - Temporary Array
Time Complexity: O(n^2)
Space Complexity: O(n)
"""

class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        n = len(nums)
        temp = []

        for i in range(n):
            if nums[i] not in temp:
                temp.append(nums[i])

        k = len(temp)

        for i in range(k):
            nums[i] = temp[i]

        return k