"""
Problem: Longest Consecutive Sequence
Approach: Better - Sorting

Sort the array and track consecutive elements.
Duplicates are ignored.

Time Complexity: O(n log n)
Space Complexity: O(1) auxiliary
"""

class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        if not nums:
            return 0

        nums.sort()

        last_smallest = float("-inf")
        longest = 0
        count = 0

        for num in nums:
            if num - 1 == last_smallest:
                count += 1
                last_smallest = num

            elif num != last_smallest:
                count = 1
                last_smallest = num

            longest = max(longest, count)

        return longest