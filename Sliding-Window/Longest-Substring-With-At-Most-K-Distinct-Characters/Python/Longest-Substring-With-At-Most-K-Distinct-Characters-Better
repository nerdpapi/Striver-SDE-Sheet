"""
*
* Problem: Longest Substring With At Most K Distinct Characters
* Approach: Sliding Window + Frequency Map (While)
*
* Time Complexity: O(n)
* Space Complexity: O(k)
*
"""

from collections import defaultdict

class Solution:
    def longestKSubstr(self, s: str, k: int) -> int:
        maxLen = 0
        n = len(s)

        freq_map = defaultdict(int)
        left = 0

        for right in range(n):
            freq_map[s[right]] += 1

            while len(freq_map) > k:
                freq_map[s[left]] -= 1

                if freq_map[s[left]] == 0:
                    del freq_map[s[left]]

                left += 1

            maxLen = max(maxLen, right - left + 1)

        return maxLen