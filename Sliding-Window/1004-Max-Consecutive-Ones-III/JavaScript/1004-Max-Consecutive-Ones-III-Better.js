/**
 * Problem: Longest Subarray with Sum K
 * Approach: Better - Prefix Sum + HashMap
 *
 * Store the first occurrence of every prefix sum.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var longestSubarray = function(arr, k) {
    const firstSeen = new Map();

    let length = 0;
    let prefixSum = 0;

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        if (prefixSum === k) {
            length = i + 1;
        }

        if (firstSeen.has(prefixSum - k)) {
            length = Math.max(
                length,
                i - firstSeen.get(prefixSum - k)
            );
        }

        if (!firstSeen.has(prefixSum)) {
            firstSeen.set(prefixSum, i);
        }
    }

    return length;
};