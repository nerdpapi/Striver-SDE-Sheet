/**
 * Problem: 1. Two Sum
 * Approach: Optimal - HashMap
 *
 * For every number, calculate its required complement:
 * target - nums[i].
 *
 * If the complement already exists in the map,
 * return its index and the current index.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mapNums = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (mapNums.has(complement)) {
            return [mapNums.get(complement), i];
        }

        mapNums.set(nums[i], i);
    }

    return [];
};