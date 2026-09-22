"""
Problem: 18. 4Sum
Approach: Optimal - Sorting + Two Pointers

Sort the array.
Fix the first two elements and use two pointers for
the remaining two elements.

Skip duplicate values for i, j, left, and right
to avoid duplicate quadruplets.

Time Complexity: O(n^3)
Space Complexity: O(1) auxiliary
"""

class Solution:
    def fourSum(self, nums: list[int], target: int) -> list[list[int]]:
        nums.sort()
        n = len(nums)
        result = []

        for i in range(n):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            for j in range(i + 1, n):
                if j > i + 1 and nums[j] == nums[j - 1]:
                    continue

                left = j + 1
                right = n - 1

                while left < right:
                    total = (
                        nums[i] +
                        nums[j] +
                        nums[left] +
                        nums[right]
                    )

                    if total == target:
                        result.append([
                            nums[i],
                            nums[j],
                            nums[left],
                            nums[right]
                        ])

                        left += 1
                        right -= 1

                        while left < right and nums[left] == nums[left - 1]:
                            left += 1

                        while left < right and nums[right] == nums[right + 1]:
                            right -= 1

                    elif total < target:
                        left += 1

                    else:
                        right -= 1

        return result