# Better: O(n²) Time, O(1) Space

class Solution:
    def countSubarrays(self, nums: list[int], k: int) -> int:
        n = len(nums)
        count = 0

        for i in range(n):
            total = 0

            for j in range(i, n):
                total += nums[j]

                length = j - i + 1
                score = total * length

                if score < k:
                    count += 1

        return count