/**
 * Problem: 5. Longest Palindromic Substring
 * Approach: Expand Around Center
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome
        let l = i;
        let r = i;

        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                start = l;
                maxLen = r - l + 1;
            }

            l--;
            r++;
        }

        // Even-length palindrome
        l = i;
        r = i + 1;

        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > maxLen) {
                start = l;
                maxLen = r - l + 1;
            }

            l--;
            r++;
        }
    }

    return s.slice(start, start + maxLen);
};