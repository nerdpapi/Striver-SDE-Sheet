/**
 * Problem: 88. Merge Sorted Array
 * Approach: Brute Force
 *
 * Copy nums2 into the unused portion of nums1,
 * then sort the entire array.
 *
 * Time Complexity: O((m + n) log(m + n))
 * Space Complexity: O(1) auxiliary
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */

var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }

    nums1.sort((a, b) => a - b);
};