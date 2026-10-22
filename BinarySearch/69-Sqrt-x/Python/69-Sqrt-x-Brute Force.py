
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

        for i in range(1, x + 1):
            if i * i > x:
                return i - 1
