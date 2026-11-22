"""
*
* Problem: Minimum Window Substring
* Approach: Brute Force + Frequency Array
*
* Time Complexity: O(m^2 + mn)
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

        for i in range(m):
            hash_arr = [0] * 256

            for j in range(n):
                hash_arr[ord(t[j])] += 1

            count = 0

            for j in range(i, m):
                if hash_arr[ord(s[j])] > 0:
                    count += 1

                hash_arr[ord(s[j])] -= 1

                if count == n:
                    if minLen > j - i + 1:
                        minLen = j - i + 1
                        strIdx = i

                    break

        return "" if strIdx == -1 else s[strIdx:strIdx + minLen]