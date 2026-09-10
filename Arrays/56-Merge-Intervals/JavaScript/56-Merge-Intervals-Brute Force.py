"""
Problem: 56. Merge Intervals
Approach: Brute Force

Sort intervals by start time.
For every interval, scan the following intervals and merge
all overlapping intervals.

Time Complexity: O(n^2)
Space Complexity: O(n) for the output
"""


class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        intervals.sort()

        n = len(intervals)
        ans = []

        for i in range(n):
            start = intervals[i][0]
            end = intervals[i][1]

            # Already completely covered
            if ans and end <= ans[-1][1]:
                continue

            for j in range(i + 1, n):
                if intervals[j][0] <= end:
                    end = max(end, intervals[j][1])
                else:
                    break

            ans.append([start, end])

        return ans