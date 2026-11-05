"""
Problem: 240. Search a 2D Matrix II
Approach: Brute Force

Traverse every element of the matrix and check
whether it matches the target.

Time Complexity: O(m * n)
Space Complexity: O(1)
"""

class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])

        for row in range(m):
            for col in range(n):
                if matrix[row][col] == target:
                    return True

        return False