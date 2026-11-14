// Better: O(n²) Time, O(1) Space

var longestSubarray = function(nums, k) {
    let n = nums.length;
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
        let total = 0;

        for (let j = i; j < n; j++) {
            total += nums[j];

            if (total <= k) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};