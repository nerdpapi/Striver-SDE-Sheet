"""
*
* Problem: Longest Substring with K Uniques
* Approach: Brute Force + Frequency Map
*
* Time Complexity: O(n^2)
* Space Complexity: O(k)
*
"""

from collections import defaultdict

class Solution:
    def longestKSubstr(self, s: str, k: int) -> int:
        maxLen = -1
        n = len(s)

        for i in range(n):
            freq_map = defaultdict(int)

            for j in range(i, n):
                freq_map[s[j]] += 1

                if len(freq_map) == k:
                    maxLen = max(maxLen, j - i + 1)

                elif len(freq_map) > k:
                    break

        return maxLen