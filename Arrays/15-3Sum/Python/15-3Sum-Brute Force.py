"""
Problem: 15. 3Sum
Approach: Brute Force

Check every possible triplet.
Sort each valid triplet and use a set to remove duplicates.

Time Complexity: O(n^3)
Space Complexity: O(k), where k is the number of unique triplets
"""

class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        n = len(nums)
        seen = set()
        result = []

        for i in range(n):
            for j in range(i + 1, n):
                for k in range(j + 1, n):
                    if nums[i] + nums[j] + nums[k] == 0:
                        triplet = [nums[i], nums[j], nums[k]]
                        triplet.sort()

                        key = ",".join(map(str, triplet))

                        if key not in seen:
                            seen.add(key)
                            result.append(triplet)

        return result