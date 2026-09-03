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

        col0 = 1

        # Mark rows and columns
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:

                    # Mark row
                    matrix[i][0] = 0

                    # Mark column only if j is not 0
                    if j != 0:
                        matrix[0][j] = 0
                    else:
                        col0 = 0

        # Set inner matrix
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0

        # First row
        if matrix[0][0] == 0:
            for j in range(n):
                matrix[0][j] = 0

        # First column
        if col0 == 0:
            for i in range(m):
                matrix[i][0] = 0