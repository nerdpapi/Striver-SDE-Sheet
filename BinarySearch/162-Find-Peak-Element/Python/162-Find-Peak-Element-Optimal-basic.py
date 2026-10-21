
"""
Problem: 162. Find Peak Element
Approach: Binary Search with Boundary Conditions
Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def findPeakElement(self, nums: list[int]) -> int:
        n = len(nums)
        low = 0
        high = n - 1

        while low <= high:
            mid = (low + high) // 2

            # Check if mid is a peak
            if (
                (mid == 0 or nums[mid] > nums[mid - 1])
                and
                (mid == n - 1 or nums[mid] > nums[mid + 1])
            ):
                return mid

            # Left neighbor is greater, so move left
            elif mid > 0 and nums[mid - 1] > nums[mid]:
                high = mid - 1

            # Otherwise, move right
            else:
                low = mid + 1

        return -1
