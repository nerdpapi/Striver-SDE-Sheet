/*
 * Problem: Number of Substrings Containing All Three Characters
 * Approach: Brute Force + Character Presence Array
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

var numberOfSubstrings = function(s) {
    let n = s.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let hash_arr = [0, 0, 0];

        for (let j = i; j < n; j++) {
            let index = s.charCodeAt(j) - 97;
            hash_arr[index] = 1;

            if (hash_arr[0] + hash_arr[1] + hash_arr[2] === 3) {
                count += n - j;
                break;
            }
        }
    }

    return count;
};