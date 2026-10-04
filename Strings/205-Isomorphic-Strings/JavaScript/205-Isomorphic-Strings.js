/**
 * Problem: 205. Isomorphic Strings
 * Approach: Two-Way HashMap Mapping
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sToT = new Map();
    const tToS = new Map();

    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        const b = t[i];

        if (sToT.has(a) && sToT.get(a) !== b) {
            return false;
        }

        if (tToS.has(b) && tToS.get(b) !== a) {
            return false;
        }

        sToT.set(a, b);
        tToS.set(b, a);
    }

    return true;
};