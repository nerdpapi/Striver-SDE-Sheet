"""
*
* Problem: Longest Repeating Character Replacement
* Approach: Brute Force + Frequency Array
*
* Time Complexity: O(26 * n^2)
* Space Complexity: O(26) = O(1)
*
"""

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        maxLen = 0
        n = len(s)

        for i in range(n):
            hash_arr = [0] * 26
            maxFrq = 0

            for j in range(i, n):
                index = ord(s[j]) - ord("A")

                hash_arr[index] += 1
                maxFrq = max(maxFrq, hash_arr[index])

                replacement = (j - i + 1) - maxFrq

                if replacement <= k:
                    maxLen = max(maxLen, j - i + 1)
                else:
                    break

        return maxLen