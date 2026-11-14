// Optimal: O(n) Time, O(1) Space
// Sliding Window using while

var longestSubarray = function(nums, k) {
    let left = 0;
    let total = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        total += nums[right];

        while (total > k) {
            total -= nums[left];
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};