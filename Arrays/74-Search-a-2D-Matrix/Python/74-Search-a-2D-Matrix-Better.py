"""
Problem: 74. Search a 2D Matrix
Approach: Better - Row Selection + Binary Search

First find the row where the target can possibly exist
using the first and last elements of each row.

Then perform binary search in that row.

Time Complexity: O(m + log n)
Space Complexity: O(1)
"""

class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])

        for i in range(m):
            if matrix[i][0] <= target <= matrix[i][n - 1]:
                low = 0
                high = n - 1

                while low <= high:
                    mid = (low + high) // 2

                    if matrix[i][mid] == target:
                        return True
                    elif matrix[i][mid] < target:
                        low = mid + 1
                    else:
                        high = mid - 1

                return False

        return False