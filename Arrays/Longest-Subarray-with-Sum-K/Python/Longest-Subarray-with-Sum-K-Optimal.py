"""
Problem: Longest Subarray with Sum K
Approach: Optimal - Sliding Window

This approach works when all array elements are non-negative.

Expand the window using right.
If the sum becomes greater than k, shrink from the left.

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def longestSubarray(self, nums: list[int], k: int) -> int:
        left = 0
        curr_sum = 0
        length = 0

        for right in range(len(nums)):
            curr_sum += nums[right]

            while curr_sum > k and left <= right:
                curr_sum -= nums[left]
                left += 1

            if curr_sum == k:
                length = max(length, right - left + 1)

        return length