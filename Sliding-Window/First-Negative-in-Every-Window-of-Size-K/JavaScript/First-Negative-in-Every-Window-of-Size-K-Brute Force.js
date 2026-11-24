
/*
 * Problem: First Negative Integer in Every Window of Size K
 * Approach: Brute Force - Generate Each Window and Search
 *
 * Time Complexity: O(n * k)
 * Space Complexity: O(k) auxiliary space
 */

var firstNegInt = function(arr, k) {
    let n = arr.length;
    let result = [];

    for (let i = 0; i <= n - k; i++) {
        let window = [];

        for (let j = i; j < i + k; j++) {
            window.push(arr[j]);
        }

        let found = false;

        for (let negative of window) {
            if (negative < 0) {
                result.push(negative);
                found = true;
                break;
            }
        }

        if (!found) {
            result.push(0);
        }
    }

    return result;
};
