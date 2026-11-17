# Better: O(n) Time, O(1) Space
# Sliding Window using while

class Solution:
    def longestOnes(self, nums: list[int], k: int) -> int:
        maxLen = 0
        n = len(nums)
        left = 0
        zeroes = 0

        for right in range(n):
            if nums[right] == 0:
                zeroes += 1

            while zeroes > k:
                if nums[left] == 0:
                    zeroes -= 1

                left += 1

            length = right - left + 1
            maxLen = max(maxLen, length)

        return maxLen