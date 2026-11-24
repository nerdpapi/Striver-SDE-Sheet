
"""
*
* Problem: First Negative Integer in Every Window of Size K
* Approach: Optimal - Sliding Window + Deque
*
* Time Complexity: O(n)
* Space Complexity: O(k)
*
"""

from collections import deque

class Solution:
    def firstNegInt(self, arr, k):
        n = len(arr)
        negatives = deque()
        result = []

        left = 0

        for right in range(n):

            if arr[right] < 0:
                negatives.append(arr[right])

            if right - left + 1 == k:

                if len(negatives) > 0:
                    result.append(negatives[0])
                else:
                    result.append(0)

                if negatives and negatives[0] == arr[left]:
                    negatives.popleft()

                left += 1

        return result
