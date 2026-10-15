"""
Problem: 35. Search Insert Position
Approach: Binary Search - Lower Bound

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        low = 0
        high = len(nums) - 1
        ans = len(nums)

        while low <= high:
            mid = (high + low) // 2

            if nums[mid] >= target:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1

        return ans