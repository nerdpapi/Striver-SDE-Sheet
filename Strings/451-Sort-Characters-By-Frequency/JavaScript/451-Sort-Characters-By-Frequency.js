/**
 * Problem: 451. Sort Characters By Frequency
 * Approach: Frequency Map + Sorting
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freq = new Map();

    for (const ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    const chars = [...freq.keys()];

    chars.sort((a, b) => freq.get(b) - freq.get(a));

    let ans = "";

    for (const ch of chars) {
        ans += ch.repeat(freq.get(ch));
    }

    return ans;
};