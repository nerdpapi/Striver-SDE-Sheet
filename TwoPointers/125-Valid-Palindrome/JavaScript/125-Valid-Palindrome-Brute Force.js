/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleared = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    return cleared === cleared.split("").reverse().join("");
};