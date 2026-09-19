"""
Problem: 75. Sort Colors
Approach: Optimal - Dutch National Flag Algorithm

Use three pointers:
low  -> boundary for 0
mid  -> current element
high -> boundary for 2

Time Complexity: O(n)
Space Complexity: O(1)
"""


class Solution:
    def sortColors(self, nums: list[int]) -> None:
        low = 0
        mid = 0
        high = len(nums) - 1

        while mid <= high:

            if nums[mid] == 0:
                nums[mid], nums[low] = nums[low], nums[mid]
                low += 1
                mid += 1

            elif nums[mid] == 1:
                mid += 1

            else:
                nums[mid], nums[high] = nums[high], nums[mid]
                high -= 1