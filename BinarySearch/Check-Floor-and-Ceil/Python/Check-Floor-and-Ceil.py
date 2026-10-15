"""
Problem: Check Floor and Ceil
Approach: Binary Search

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def getFloorAndCeil(self, nums: list[int], x: int) -> list[int]:
        low = 0
        high = len(nums) - 1
        floor_val = -1
        ceil_val = -1

        while low <= high:
            mid = (low + high) // 2
            if nums[mid] == x:
                return [x, x]
            elif nums[mid] < x:
                floor_val = nums[mid]
                low = mid + 1
            else:
                ceil_val = nums[mid]
                high = mid - 1

        return [floor_val, ceil_val]