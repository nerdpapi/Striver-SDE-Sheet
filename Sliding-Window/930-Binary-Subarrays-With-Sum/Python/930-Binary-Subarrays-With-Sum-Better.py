"""
*
* Problem: Binary Subarrays With Sum
* Approach: Prefix Sum + Frequency HashMap
*
* Time Complexity: O(n)
* Space Complexity: O(n)
*
"""

from collections import defaultdict

class Solution:
    def numSubarraysWithSum(self, nums: list[int], goal: int) -> int:
        prefix_sum = 0
        count = 0

        freq = defaultdict(int)
        freq[0] = 1

        for num in nums:
            prefix_sum += num

            count += freq[prefix_sum - goal]

            freq[prefix_sum] += 1

        return count