"""
Problem: 240. Search a 2D Matrix II
Approach: Better - Binary Search in Every Row

Since every row is sorted, perform binary search
on each row.

Time Complexity: O(m * log n)
Space Complexity: O(1)
"""

class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])

        for i in range(m):
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