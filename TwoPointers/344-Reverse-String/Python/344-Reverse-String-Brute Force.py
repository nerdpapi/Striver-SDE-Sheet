"""
Problem: Reverse String
Approach: Brute Force - Extra Array
Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def reverseString(self, s: list[str]) -> None:
        n = len(s)
        rev = []

        for i in range(n - 1, -1, -1):
            rev.append(s[i])

        s[:] = rev