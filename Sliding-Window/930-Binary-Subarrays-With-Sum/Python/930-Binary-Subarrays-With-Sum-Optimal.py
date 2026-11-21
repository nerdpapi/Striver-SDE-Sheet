"""
*
* Problem: Binary Subarrays With Sum
* Approach: Sliding Window + At Most Technique
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
"""

class Solution:
    def numSubarraysWithSum(self, nums: list[int], goal: int) -> int:

        def atMost(goal):
            if goal < 0:
                return 0

            n = len(nums)
            left = 0
            count = 0
            total = 0

            for right in range(n):
                total += nums[right]

                while total > goal:
                    total -= nums[left]
                    left += 1

                count += right - left + 1

            return count

        return atMost(goal) - atMost(goal - 1)