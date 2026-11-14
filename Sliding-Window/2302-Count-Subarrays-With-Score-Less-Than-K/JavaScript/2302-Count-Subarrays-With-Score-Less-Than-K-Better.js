// Better: O(n²) Time, O(1) Space

var countSubarrays = function(nums, k) {
    let n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let total = 0;

        for (let j = i; j < n; j++) {
            total += nums[j];

            let length = j - i + 1;
            let score = total * length;

            if (score < k) {
                count++;
            }
        }
    }

    return count;
};