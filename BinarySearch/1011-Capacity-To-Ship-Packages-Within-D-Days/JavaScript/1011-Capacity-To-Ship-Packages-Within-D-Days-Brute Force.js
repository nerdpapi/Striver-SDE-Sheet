/**
 * Problem: 1011. Capacity To Ship Packages Within D Days
 * Approach: Brute Force — Check Every Capacity
 * Time Complexity: O(n * (sum(weights) - max(weights) + 1))
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

    let wt_sum = weights.reduce((a, b) => a + b, 0);

    for (let cap = Math.max(...weights); cap <= wt_sum; cap++) {
        let req_days = totalDays(weights, cap);

        if (req_days <= days) {
            return cap;
        }
    }

    return -1;
};