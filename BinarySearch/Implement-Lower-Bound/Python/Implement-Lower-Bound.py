"""
Problem: Implement Lower Bound
Approach: Binary Search

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def lowerBound(self, arr: list[int], target: int) -> int:
        low = 0
        high = len(arr) - 1
        ans = len(arr)

        while low <= high:
            mid = (high + low) // 2

            if arr[mid] >= target:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1

        return ans