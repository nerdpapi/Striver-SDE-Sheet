/**
 * Problem: 1021. Remove Outermost Parentheses
 * Approach: Optimal - Depth Counting
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let depth = 0;
    let ans = "";

    for (const ch of s) {
        if (ch === ")") {
            depth--;
        }

        if (depth > 0) {
            ans += ch;
        }

        if (ch === "(") {
            depth++;
        }
    }

    return ans;
};