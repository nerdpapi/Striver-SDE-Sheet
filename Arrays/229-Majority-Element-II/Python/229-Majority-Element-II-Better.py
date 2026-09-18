"""
Problem: 229. Majority Element II
Approach: Better - Hash Map

Store the frequency of each element.
Whenever an element's frequency becomes greater than n / 3,
add it to the result.

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def majorityElement(self, nums: list[int]) -> list[int]:
        n = len(nums)
        freq = {}
        result = []

        for num in nums:
            freq[num] = freq.get(num, 0) + 1

            if freq[num] > n / 3 and num not in result:
                result.append(num)

            if len(result) == 2:
                break

        return result