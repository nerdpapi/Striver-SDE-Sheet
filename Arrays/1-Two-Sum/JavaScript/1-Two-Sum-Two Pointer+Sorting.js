/**
 * Problem: 1. Two Sum
 * Approach: Two Pointers + Sorting
 *
 * Store each number with its original index.
 * Sort by value, then use two pointers:
 *
 * - If sum == target → answer found
 * - If sum < target → move left forward
 * - If sum > target → move right backward
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arr = nums.map((num, index) => [num, index]);

    arr.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left][0] + arr[right][0];

        if (sum === target) {
            return [arr[left][1], arr[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
};