/**
 * Problem: 88. Merge Sorted Array
 * Approach: Optimal - Three Pointers from the End
 *
 * Use three pointers:
 * i -> last actual element of nums1
 * j -> last element of nums2
 * k -> last position of nums1
 *
 * Place the larger element at position k and move backwards.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {

        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }
};