"""
*
* Problem: Binary Subarrays With Sum
* Approach: Brute Force + Running Sum
*
* Time Complexity: O(n^2)
* Space Complexity: O(1)
*
"""

class Solution:
    def numSubarraysWithSum(self, nums: list[int], goal: int) -> int:
        n = len(nums)
        count = 0

        for i in range(n):
            total = 0

            for j in range(i, n):
                total += nums[j]

                if total == goal:
                    count += 1

                if total > goal:
                    break

        return count