"""
Problem: 1903. Largest Odd Number in String
Approach: Find Rightmost Odd Digit

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def largestOddNumber(self, num: str) -> str:
        for i in range(len(num) - 1, -1, -1):
            if int(num[i]) % 2 == 1:
                return num[:i + 1]

        return ""