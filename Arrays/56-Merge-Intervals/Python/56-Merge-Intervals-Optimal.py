"""
Problem: 56. Merge Intervals
Approach: Optimal - Sorting + Greedy

Sort intervals by their starting point.

For every interval:
- If it does not overlap with the last merged interval,
  add it to the answer.
- Otherwise, extend the end of the last merged interval.

Brute Force:
Sort the intervals and for every interval scan forward
to merge all overlapping intervals.

Time Complexity: O(n log n)
Space Complexity: O(n)
"""


class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        intervals.sort()

        ans = []

        for interval in intervals:
            if not ans or interval[0] > ans[-1][1]:
                ans.append(interval)
            else:
                ans[-1][1] = max(ans[-1][1], interval[1])

        return ans