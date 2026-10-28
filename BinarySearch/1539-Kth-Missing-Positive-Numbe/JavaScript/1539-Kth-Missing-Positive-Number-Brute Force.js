/**
 * Problem: 1539. Kth Missing Positive Number
 * Approach: Brute Force — Adjust k While Traversing
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] <= k) {
            k++;
        } else {
            break;
        }
    }

    return k;
};