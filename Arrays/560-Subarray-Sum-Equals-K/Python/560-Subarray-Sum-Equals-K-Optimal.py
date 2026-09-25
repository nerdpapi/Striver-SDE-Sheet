"""
Problem: 560. Subarray Sum Equals K
Approach: Optimal - Prefix Sum + Frequency Map

If:
    current_prefix - previous_prefix = k

then the subarray between those two prefix sums has sum k.

Store the frequency of every prefix sum so that all
valid subarrays ending at the current index are counted.

Time Complexity: O(n)
Space Complexity: O(n)
"""

from collections import defaultdict

class Solution:
    def subarraySum(self, nums: list[int], k: int) -> int:
        prefix_sum = 0
        count = 0

        freq = defaultdict(int)
        freq[0] = 1

        for num in nums:
            prefix_sum += num

            count += freq[prefix_sum - k]

            freq[prefix_sum] += 1

        return count