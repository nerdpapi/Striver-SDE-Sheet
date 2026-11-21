/*
 * Problem: Binary Subarrays With Sum
 * Approach: Brute Force + Running Sum
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

var numSubarraysWithSum = function(nums, goal) {
    let n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let total = 0;

        for (let j = i; j < n; j++) {
            total += nums[j];

            if (total === goal) {
                count++;
            }

            if (total > goal) {
                break;
            }
        }
    }

    return count;
};