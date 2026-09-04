"""
Problem: 118. Pascal's Triangle
Approach: Optimal - Generate Each Row Using Previous Element

Each row is generated using the previous element in O(row length).

Time Complexity: O(n^2)
Space Complexity: O(1) auxiliary space
                  O(n^2) including the output
"""


class Solution:

    def getRow(self, rowIndex):
        row = [1]
        result = 1

        n = rowIndex + 1

        for i in range(1, n):
            result = result * (n - i) // i
            row.append(result)

        return row

    def generate(self, numRows):
        ans = []

        for i in range(numRows):
            ans.append(self.getRow(i))

        return ans