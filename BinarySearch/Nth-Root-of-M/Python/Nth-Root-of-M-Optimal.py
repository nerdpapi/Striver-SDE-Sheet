
"""
Problem: Nth Root of M
Approach: Binary Search
Time Complexity: O(log m) iterations, with power calculation cost
Space Complexity: O(1)
"""

class Solution:
    def nthRoot(self, n, m):
        low = 1
        high = m

        if m == 0:
            return 0

        while low <= high:
            mid = (low + high) // 2
            mid_root = mid ** n

            if mid_root == m:
                return mid
            elif mid_root < m:
                low = mid + 1
            else:
                high = mid - 1

        return -1
