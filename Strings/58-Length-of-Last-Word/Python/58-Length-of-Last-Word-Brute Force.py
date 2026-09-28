"""
Problem: 58. Length of Last Word
Approach: Brute Force - Strip and Split

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.strip().split()
        return len(words[-1])