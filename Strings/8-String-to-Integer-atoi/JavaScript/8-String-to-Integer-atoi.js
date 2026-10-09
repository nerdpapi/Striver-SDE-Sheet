/**
 * Problem: 8. String to Integer (atoi)
 * Approach: Parsing + Sign Handling + Overflow Clamping
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let num = 0;
    let sign = 1;
    let i = 0;

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Skip leading spaces
    while (i < s.length && s[i] === " ") {
        i++;
    }

    // Handle optional sign
    if (i < s.length && s[i] === "-") {
        sign = -1;
        i++;
    } else if (i < s.length && s[i] === "+") {
        i++;
    }

    // Read digits and check overflow
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        num = num * 10 + Number(s[i]);

        if (sign * num > INT_MAX) {
            return INT_MAX;
        } else if (sign * num < INT_MIN) {
            return INT_MIN;
        }

        i++;
    }

    return sign * num;
};