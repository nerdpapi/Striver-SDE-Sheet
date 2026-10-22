
/**
 * Problem: Rotate Array — Left Rotation
 * Approach: Brute Force using Temporary Array
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

var leftRotate = function(nums, k) {
    const n = nums.length;
    if (n === 0) return;

    k %= n;
    const temp = [];

    for (let i = 0; i < k; i++) {
        temp.push(nums[i]);
    }

    for (let i = k; i < n; i++) {
        nums[i - k] = nums[i];
    }

    for (let i = 0; i < k; i++) {
        nums[n - k + i] = temp[i];
    }
};
