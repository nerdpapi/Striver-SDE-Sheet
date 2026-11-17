# Brute Force: O(n²) Time, O(1) Space

class Solution:
    def longestOnes(self, nums: list[int], k: int) -> int:
        maxLen = 0
        n = len(nums)

        for i in range(n):
            zeroes = 0

            for j in range(i, n):
                if nums[j] == 0:
                    zeroes += 1

                if zeroes <= k:
                    maxLen = max(maxLen, j - i + 1)
                else:
                    break

        return maxLen