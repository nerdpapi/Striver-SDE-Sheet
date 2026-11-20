"""
*
* Problem: Number of Substrings Containing All Three Characters
* Approach: Brute Force + Character Presence Array
*
* Time Complexity: O(n^2)
* Space Complexity: O(1)
*
"""

class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        n = len(s)
        count = 0

        for i in range(n):
            hash_arr = [0] * 3

            for j in range(i, n):
                index = ord(s[j]) - ord('a')
                hash_arr[index] = 1

                if sum(hash_arr) == 3:
                    count += n - j
                    break

        return count