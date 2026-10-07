/**
 * Problem: 1614. Maximum Nesting Depth of the Parentheses
 * Approach: Depth Counting
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let ans = 0;
    let depth = 0;

    for (const ch of s) {
        if (ch === "(") {
            depth++;
        } else if (ch === ")") {
            depth--;
        }

        ans = Math.max(ans, depth);
    }

    return ans;
};