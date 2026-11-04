"""
Problem: Row with Maximum 1s
Approach: Brute Force - Sum each row
Time Complexity: O(m * n)
Space Complexity: O(1)
"""

class Solution:
    def rowAndMaximumOnes(self, mat: list[list[int]]) -> int:
        m = len(mat)
        n = len(mat[0])

        count_max = 0
        idx = 0

        for i in range(m):
            count_one = sum(mat[i])

            if count_one > count_max:
                count_max = count_one
                idx = i

        return [idx, count_max]