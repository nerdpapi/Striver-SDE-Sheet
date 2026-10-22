
/**
 * Problem: Rotate Array — Left Rotation
 * Approach: Reversal Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var leftRotate = function(nums, k) {
    const n = nums.length;
    if (n === 0) return;

    k %= n;

    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    reverse(0, k - 1);
    reverse(k, n - 1);
    reverse(0, n - 1);
};
