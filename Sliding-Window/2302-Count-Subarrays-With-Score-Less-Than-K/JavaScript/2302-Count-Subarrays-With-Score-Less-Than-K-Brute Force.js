// Brute Force: O(n³) Time, O(1) Space

var countSubarrays = function(nums, k) {
    let n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let total = 0;

            for (let p = i; p <= j; p++) {
                total += nums[p];
            }

            let length = j - i + 1;
            let score = total * length;

            if (score < k) {
                count++;
            }
        }
    }

    return count;
};