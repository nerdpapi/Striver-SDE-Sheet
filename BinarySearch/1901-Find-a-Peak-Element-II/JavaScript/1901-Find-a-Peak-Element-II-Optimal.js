/**
 * Problem: K-th Element of Two Sorted Arrays
 * Approach: Binary Search on Partition
 * Time Complexity: O(log(min(n1, n2)))
 * Space Complexity: O(1)
 */

class Solution {
    kthElement(a, b, k) {
        let n1 = a.length;
        let n2 = b.length;

        if (n1 > n2) {
            return this.kthElement(b, a, k);
        }

        let left = k;

        let low = Math.max(0, k - n2);
        let high = Math.min(k, n1);

        while (low <= high) {
            let mid1 = Math.floor((low + high) / 2);
            let mid2 = left - mid1;

            let l1 = -Infinity;
            let l2 = -Infinity;

            let r1 = Infinity;
            let r2 = Infinity;

            if (mid1 < n1) {
                r1 = a[mid1];
            }

            if (mid2 < n2) {
                r2 = b[mid2];
            }

            if (mid1 - 1 >= 0) {
                l1 = a[mid1 - 1];
            }

            if (mid2 - 1 >= 0) {
                l2 = b[mid2 - 1];
            }

            if (l1 <= r2 && l2 <= r1) {
                return Math.max(l1, l2);
            } else if (l1 > r2) {
                high = mid1 - 1;
            } else {
                low = mid1 + 1;
            }
        }

        return 0;
    }
}