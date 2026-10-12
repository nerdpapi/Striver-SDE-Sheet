"""
Problem: 1781. Sum of Beauty of All Substrings
Approach: Brute Force + Frequency Map

Time Complexity: O(n^2 * 26)
Space Complexity: O(26)
"""

from collections import defaultdict

class Solution:
    def beautySum(self, s: str) -> int:
        total = 0
        n = len(s)

        for i in range(n):
            freq = defaultdict(int)

            for j in range(i, n):
                freq[s[j]] += 1

                max_freq = max(freq.values())
                min_freq = min(freq.values())

                total += max_freq - min_freq

        return total