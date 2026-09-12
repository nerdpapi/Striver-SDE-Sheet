"""
Problem: 287. Find the Duplicate Number
Approach: Better - Frequency Array

Store the frequency of every number.
The first number whose frequency becomes 2 is the duplicate.

Time Complexity: O(n)
Space Complexity: O(n)
"""


class Solution:
    def findDuplicate(self, nums: list[int]) -> int:
        frequency = [0] * (len(nums))

        for num in nums:
            frequency[num] += 1

            if frequency[num] == 2:
                return num

        return -1