/**
 * Problem: 4. Median of Two Sorted Arrays
 * Approach: Brute Force — Merge Two Sorted Arrays
 * Time Complexity: O(n1 + n2)
 * Space Complexity: O(n1 + n2)
 */

class Solution {
    findMedianSortedArrays(nums1, nums2) {
        let n1 = nums1.length;
        let n2 = nums2.length;

        let nums3 = [];
        let n = n1 + n2;

        let i = 0;
        let j = 0;

        while (i < n1 && j < n2) {
            if (nums1[i] < nums2[j]) {
                nums3.push(nums1[i]);
                i++;
            } else {
                nums3.push(nums2[j]);
                j++;
            }
        }

        while (i < n1) {
            nums3.push(nums1[i]);
            i++;
        }

        while (j < n2) {
            nums3.push(nums2[j]);
            j++;
        }

        if (n % 2 === 1) {
            return nums3[Math.floor(n / 2)];
        }

        return (
            nums3[n / 2] +
            nums3[n / 2 - 1]
        ) / 2;
    }
}