/**
 * Problem: 560. Subarray Sum Equals K
 * Approach: Optimal - Prefix Sum + Frequency Map
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let prefixSum = 0;
    let count = 0;

    const freq = new Map();
    freq.set(0, 1);

    for (const num of nums) {
        prefixSum += num;

        count += freq.get(prefixSum - k) || 0;

        freq.set(
            prefixSum,
            (freq.get(prefixSum) || 0) + 1
        );
    }

    return count;
};