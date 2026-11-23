/*
 * Problem: Subarrays with K Different Integers
 * Approach: Brute Force + Frequency Map
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(k)
 */

var subarraysWithKDistinct = function(nums, k) {
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let freq_map = new Map();

        for (let j = i; j < n; j++) {
            freq_map.set(
                nums[j],
                (freq_map.get(nums[j]) || 0) + 1
            );

            if (freq_map.size === k) {
                count++;
            }

            if (freq_map.size > k) {
                break;
            }
        }
    }

    return count;
};