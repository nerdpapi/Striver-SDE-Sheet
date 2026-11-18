// Optimal: O(n) Time, O(1) Space
// Sliding Window using if

var longestOnes = function(nums, k) {
    let maxLen = 0;
    let left = 0;
    let zeroes = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroes++;
        }

        if (zeroes > k) {
            if (nums[left] === 0) {
                zeroes--;
            }

            left++;
        }

        if (zeroes <= k) {
            let length = right - left + 1;
            maxLen = Math.max(maxLen, length);
        }
    }

    return maxLen;
};