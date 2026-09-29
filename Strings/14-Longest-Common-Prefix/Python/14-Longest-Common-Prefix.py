"""
Problem: 14. Longest Common Prefix
Approach: Vertical Scanning

Time Complexity: O(n * m)
Space Complexity: O(1)
"""

class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if not strs:
            return ""

        for i in range(len(strs[0])):
            char = strs[0][i]

            for j in range(1, len(strs)):
                if i >= len(strs[j]) or strs[j][i] != char:
                    return strs[0][:i]

        return strs[0]