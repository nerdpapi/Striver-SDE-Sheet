"""
*
* Problem: Longest Repeating Character Replacement
* Approach: Optimized Sliding Window + Frequency Map (If)
*
* Time Complexity: O(n)
* Space Complexity: O(26) = O(1)
*
"""

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        maxLen = 0
        n = len(s)

        left = 0
        freq_map = {}
        maxFrq = 0

        for right in range(n):
            freq_map[s[right]] = freq_map.get(s[right], 0) + 1

            maxFrq = max(maxFrq, freq_map[s[right]])

            if (right - left + 1) - maxFrq > k:
                freq_map[s[left]] -= 1

                if freq_map[s[left]] == 0:
                    del freq_map[s[left]]

                left += 1

            if (right - left + 1) - maxFrq <= k:
                maxLen = max(maxLen, right - left + 1)

        return maxLen