"""
Problem: Longest Consecutive Sequence
Approach: Brute Force

For every number, repeatedly check whether the next consecutive
number exists using linear search.

Time Complexity: O(n^2)
Space Complexity: O(1)
"""

class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        longest = 0

        for num in nums:
            x = num
            count = 1

            while x + 1 in nums:
                x += 1
                count += 1

            longest = max(longest, count)

        return longest