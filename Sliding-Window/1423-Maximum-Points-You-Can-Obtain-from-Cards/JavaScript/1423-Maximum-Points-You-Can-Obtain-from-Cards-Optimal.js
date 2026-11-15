// Optimal: O(k) Time, O(1) Space
// Sliding Window / Two Pointers

var maxScore = function(cardPoints, k) {
    let lSum = 0;
    let rSum = 0;
    let maxSum = 0;

    let n = cardPoints.length;

    for (let i = 0; i < k; i++) {
        lSum += cardPoints[i];
    }

    maxSum = lSum;

    let rIndex = n - 1;

    for (let j = k - 1; j >= 0; j--) {
        lSum -= cardPoints[j];
        rSum += cardPoints[rIndex];

        rIndex--;

        maxSum = Math.max(maxSum, lSum + rSum);
    }

    return maxSum;
};