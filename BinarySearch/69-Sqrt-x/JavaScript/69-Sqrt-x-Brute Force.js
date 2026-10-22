
/**
 * Problem: 69. Sqrt(x)
 * Approach: Brute Force
 * Time Complexity: O(sqrt(x))
 * Space Complexity: O(1)
 */

var mySqrt = function(x) {
    if (x < 2) return x;

    for (let i = 1; i <= Math.floor(x / i); i++) {
        // Continue while i is a valid square-root candidate
    }

    // The loop ends at the first invalid candidate
    let i = 1;
    while (i <= Math.floor(x / i)) {
        i++;
    }

    return i - 1;
};
