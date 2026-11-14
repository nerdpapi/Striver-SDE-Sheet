"""
Problem: Longest Subarray with Sum K
Approach: Brute Force

Generate every subarray and maintain its sum.
Whenever the sum equals k, update the maximum length.

Time Complexity: O(n^2)
Space Complexity: O(1)
"""

class Solution:
    def longestSubarray(self, nums: list[int], k: int) -> int:
        longest = 0

        for i in range(len(nums)):
            current_sum = 0

            for j in range(i, len(nums)):
                current_sum += nums[j]

                if current_sum == k:
                    longest = max(longest, j - i + 1)

        return longest