"""
Problem: Find a Peak Element II
Approach: Binary Search on Columns
Time Complexity: O(m * log n)
Space Complexity: O(1)
"""

class Solution:
    def findPeakGrid(self, mat: list[list[int]]) -> list[int]:
        m = len(mat)
        n = len(mat[0])

        def findRowIndex(mat, col):
            maxVal = float("-inf")
            index = -1

            for i in range(m):
                if mat[i][col] > maxVal:
                    maxVal = mat[i][col]
                    index = i

            return index

        low = 0
        high = n - 1

        while low <= high:
            mid = (low + high) // 2

            row = findRowIndex(mat, mid)

            left = mat[row][mid - 1] if mid - 1 >= 0 else -1
            right = mat[row][mid + 1] if mid + 1 < n else -1

            if left < mat[row][mid] > right:
                return [row, mid]

            elif mat[row][mid] < left:
                high = mid - 1

            else:
                low = mid + 1

        return [-1, -1]