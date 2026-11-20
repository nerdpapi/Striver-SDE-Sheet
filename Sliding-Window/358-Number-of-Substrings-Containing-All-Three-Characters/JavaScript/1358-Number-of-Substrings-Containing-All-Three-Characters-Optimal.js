/*
 * Problem: Number of Substrings Containing All Three Characters
 * Approach: Last Seen Index + Minimum Position
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var numberOfSubstrings = function(s) {
    let n = s.length;
    let count = 0;

    let hash_arr = [-1, -1, -1];

    for (let i = 0; i < n; i++) {
        let index = s.charCodeAt(i) - 97;

        hash_arr[index] = i;

        count += 1 + Math.min(
            hash_arr[0],
            hash_arr[1],
            hash_arr[2]
        );
    }

    return count;
};