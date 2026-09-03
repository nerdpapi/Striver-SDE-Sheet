class Solution:
    def setZeroes(self, matrix):
        m = len(matrix)
        n = len(matrix[0])

        row = [False] * m
        col = [False] * n

        # Find zeroes
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    row[i] = True
                    col[j] = True

        # Set zeroes
        for i in range(m):
            for j in range(n):
                if row[i] or col[j]:
                    matrix[i][j] = 0