
/**
 * Problem: Nth Root of M
 * Approach: Binary Search
 * Time Complexity: O(log m) iterations, with power calculation cost
 * Space Complexity: O(1)
 */

class Solution {
    nthRoot(n, m) {
        if (m == 0) return 0;

        let low = 1;
        let high = m;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let mid_root = mid ** n;

            if (mid_root == m) {
                return mid;
            } else if (mid_root < m) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return -1;
    }
}
