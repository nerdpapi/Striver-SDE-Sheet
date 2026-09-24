/**
 * Problem: Largest Subarray with 0 Sum
 * Approach: Optimal - Prefix Sum + HashMap
 *
 * If the same prefix sum occurs at two indices,
 * the elements between those indices have sum zero.
 *
 * Store only the first occurrence of each prefix sum
 * to maximize the subarray length.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const firstSeen = new Map();

    let longest = 0;
    let prefix = 0;

    for (let i = 0; i < arr.length; i++) {
        prefix += arr[i];

        if (prefix === 0) {
            longest = i + 1;
        } else if (firstSeen.has(prefix)) {
            longest = Math.max(
                longest,
                i - firstSeen.get(prefix)
            );
        } else {
            firstSeen.set(prefix, i);
        }
    }

    return longest;
};