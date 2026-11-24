
/*
 * Problem: 2461. Maximum Sum of Distinct Subarrays With Length K
 * Approach: Optimal - Fixed-Size Sliding Window + Hash Map
 *
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

var maximumSubarraySum = function(nums, k) {
    let n = nums.length;
    let freqMap = new Map();

    let maxSum = 0;
    let total = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        total += nums[right];

        freqMap.set(
            nums[right],
            (freqMap.get(nums[right]) || 0) + 1
        );

        if (right - left + 1 === k) {

            if (freqMap.size === k) {
                maxSum = Math.max(maxSum, total);
            }

            freqMap.set(
                nums[left],
                freqMap.get(nums[left]) - 1
            );

            if (freqMap.get(nums[left]) === 0) {
                freqMap.delete(nums[left]);
            }

            total -= nums[left];
            left++;
        }
    }

    return maxSum;
};
