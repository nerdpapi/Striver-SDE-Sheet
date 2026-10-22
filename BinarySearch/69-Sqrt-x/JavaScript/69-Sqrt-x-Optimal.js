
/**
 * Problem: 69. Sqrt(x)
 * Approach: Binary Search
 * Time Complexity: O(log x)
 * Space Complexity: O(1)
 */

var mySqrt = function(x) {
    let low = 1;
    let high = x;
    let ans = 0;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const mid_sq = mid * mid;

        if (mid_sq <= x) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
};
