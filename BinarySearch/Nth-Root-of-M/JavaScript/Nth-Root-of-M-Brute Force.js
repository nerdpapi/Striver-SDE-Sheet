
/**
 * Problem: Nth Root of M
 * Approach: Brute Force
 * Time Complexity: O(m) iterations, with power calculation cost
 * Space Complexity: O(1)
 */

class Solution {
    nthRoot(n, m) {
        if (m == 0) return 0;

        for (let i = 1; i <= m; i++) {
            let power = i ** n;

            if (power == m) {
                return i;
            } else if (power > m) {
                break;
            }
        }

        return -1;
    }
}
