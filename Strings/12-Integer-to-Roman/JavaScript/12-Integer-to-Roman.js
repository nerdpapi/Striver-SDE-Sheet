/**
 * Problem: 12. Integer to Roman
 * Approach: Greedy - Largest Value First
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const values = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = "";

    for (const roman in values) {
        const value = values[roman];

        while (num >= value) {
            result += roman;
            num -= value;
        }
    }

    return result;
};