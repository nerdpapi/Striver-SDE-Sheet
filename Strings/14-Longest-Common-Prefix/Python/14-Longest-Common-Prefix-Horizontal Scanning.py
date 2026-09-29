"""
Problem: 14. Longest Common Prefix
Approach: Prefix Shrinking

Start with the first string as the prefix.
Keep removing the last character until the
current string starts with the prefix.

Time Complexity: O(n * m)
Space Complexity: O(1)
"""

class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if not strs:
            return ""

        prefix = strs[0]

        for s in strs[1:]:
            while not s.startswith(prefix):
                prefix = prefix[:-1]

                if not prefix:
                    return ""

        return prefix