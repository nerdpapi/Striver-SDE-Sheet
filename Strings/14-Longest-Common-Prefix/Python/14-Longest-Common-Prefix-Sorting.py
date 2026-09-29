"""
Problem: 14. Longest Common Prefix
Approach: Sorting

Sort the strings lexicographically.
The common prefix of the first and last strings
is the common prefix of all strings.

Time Complexity: O(n log n * m)
Space Complexity: O(n)
"""

class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if not strs:
            return ""

        strs.sort()

        first = strs[0]
        last = strs[-1]

        i = 0

        while i < len(first) and i < len(last):
            if first[i] != last[i]:
                break
            i += 1

        return first[:i]