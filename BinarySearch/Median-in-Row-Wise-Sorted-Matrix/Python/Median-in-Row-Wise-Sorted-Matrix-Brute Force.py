"""
Problem: Median in a Row-Wise Sorted Matrix
Approach: Brute Force - Flatten and Sort
Time Complexity: O(m * n * log(m * n))
Space Complexity: O(m * n)
"""

class Solution:
    def median(self, mat: list[list[int]]) -> int:
        m = len(mat)
        n = len(mat[0])

        flatArr = []

        for i in range(m):
            for j in range(n):
                flatArr.append(mat[i][j])

        flatArr.sort()

        return flatArr[(m * n) // 2]