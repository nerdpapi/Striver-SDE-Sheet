"""
Problem: 1. Two Sum
Approach: Optimal - HashMap

For every number, calculate its required complement:
target - nums[i].

If the complement already exists in the map,
return its index and the current index.

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        n = len(nums)
        mapNums = {}

        for i in range(n):
            complement = target - nums[i]

            if complement in mapNums:
                return [mapNums[complement], i]

            mapNums[nums[i]] = i

        return []