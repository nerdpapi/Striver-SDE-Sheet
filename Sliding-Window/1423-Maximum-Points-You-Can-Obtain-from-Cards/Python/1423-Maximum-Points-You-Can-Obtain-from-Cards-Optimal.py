# Brute Force: O(k²) Time, O(1) Space

class Solution:
    def maxScore(self, cardPoints: list[int], k: int) -> int:
        n = len(cardPoints)
        maxSum = 0

        for leftCount in range(k + 1):
            rightCount = k - leftCount

            total = 0

            for i in range(leftCount):
                total += cardPoints[i]

            for i in range(n - rightCount, n):
                total += cardPoints[i]

            maxSum = max(maxSum, total)

        return maxSum