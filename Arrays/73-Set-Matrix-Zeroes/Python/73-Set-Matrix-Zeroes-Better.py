"""
Problem: 73. Set Matrix Zeroes
Approach: Better - Row and Column Arrays
Time Complexity: O(m * n)
Space Complexity: O(m + n)
"""


class Solution:
    def setZeroes(self, matrix):
        m = len(matrix)
        n = len(matrix[0])

        row = [False] * m
        col = [False] * n

        # Store which rows and columns contain zero
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    row[i] = True
                    col[j] = True

        # Set cells to zero
        for i in range(m):
            for j in range(n):
                if row[i] or col[j]:
                    matrix[i][j] = 0