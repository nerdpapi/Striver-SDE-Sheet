/**
 * Problem: 796. Rotate String
 * Approach: String Concatenation
 *
 * A string is a rotation of another string if it appears
 * as a substring of the original string concatenated with itself.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    return (s + s).includes(goal);
};