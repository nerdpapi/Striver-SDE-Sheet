class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        max_len = 0
        hash_array = [-1] * 256

        for right in range(len(s)):
            index = ord(s[right])

            if hash_array[index] >= left:
                left = hash_array[index] + 1

            hash_array[index] = right

            max_len = max(max_len, right - left + 1)

        return max_len