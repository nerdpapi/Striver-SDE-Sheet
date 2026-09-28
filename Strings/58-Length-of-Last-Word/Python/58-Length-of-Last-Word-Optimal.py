"""
Problem: 58. Length of Last Word
Approach: Optimal - Traverse from the End

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1
        length = 0

        # Skip trailing spaces
        while i >= 0 and s[i] == " ":
            i -= 1

        # Count characters of the last word
        while i >= 0 and s[i] != " ":
            length += 1
            i -= 1

        return length