"""
*
* Problem: Number of Substrings Containing All Three Characters
* Approach: Last Seen Index + Minimum Position
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
"""

class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        n = len(s)
        count = 0

        hash_arr = [-1] * 3

        for i in range(n):
            index = ord(s[i]) - ord('a')
            hash_arr[index] = i

            count += 1 + min(hash_arr[0], hash_arr[1], hash_arr[2])

        return count