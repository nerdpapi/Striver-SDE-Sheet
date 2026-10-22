
"""
Problem: 69. Sqrt(x)
Approach: Binary Search
Time Complexity: O(log x)
Space Complexity: O(1)
"""

class Solution:
    def mySqrt(self, x: int) -> int:
        low = 1
        high = x
        ans = 0

        while low <= high:
            mid = (low + high) // 2
            mid_sq = mid * mid

            if mid_sq <= x:
                ans = mid
                low = mid + 1
            else:
                high = mid - 1

        return ans
