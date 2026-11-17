// Brute Force: O(n²) Time, O(1) Space

var longestOnes = function(nums, k) {
    let maxLen = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let zeroes = 0;

        for (let j = i; j < n; j++) {
            if (nums[j] === 0) {
                zeroes++;
            }

            if (zeroes <= k) {
                maxLen = Math.max(maxLen, j - i + 1);
            } else {
                break;
            }
        }
    }

    return maxLen;
};