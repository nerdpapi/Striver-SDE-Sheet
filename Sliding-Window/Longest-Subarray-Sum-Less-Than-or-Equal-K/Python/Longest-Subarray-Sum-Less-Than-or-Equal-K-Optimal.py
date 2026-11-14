# Optimal: O(n) Time, O(1) Space
# Sliding Window using while

class Solution:
    def longestSubarray(self, nums: list[int], k: int) -> int:
        left = 0
        total = 0
        maxLen = 0

        for right in range(len(nums)):
            total += nums[right]

            while total > k:
                total -= nums[left]
                left += 1

            maxLen = max(maxLen, right - left + 1)

        return maxLen