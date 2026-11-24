
/*
 * Problem: 2461. Maximum Sum of Distinct Subarrays With Length K
 * Approach: Brute Force - Generate every window of size k
 *
 * Time Complexity: O(n * k)
 * Space Complexity: O(k)
 */

var maximumSubarraySum = function(nums, k) {
    let n = nums.length;
    let maxSum = 0;

    for (let i = 0; i <= n - k; i++) {
        let freqMap = new Map();
        let currSum = 0;

        for (let j = i; j < i + k; j++) {
            currSum += nums[j];

            freqMap.set(
                nums[j],
                (freqMap.get(nums[j]) || 0) + 1
            );
        }

        if (freqMap.size === k) {
            maxSum = Math.max(maxSum, currSum);
        }
    }

    return maxSum;
};
