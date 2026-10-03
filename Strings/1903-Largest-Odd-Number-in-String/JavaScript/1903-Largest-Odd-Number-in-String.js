/**
 * Problem: 1903. Largest Odd Number in String
 * Approach: Find Rightmost Odd Digit
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (Number(num[i]) % 2 === 1) {
            return num.slice(0, i + 1);
        }
    }

    return "";
};