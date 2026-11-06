"""
Problem: Find a Peak Element II
Approach: Brute Force - Check all 4 directions for each element
Time Complexity: O(m * n * 4)
Space Complexity: O(1)
"""

class Solution:
    def findPeakGrid(self, mat: list[list[int]]) -> list[int]:
        m = len(mat)
        n = len(mat[0])

        for i in range(m):
            for j in range(n):
                up = mat[i - 1][j] if i > 0 else -1
                down = mat[i + 1][j] if i + 1 < m else -1
                left = mat[i][j - 1] if j > 0 else -1
                right = mat[i][j + 1] if j + 1 < n else -1

                if (
                    mat[i][j] > up
                    and mat[i][j] > down
                    and mat[i][j] > left
                    and mat[i][j] > right
                ):
                    return [i, j]

        return [-1, -1]