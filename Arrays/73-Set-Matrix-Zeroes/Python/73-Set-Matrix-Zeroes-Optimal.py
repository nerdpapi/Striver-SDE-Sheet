"""
Problem: 73. Set Matrix Zeroes
Approach: Optimal - Matrix Markers
Time Complexity: O(m * n)
Space Complexity: O(1)
"""


class Solution:
    def setZeroes(self, matrix):
        m = len(matrix)
        n = len(matrix[0])

        # Tracks whether column 0 needs to be zero
        col0 = 1

        # Use first row and first column as markers
        for i in range(m):

            if matrix[i][0] == 0:
                col0 = 0

            for j in range(1, n):
                if matrix[i][j] == 0:
                    matrix[i][0] = 0
                    matrix[0][j] = 0

        # Set inner matrix
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0

        # Set first row
        if matrix[0][0] == 0:
            for j in range(n):
                matrix[0][j] = 0

        # Set first column
        if col0 == 0:
            for i in range(m):
                matrix[i][0] = 0