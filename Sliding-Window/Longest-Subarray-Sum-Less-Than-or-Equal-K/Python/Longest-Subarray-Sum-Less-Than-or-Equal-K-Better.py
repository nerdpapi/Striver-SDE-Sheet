# Better: O(n²) Time, O(1) Space

class Solution:
    def longestSubarray(self, nums: list[int], k: int) -> int:
        n = len(nums)
        maxLen = 0

        for i in range(n):
            total = 0

            for j in range(i, n):
                total += nums[j]

                if total <= k:
                    maxLen = max(maxLen, j - i + 1)

        return maxLen