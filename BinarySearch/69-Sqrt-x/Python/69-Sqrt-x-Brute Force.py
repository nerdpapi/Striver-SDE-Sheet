
"""
Problem: 69. Sqrt(x)
Approach: Brute Force
Time Complexity: O(sqrt(x))
Space Complexity: O(1)
"""

class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x

        i = 1

        while i <= x // i:
            i += 1

        return i - 1
