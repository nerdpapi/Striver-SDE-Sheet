"""
Problem: 229. Majority Element II
Approach: Brute Force

For every unique element, count its frequency by scanning
the entire array.

An element is added if its frequency is greater than n / 3.
There can be at most two such elements.

Time Complexity: O(n^2)
Space Complexity: O(1) excluding output
"""

class Solution:
    def majorityElement(self, nums: list[int]) -> list[int]:
        result = []
        n = len(nums)

        for i in range(n):
            if nums[i] not in result:
                count = 0

                for j in range(n):
                    if nums[i] == nums[j]:
                        count += 1

                if count > n / 3:
                    result.append(nums[i])

            if len(result) == 2:
                break

        return result