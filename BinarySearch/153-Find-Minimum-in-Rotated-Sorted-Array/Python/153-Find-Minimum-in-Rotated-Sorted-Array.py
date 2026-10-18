
"""
Problem: 153. Find Minimum in Rotated Sorted Array
Approach: Modified Binary Search

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def findMin(self, nums: list[int]) -> int:
        low = 0
        high = len(nums) - 1
        ans = float('inf')

        while low <= high:
            mid = (low + high) // 2

            # Left half is sorted
            if nums[low] <= nums[mid]:
                ans = min(ans, nums[low])
                low = mid + 1

            # Right half is sorted
            else:
                ans = min(ans, nums[mid])
                high = mid - 1

        return ans