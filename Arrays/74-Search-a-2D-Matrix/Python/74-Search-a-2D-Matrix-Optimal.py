"""
Problem: 74. Search a 2D Matrix
Approach: Optimal - Binary Search on Virtual 1D Array

Treat the matrix as a sorted 1D array.
Convert the 1D index back to matrix coordinates:

row = mid // n
col = mid % n

Time Complexity: O(log(m * n))
Space Complexity: O(1)
"""

class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])

        low = 0
        high = m * n - 1

        while low <= high:
            mid = (low + high) // 2

            row = mid // n
            col = mid % n

            if matrix[row][col] == target:
                return True
            elif matrix[row][col] < target:
                low = mid + 1
            else:
                high = mid - 1

        return False