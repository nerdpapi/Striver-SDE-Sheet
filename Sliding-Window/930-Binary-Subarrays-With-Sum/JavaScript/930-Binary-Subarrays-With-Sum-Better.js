/*
 * Problem: Binary Subarrays With Sum
 * Approach: Prefix Sum + Frequency HashMap
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var numSubarraysWithSum = function(nums, goal) {
    let prefix_sum = 0;
    let count = 0;

    let freq = new Map();
    freq.set(0, 1);

    for (let num of nums) {
        prefix_sum += num;

        count += freq.get(prefix_sum - goal) || 0;

        freq.set(
            prefix_sum,
            (freq.get(prefix_sum) || 0) + 1
        );
    }

    return count;
};