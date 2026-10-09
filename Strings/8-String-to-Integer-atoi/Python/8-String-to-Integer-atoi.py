"""
Problem: 8. String to Integer (atoi)
Approach: Parsing + Sign Handling + Overflow Clamping

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def myAtoi(self, s: str) -> int:
        num = 0
        sign = 1
        i = 0

        # Skip leading spaces
        while i < len(s) and s[i] == " ":
            i += 1

        # Handle optional sign
        if i < len(s) and s[i] == "-":
            sign = -1
            i += 1
        elif i < len(s) and s[i] == "+":
            i += 1

        # Read digits and check overflow
        while i < len(s) and "0" <= s[i] <= "9":
            num = num * 10 + int(s[i])

            if sign * num > 2**31 - 1:
                return 2**31 - 1
            elif sign * num < -(2**31):
                return -(2**31)

            i += 1

        return sign * num