"""
*
* Problem: Longest Repeating Character Replacement
* Approach: Sliding Window + Frequency Array (While)
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
        hash_arr = [0] * 26
        maxFrq = 0

        for right in range(n):
            index = ord(s[right]) - ord("A")

            hash_arr[index] += 1
            maxFrq = max(maxFrq, hash_arr[index])

            while (right - left + 1) - maxFrq > k:
                left_index = ord(s[left]) - ord("A")

                hash_arr[left_index] -= 1
                left += 1

            maxLen = max(maxLen, right - left + 1)

        return maxLen