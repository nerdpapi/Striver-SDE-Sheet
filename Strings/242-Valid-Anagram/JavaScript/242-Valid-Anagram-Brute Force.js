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

    const used = new Array(n).fill(false);

    for (let i = 0; i < m; i++) {
        let found = false;

        for (let j = 0; j < n; j++) {
            if (s[i] === t[j] && !used[j]) {
                used[j] = true;
                found = true;
                break;
            }
        }

        if (!found) {
            return false;
        }
    }

    return true;
};