/*
 * Problem: Minimum Window Substring
 * Approach: Sliding Window + Frequency Array
 *
 * Time Complexity: O(m + n)
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

    let left = 0;
    let count = 0;

    let hash_arr = new Array(256).fill(0);

    for (let i = 0; i < n; i++) {
        hash_arr[t.charCodeAt(i)]++;
    }

    for (let right = 0; right < m; right++) {
        let rightIndex = s.charCodeAt(right);

        if (hash_arr[rightIndex] > 0) {
            count++;
        }

        hash_arr[rightIndex]--;

        while (count === n) {
            if (minLen > right - left + 1) {
                minLen = right - left + 1;
                strIdx = left;
            }

            let leftIndex = s.charCodeAt(left);

            hash_arr[leftIndex]++;

            if (hash_arr[leftIndex] > 0) {
                count--;
            }

            left++;
        }
    }

    return strIdx === -1
        ? ""
        : s.substring(strIdx, strIdx + minLen);
};