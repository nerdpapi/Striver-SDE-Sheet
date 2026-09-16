"""
Problem: 50. Pow(x, n)
Approach: Brute Force

Multiply x by itself n times.

For negative n:
    x = 1 / x
    n = -n

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            x = 1 / x
            n = -n

        result = 1

        for _ in range(n):
            result *= x

        return result