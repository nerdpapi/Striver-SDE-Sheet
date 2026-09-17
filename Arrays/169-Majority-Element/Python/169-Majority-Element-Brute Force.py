"""
Problem: 169. Majority Element
Approach: Brute Force

For every element, count its frequency by scanning the
entire array. If its frequency is greater than n / 2,
it is the majority element.

Time Complexity: O(n^2)
Space Complexity: O(1)
"""

class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        n = len(nums)

        for i in range(n):
            count = 0

            for j in range(n):
                if nums[i] == nums[j]:
                    count += 1

            if count > n / 2:
                return nums[i]

        return -1