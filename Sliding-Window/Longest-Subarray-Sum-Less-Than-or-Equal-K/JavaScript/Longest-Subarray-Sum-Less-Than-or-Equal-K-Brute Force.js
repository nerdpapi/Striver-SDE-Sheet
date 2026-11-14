// Brute Force: O(n³) Time, O(1) Space

var longestSubarray = function(nums, k) {
    let n = nums.length;
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let total = 0;

            for (let p = i; p <= j; p++) {
                total += nums[p];
            }

            if (total <= k) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};