"""
Problem: 2965. Find Missing and Repeated Values
Approach: Brute Force

Time Complexity: O(n^4)
Space Complexity: O(1)
"""

class Solution:
    def findMissingAndRepeatedValues(self, grid: list[list[int]]) -> list[int]:

        n = len(grid)

        repeating = -1
        missing = -1

        for num in range(1, n * n + 1):

            count = 0

            for row in grid:
                for value in row:
                    if value == num:
                        count += 1

            if count == 2:
                repeating = num

            elif count == 0:
                missing = num

            if repeating != -1 and missing != -1:
                break

        return [repeating, missing]