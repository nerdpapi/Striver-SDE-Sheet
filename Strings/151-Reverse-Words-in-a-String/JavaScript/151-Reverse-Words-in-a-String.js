/**
 * Problem: 151. Reverse Words in a String
 * Approach: Reverse String + Reverse Each Word
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const revS = s.split("").reverse().join("");
    let ans = "";
    let i = 0;

    while (i < revS.length) {
        while (i < revS.length && revS[i] === " ") {
            i++;
        }

        let word = "";

        while (i < revS.length && revS[i] !== " ") {
            word += revS[i];
            i++;
        }

        if (word) {
            ans += " " + word.split("").reverse().join("");
        }
    }

    return ans.trim();
};