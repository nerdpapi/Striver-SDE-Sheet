/**
 * Problem: 1011. Capacity To Ship Packages Within D Days
 * Approach: Binary Search on Answer
 * Time Complexity: O(n * log(sum(weights) - max(weights) + 1))
 * Space Complexity: O(1)
 */

var shipWithinDays = function(weights, days) {
    let n = weights.length;

    var totalDays = function(weights, cap) {
        let days = 1;
        let load = 0;

        for (let i = 0; i < n; i++) {
            if (load + weights[i] > cap) {
                days += 1;
                load = weights[i];
            } else {
                load += weights[i];
            }
        }

        return days;
    };

    let low = Math.max(...weights);
    let high = weights.reduce((a, b) => a + b, 0);
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let req_days = totalDays(weights, mid);

        if (req_days <= days) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};