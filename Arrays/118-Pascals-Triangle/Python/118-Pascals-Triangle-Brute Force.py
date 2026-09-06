"""
Problem: 118. Pascal's Triangle
Approach: Brute Force - Calculate Each Element

Each element is calculated using the binomial coefficient:
C(r - 1, c - 1)

Time Complexity: O(n^3)
Space Complexity: O(1) auxiliary space
"""


class Solution:

    def get_element(self, r, c):
        n = r - 1
        k = c - 1

        result = 1

        for i in range(k):
            result = result * (n - i) // (i + 1)

        return result

    def generate(self, numRows):
        ans = []

        for r in range(1, numRows + 1):
            row = []

            for c in range(1, r + 1):
                row.append(self.get_element(r, c))

            ans.append(row)

        return ans