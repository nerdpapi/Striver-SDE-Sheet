# Optimal: O(k) Time, O(1) Space
# Sliding Window / Two Pointers

class Solution:
    def maxScore(self, cardPoints: list[int], k: int) -> int:
        lSum = 0
        rSum = 0
        maxSum = 0

        n = len(cardPoints)

        for i in range(k):
            lSum += cardPoints[i]

        maxSum = lSum
        rIndex = n - 1

        for j in range(k - 1, -1, -1):
            lSum -= cardPoints[j]
            rSum += cardPoints[rIndex]

            rIndex -= 1

            maxSum = max(maxSum, lSum + rSum)

        return maxSum