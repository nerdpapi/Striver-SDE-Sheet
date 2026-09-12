/**
 * Problem: Merge Sorted Arrays
 * Approach: Brute Force
 *
 * Combine both arrays into one array, sort it,
 * then distribute the elements back into arr1 and arr2.
 *
 * Time Complexity: O((n + m) log(n + m))
 * Space Complexity: O(n + m)
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {void}
 */

var mergeArrays = function(arr1, arr2) {
    const temp = [...arr1, ...arr2];

    temp.sort((a, b) => a - b);

    const n = arr1.length;

    for (let i = 0; i < n; i++) {
        arr1[i] = temp[i];
    }

    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = temp[n + i];
    }
};