/**
 * Problem: 169. Majority Element
 * Approach: Better - Hash Map
 *
 * Store the frequency of each element.
 * As soon as an element's frequency becomes greater than n / 2,
 * return it.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const freq = new Map();
    const n = nums.length;

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);

        if (freq.get(num) > n / 2) {
            return num;
        }
    }

    return -1;
};