"""
*
* Problem: Subarrays with K Different Integers
* Approach: Brute Force + Frequency HashMap
*
* Time Complexity: O(n^2)
* Space Complexity: O(k)
*
"""

from collections import defaultdict

class Solution:
    def subarraysWithKDistinct(self, nums: list[int], k: int) -> int:
        count = 0
        n = len(nums)

        for i in range(n):
            freq_map = defaultdict(int)

            for j in range(i, n):
                freq_map[nums[j]] += 1

                if len(freq_map) == k:
                    count += 1

                if len(freq_map) > k:
                    break

        return count