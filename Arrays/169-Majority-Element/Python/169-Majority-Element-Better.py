"""
Problem: 169. Majority Element
Approach: Better - Hash Map

Store the frequency of each element.
As soon as an element's frequency becomes greater than n / 2,
return it.

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        n = len(nums)
        freq = {}

        for num in nums:
            freq[num] = freq.get(num, 0) + 1

            if freq[num] > n / 2:
                return num

        return -1