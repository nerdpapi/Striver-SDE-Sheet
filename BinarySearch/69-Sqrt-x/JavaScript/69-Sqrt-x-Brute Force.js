
 /**
 * Problem: 69. Sqrt(x)
 * Approach: Brute Force
 * Time Complexity: O(sqrt(x))
 * Space Complexity: O(1)
 */

 var mySqrt = function(x) {
    if (x < 2) return x;

    for (let i = 1; i <= x; i++) {
        if (i * i > x) return i - 1;
    }
};
