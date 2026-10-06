"""
Problem: 451. Sort Characters By Frequency
Approach: Frequency Map + Sorting

Time Complexity: O(n log n)
Space Complexity: O(n)
"""

class Solution:
    def frequencySort(self, s: str) -> str:
        freq = {}

        for ch in s:
            freq[ch] = freq.get(ch, 0) + 1

        chars = list(freq.keys())
        chars.sort(key=freq.get, reverse=True)

        ans = []

        for ch in chars:
            ans.append(ch * freq[ch])

        return "".join(ans)