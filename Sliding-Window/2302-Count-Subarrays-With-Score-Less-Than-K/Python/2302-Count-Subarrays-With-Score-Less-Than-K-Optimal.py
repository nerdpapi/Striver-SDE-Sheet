# Optimal: O(n) Time, O(1) Space
# Sliding Window / Two Pointers

class Solution:
    def countSubarrays(self, nums: list[int], k: int) -> int:
        left = 0
        total = 0
        count = 0

        for right in range(len(nums)):
            total += nums[right]

            while total * (right - left + 1) >= k:
                total -= nums[left]
                left += 1

            count += right - left + 1

        return count