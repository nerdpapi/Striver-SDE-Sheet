"""
Problem: Longest Substring With At Most K Distinct Characters
Approach: Sliding Window + Frequency Map

Time Complexity: O(n)
Space Complexity: O(k)
"""

class Solution:
    def longestKSubstr(self, s: str, k: int) -> int:
        l = 0
        r = 0
        freq_map = {}
        max_len = 0

        while r < len(s):
            freq_map[s[r]] = freq_map.get(s[r], 0) + 1

            while len(freq_map) > k:
                freq_map[s[l]] -= 1

                if freq_map[s[l]] == 0:
                    del freq_map[s[l]]

                l += 1

            if len(freq_map) <= k:
                max_len = max(max_len, r - l + 1)

            r += 1

        return max_len if max_len > 0 else -1