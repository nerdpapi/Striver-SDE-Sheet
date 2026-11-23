"""
*
* Problem: Subarrays with K Different Integers
* Approach: Sliding Window + At Most Technique
*
* Time Complexity: O(n)
* Space Complexity: O(k)
*
"""

from collections import defaultdict

class Solution:
    def subarraysWithKDistinct(self, nums: list[int], k: int) -> int:

        def atMost(k):
            if k < 0:
                return 0

            n = len(nums)
            left = 0
            count = 0
            freq_map = defaultdict(int)

            for right in range(n):
                freq_map[nums[right]] += 1

                while len(freq_map) > k:
                    freq_map[nums[left]] -= 1

                    if freq_map[nums[left]] == 0:
                        del freq_map[nums[left]]

                    left += 1

                count += right - left + 1

            return count

        return atMost(k) - atMost(k - 1)