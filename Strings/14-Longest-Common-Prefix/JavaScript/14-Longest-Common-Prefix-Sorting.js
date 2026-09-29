/**
 * Problem: 14. Longest Common Prefix
 * Approach: Sorting
 *
 * Time Complexity: O(n log n * m)
 * Space Complexity: O(n)
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }

    strs.sort();

    const first = strs[0];
    const last = strs[strs.length - 1];

    let i = 0;

    while (i < first.length && i < last.length) {
        if (first[i] !== last[i]) {
            break;
        }
        i++;
    }

    return first.slice(0, i);
};