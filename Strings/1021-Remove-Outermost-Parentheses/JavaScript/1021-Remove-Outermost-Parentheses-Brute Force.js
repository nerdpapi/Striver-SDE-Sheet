/**
 * Problem: 1021. Remove Outermost Parentheses
 * Approach: Brute Force - Stack
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const stack = [];
    let ans = "";

    for (const ch of s) {
        if (ch === ")") {
            stack.pop();
        }

        if (stack.length > 0) {
            ans += ch;
        }

        if (ch === "(") {
            stack.push(ch);
        }
    }

    return ans;
};