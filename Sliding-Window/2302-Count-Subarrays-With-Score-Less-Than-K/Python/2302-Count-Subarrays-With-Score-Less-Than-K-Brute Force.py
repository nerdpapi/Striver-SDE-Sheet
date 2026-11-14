# Brute Force: O(n³) Time, O(1) Space

class Solution:
    def countSubarrays(self, nums: list[int], k: int) -> int:
        n = len(nums)
        count = 0

        for i in range(n):
            for j in range(i, n):
                total = 0

                for p in range(i, j + 1):
                    total += nums[p]

                length = j - i + 1
                score = total * length

                if score < k:
                    count += 1

        return count