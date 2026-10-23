
"""
Problem: Nth Root of M
Approach: Brute Force
Time Complexity: O(m) iterations, with power calculation cost
Space Complexity: O(1)
"""

class Solution:
    def nthRoot(self, n, m):
        if m == 0:
            return 0

        for i in range(1, m + 1):
            power = i ** n

            if power == m:
                return i
            elif power > m:
                break

        return -1
