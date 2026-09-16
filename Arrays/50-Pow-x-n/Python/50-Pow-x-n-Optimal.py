"""
Problem: 50. Pow(x, n)
Approach: Optimal - Binary Exponentiation

Use exponentiation by squaring.

If n is odd:
    multiply result by x.

Then:
    x = x * x
    n = n // 2

This reduces n by half at every iteration.

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            x = 1 / x
            n = -n

        result = 1

        while n > 0:
            if n % 2 == 1:
                result *= x
                n -= 1
            else:
                x *= x
                n //= 2

        return result