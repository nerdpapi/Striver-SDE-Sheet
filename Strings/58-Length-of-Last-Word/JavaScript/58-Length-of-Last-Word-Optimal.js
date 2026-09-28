/**
 * Problem: 58. Length of Last Word
 * Approach: Optimal - Traverse from the End
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let length = 0;

    // Skip trailing spaces
    while (i >= 0 && s[i] === " ") {
        i--;
    }

    // Count characters of the last word
    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }

    return length;
};