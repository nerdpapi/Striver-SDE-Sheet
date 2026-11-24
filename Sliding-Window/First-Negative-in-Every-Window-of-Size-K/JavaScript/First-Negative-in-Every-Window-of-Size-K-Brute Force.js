/*
 * Problem: Minimum Window Substring
 * Approach: Brute Force + Frequency Array
 *
 * Time Complexity: O(m^2 + mn)
 * Space Complexity: O(1)
 */

var minWindow = function(s, t) {
    let minLen = Infinity;
    let strIdx = -1;

    let m = s.length;
    let n = t.length;

    if (n > m) {
        return "";
    }

    for (let i = 0; i < m; i++) {
        let hash_arr = new Array(256).fill(0);

        for (let j = 0; j < n; j++) {
            hash_arr[t.charCodeAt(j)]++;
        }

        let count = 0;

        for (let j = i; j < m; j++) {
            let index = s.charCodeAt(j);

            if (hash_arr[index] > 0) {
                count++;
            }

            hash_arr[index]--;

            if (count === n) {
                if (minLen > j - i + 1) {
                    minLen = j - i + 1;
                    strIdx = i;
                }

                break;
            }
        }
    }

    return strIdx === -1
        ? ""
        : s.substring(strIdx, strIdx + minLen);
};