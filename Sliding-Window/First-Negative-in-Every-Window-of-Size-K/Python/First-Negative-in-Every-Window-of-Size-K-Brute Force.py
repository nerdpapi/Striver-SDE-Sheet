
"""
*
* Problem: First Negative Integer in Every Window of Size K
* Approach: Brute Force - Generate Each Window and Search
*
* Time Complexity: O((n-k+1) * k) = O(n*k)
* Space Complexity: O(k) auxiliary space
*
"""

class Solution:
    def firstNegInt(self, arr, k):
        n = len(arr)
        negatives = []

        for i in range(n - k + 1):
            window = []

            for j in range(i, i + k):
                window.append(arr[j])

            for negative in window:
                if negative < 0:
                    negatives.append(negative)
                    break
            else:
                negatives.append(0)

        return negatives
