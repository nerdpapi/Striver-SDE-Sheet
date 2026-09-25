"""
Problem: 560. Subarray Sum Equals K
Approach: Brute Force

Generate every subarray and maintain its running sum.
Count whenever the sum equals k.

Time Complexity: O(n^2)
Space Complexity: O(1)
"""

class Solution:
    def subarraySum(self, nums: list[int], k: int) -> int:
        n = len(nums)
        count = 0

        for i in range(n):
            total = 0

            for j in range(i, n):
                total += nums[j]

                if total == k:
                    count += 1

        return count