"""
Problem: Longest Consecutive Sequence
Approach: Optimal - HashSet

Store all numbers in a set.

Only start a sequence when num - 1 does not exist.
Then keep checking num + 1, num + 2, etc.

Time Complexity: O(n) average
Space Complexity: O(n)
"""

class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        nums_set = set(nums)
        longest = 0

        for num in nums_set:
            if num - 1 not in nums_set:
                current = num
                count = 1

                while current + 1 in nums_set:
                    current += 1
                    count += 1

                longest = max(longest, count)

        return longest