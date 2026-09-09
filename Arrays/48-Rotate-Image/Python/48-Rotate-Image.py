"""
Problem: 48. Rotate Image
Approach: Optimal - Transpose + Reverse

1. Transpose the matrix.
2. Reverse every row.

This rotates the matrix 90 degrees clockwise in-place.

Brute Force:
Create a new matrix and place matrix[i][j] at
result[j][n - 1 - i].

Time Complexity: O(n^2)
Space Complexity: O(1) for the optimal approach
"""


class Solution:
    def rotate(self, matrix: list[list[int]]) -> None:
        n = len(matrix)

        # Step 1: Transpose
        for i in range(n):
            for j in range(i + 1, n):
                matrix[i][j], matrix[j][i] = (
                    matrix[j][i],
                    matrix[i][j]
                )

        # Step 2: Reverse every row
        for i in range(n):
            matrix[i].reverse()