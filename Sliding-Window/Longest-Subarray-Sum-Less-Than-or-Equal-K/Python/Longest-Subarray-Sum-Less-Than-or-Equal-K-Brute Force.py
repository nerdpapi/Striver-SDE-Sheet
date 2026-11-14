# Brute Force: O(n³) Time, O(1) Space

class Solution:
    def longestSubarray(self, nums: list[int], k: int) -> int:
        n = len(nums)
        maxLen = 0

        for i in range(n):
            for j in range(i, n):
                total = 0

                for p in range(i, j + 1):
                    total += nums[p]

                if total <= k:
                    maxLen = max(maxLen, j - i + 1)

        return maxLen