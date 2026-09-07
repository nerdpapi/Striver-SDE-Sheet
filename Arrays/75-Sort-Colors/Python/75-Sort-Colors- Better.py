"""
Problem: 75. Sort Colors
Approach: Better - Counting

Count the number of 0s, 1s, and 2s, then overwrite the array
with the required number of each value.

Time Complexity: O(n)
Space Complexity: O(1)
"""


class Solution:
    def sortColors(self, nums: list[int]) -> None:
        count0 = 0
        count1 = 0
        count2 = 0

        # Count 0, 1 and 2
        for num in nums:
            if num == 0:
                count0 += 1
            elif num == 1:
                count1 += 1
            else:
                count2 += 1

        # Fill 0s
        for i in range(count0):
            nums[i] = 0

        # Fill 1s
        for i in range(count0, count0 + count1):
            nums[i] = 1

        # Fill 2s
        for i in range(count0 + count1, len(nums)):
            nums[i] = 2