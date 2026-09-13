"""
Problem: 2965. Find Missing and Repeated Values
Approach: Optimal - Mathematical Equations

Time Complexity: O(n^2)
Space Complexity: O(1)
"""

class Solution:
    def findMissingAndRepeatedValues(self, grid: list[list[int]]) -> list[int]:

        n = len(grid)
        total = n * n

        sum_val = 0
        sqr_sum = 0

        for row in grid:
            for num in row:
                sum_val += num
                sqr_sum += num * num

        # Expected sum: 1 + 2 + ... + total
        expected_sum = total * (total + 1) // 2

        # Expected square sum: 1² + 2² + ... + total²
        expected_sqr_sum = (
            total * (total + 1) * (2 * total + 1)
        ) // 6

        sum_diff = sum_val - expected_sum
        sqr_diff = sqr_sum - expected_sqr_sum

        # R + M
        sum_add = sqr_diff // sum_diff

        repeating = (sum_diff + sum_add) // 2
        missing = (sum_add - sum_diff) // 2

        return [repeating, missing]