"""
Problem: Find a Peak Element II
Approach: Better - Find Global Maximum
Time Complexity: O(m * n)
Space Complexity: O(1)
"""

class Solution:
    def findPeakGrid(self, mat: list[list[int]]) -> list[int]:
        m = len(mat)
        n = len(mat[0])

        max_val = float("-inf")
        row_idx = -1
        col_idx = -1

        for i in range(m):
            for j in range(n):
                if mat[i][j] > max_val:
                    max_val = mat[i][j]
                    row_idx = i
                    col_idx = j

        return [row_idx, col_idx]