/**
 * Problem: K-th Element of Two Sorted Arrays
 * Approach: Brute Force — Merge Both Arrays
 * Time Complexity: O(n1 + n2)
 * Space Complexity: O(n1 + n2)
 */

class Solution {
    kthElement(a, b, k) {
        let n1 = a.length;
        let n2 = b.length;

        let merged = [];
        let i = 0;
        let j = 0;

        while (i < n1 && j < n2) {
            if (a[i] <= b[j]) {
                merged.push(a[i]);
                i++;
            } else {
                merged.push(b[j]);
                j++;
            }
        }

        while (i < n1) {
            merged.push(a[i]);
            i++;
        }

        while (j < n2) {
            merged.push(b[j]);
            j++;
        }

        return merged[k - 1];
    }
}