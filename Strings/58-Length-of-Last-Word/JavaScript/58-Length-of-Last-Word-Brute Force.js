/**
 * Problem: 58. Length of Last Word
 * Approach: Brute Force - Trim and Split
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.trim().split(/\s+/);

    return words[words.length - 1].length;
};