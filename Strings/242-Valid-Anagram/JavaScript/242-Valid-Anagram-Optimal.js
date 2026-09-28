/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const m = s.length;
    const n = t.length;

    if (m !== n) {
        return false;
    }

    const seen = new Array(256).fill(0);

    for (let i = 0; i < m; i++) {
        seen[s.charCodeAt(i)]++;
        seen[t.charCodeAt(i)]--;
    }

    for (const count of seen) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
};