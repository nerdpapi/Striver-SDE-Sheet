class Solution:
    def setZeroes(self, matrix):
        m = len(matrix)
        n = len(matrix[0])

        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:

                    # Mark row
                    for col in range(n):
                        if matrix[i][col] != 0:
                            matrix[i][col] = -1

                    # Mark column
                    for row in range(m):
                        if matrix[row][j] != 0:
                            matrix[row][j] = -1

        # Convert markers to 0
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == -1:
                    matrix[i][j] = 0