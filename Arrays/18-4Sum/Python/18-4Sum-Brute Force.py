"""
Problem: 18. 4Sum
Approach: Brute Force + Set

Try every combination of four indices.
Sort each valid quadruplet and use a set to remove duplicates.

Time Complexity: O(n^4)
Space Complexity: O(n)
"""

class Solution:
    def fourSum(self, nums: list[int], target: int) -> list[list[int]]:
        result = []
        seen = set()
        n = len(nums)

        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j + 1, n):
                    for l in range(k + 1, n):
                        total = nums[i] + nums[j] + nums[k] + nums[l]

                        if total == target:
                            temp = [nums[i], nums[j], nums[k], nums[l]]
                            temp.sort()

                            key = tuple(temp)

                            if key not in seen:
                                seen.add(key)
                                result.append(temp)

        return result