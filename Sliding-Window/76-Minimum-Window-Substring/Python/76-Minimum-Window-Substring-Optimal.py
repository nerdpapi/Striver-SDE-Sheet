"""
*
* Problem: Minimum Window Substring
* Approach: Sliding Window + Frequency Array
*
* Time Complexity: O(m + n)
* Space Complexity: O(1)
*
"""

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        minLen = float('inf')
        strIdx = -1

        m = len(s)
        n = len(t)

        if n > m:
            return ""

        left = 0
        count = 0

        hash_arr = [0] * 256

        for i in range(n):
            hash_arr[ord(t[i])] += 1

        for right in range(m):
            if hash_arr[ord(s[right])] > 0:
                count += 1

            hash_arr[ord(s[right])] -= 1

            while count == n:
                if minLen > right - left + 1:
                    minLen = right - left + 1
                    strIdx = left

                hash_arr[ord(s[left])] += 1

                if hash_arr[ord(s[left])] > 0:
                    count -= 1

                left += 1

        return "" if strIdx == -1 else s[strIdx:strIdx + minLen]