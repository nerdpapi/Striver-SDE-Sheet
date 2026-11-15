// Brute Force: O(k²) Time, O(1) Space

var maxScore = function(cardPoints, k) {
    let n = cardPoints.length;
    let maxSum = 0;

    for (let leftCount = 0; leftCount <= k; leftCount++) {
        let rightCount = k - leftCount;
        let total = 0;

        for (let i = 0; i < leftCount; i++) {
            total += cardPoints[i];
        }

        for (let i = n - rightCount; i < n; i++) {
            total += cardPoints[i];
        }

        maxSum = Math.max(maxSum, total);
    }

    return maxSum;
};