"""
Problem: 15. 3Sum
Approach: Optimal - Sorting + Two Pointers

Sort the array.
For every nums[i], use two pointers to find two numbers
whose sum is -nums[i].

Skip duplicate values to avoid duplicate triplets.

Time Complexity: O(n^2)
Space Complexity: O(1) auxiliary, excluding output
"""

class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        result = []

        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            left = i + 1
            right = len(nums) - 1

            while left < right:
                totalSum = nums[i] + nums[left] + nums[right]

                if totalSum == 0:
                    result.append([
                        nums[i],
                        nums[left],
                        nums[right]
                    ])

                    left += 1
                    right -= 1

                    while left < right and nums[left] == nums[left - 1]:
                        left += 1

                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1

                elif totalSum < 0:
                    left += 1

                else:
                    right -= 1

        return result