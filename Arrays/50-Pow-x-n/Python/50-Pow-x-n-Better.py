"""
Problem: 50. Pow(x, n)
Approach: Better - Recursive Divide and Conquer

If n is even:
    x^n = x^(n/2) * x^(n/2)

If n is odd:
    x^n = x * x^(n-1)

Negative powers are handled using 1 / x.

Time Complexity: O(log n)
Space Complexity: O(log n) for recursion stack
"""

class Solution:
    def myPow(self, x: float, n: int) -> float:

        if n < 0:
            x = 1 / x
            n = -n

        def power(x, n):
            if n == 0:
                return 1

            half = power(x, n // 2)

            if n % 2 == 0:
                return half * half

            return x * half * half

        return power(x, n)