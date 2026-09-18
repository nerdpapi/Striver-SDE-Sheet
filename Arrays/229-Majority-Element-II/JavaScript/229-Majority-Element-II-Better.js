/**
 * Problem: 229. Majority Element II
 * Approach: Better - Hash Map
 *
 * Store the frequency of each element.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    const freq = new Map();
    const result = [];

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);

        if (freq.get(num) > n / 3 && !result.includes(num)) {
            result.push(num);
        }

        if (result.length === 2) {
            break;
        }
    }

    return result;
};