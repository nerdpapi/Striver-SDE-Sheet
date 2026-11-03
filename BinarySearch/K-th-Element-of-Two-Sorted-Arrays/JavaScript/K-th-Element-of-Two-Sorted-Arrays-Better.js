/**
 * Problem: K-th Element of Two Sorted Arrays
 * Approach: Merge Until K-th Element
 * Time Complexity: O(k)
 * Space Complexity: O(1)
 */

class Solution {
    kthElement(a, b, k) {
        let n1 = a.length;
        let n2 = b.length;

        let i = 0;
        let j = 0;
        let count = 0;
        let kth = -1;

        while (i < n1 && j < n2) {
            if (a[i] <= b[j]) {
                kth = a[i];
                i++;
            } else {
                kth = b[j];
                j++;
            }

            count++;

            if (count === k) {
                return kth;
            }
        }

        while (i < n1) {
            kth = a[i];
            i++;
            count++;

            if (count === k) {
                return kth;
            }
        }

        while (j < n2) {
            kth = b[j];
            j++;
            count++;

            if (count === k) {
                return kth;
            }
        }

        return kth;
    }
}