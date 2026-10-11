"""
Problem: 5. Longest Palindromic Substring
Approach: Expand Around Center

Time Complexity: O(n^2)
Space Complexity: O(1)
"""

class Solution:
    def longestPalindrome(self, s: str) -> str:
        start = 0
        max_len = 0

        for i in range(len(s)):
            # Odd-length palindrome
            l = r = i

            while l >= 0 and r < len(s) and s[l] == s[r]:
                if r - l + 1 > max_len:
                    start = l
                    max_len = r - l + 1

                l -= 1
                r += 1

            # Even-length palindrome
            l = i
            r = i + 1

            while l >= 0 and r < len(s) and s[l] == s[r]:
                if r - l + 1 > max_len:
                    start = l
                    max_len = r - l + 1

                l -= 1
                r += 1

        return s[start:start + max_len]