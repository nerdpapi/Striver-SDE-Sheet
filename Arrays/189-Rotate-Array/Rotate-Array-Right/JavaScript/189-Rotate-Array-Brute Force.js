
/**
 * Problem: 189. Rotate Array — Right Rotation
 * Approach: Brute Force using Temporary Array
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

var rotate = function(nums, k) {
    const n = nums.length;
    if (n === 0) return;

    k %= n;
    const temp = [];

    for (let i = n - k; i < n; i++) {
        temp.push(nums[i]);
    }

    for (let i = n - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }

    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }
};
