/**
 * Problem: 4. Median of Two Sorted Arrays
 * Approach: Merge Until Median Positions
 * Time Complexity: O(n1 + n2)
 * Space Complexity: O(1)
 */

class Solution {
    findMedianSortedArrays(nums1, nums2) {
        let n1 = nums1.length;
        let n2 = nums2.length;
        let n = n1 + n2;

        let idx1 = Math.floor(n / 2) - 1;
        let idx2 = Math.floor(n / 2);

        let ele1 = -1;
        let ele2 = -1;

        let count = 0;
        let i = 0;
        let j = 0;

        while (count <= idx2) {
            let current;

            if (i < n1 && (j >= n2 || nums1[i] < nums2[j])) {
                current = nums1[i];
                i++;
            } else {
                current = nums2[j];
                j++;
            }

            if (count === idx1) {
                ele1 = current;
            }

            if (count === idx2) {
                ele2 = current;
            }

            count++;
        }

        if (n % 2 === 1) {
            return ele2;
        }

        return (ele1 + ele2) / 2;
    }
}