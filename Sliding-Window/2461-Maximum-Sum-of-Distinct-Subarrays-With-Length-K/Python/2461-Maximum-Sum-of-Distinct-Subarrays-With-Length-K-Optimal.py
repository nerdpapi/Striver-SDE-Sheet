
"""
*
* Problem: 2461. Maximum Sum of Distinct Subarrays With Length K
* Approach: Optimal - Fixed-Size Sliding Window + Hash Map
*
* Time Complexity: O(n)
* Space Complexity: O(k)
*
"""

from collections import defaultdict

class Solution:
    def maximumSubarraySum(self, nums: list[int], k: int) -> int:
        n = len(nums)
        freq_map = defaultdict(int)

        maxSum = 0
        total = 0
        left = 0

        for right in range(n):
            total += nums[right]
            freq_map[nums[right]] += 1

            if right - left + 1 == k:

                if len(freq_map) == k:
                    maxSum = max(maxSum, total)

                freq_map[nums[left]] -= 1

                if freq_map[nums[left]] == 0:
                    del freq_map[nums[left]]

                total -= nums[left]
                left += 1

        return maxSum
