/**
 * Problem: 15. 3Sum
 * Approach: Better - HashSet
 *
 * Fix one element and use a Set to find the required
 * third element.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const set1 = new Set();

    for (let i = 0; i < nums.length; i++) {
        const hashSet = new Set();

        for (let j = i + 1; j < nums.length; j++) {
            const third = -(nums[i] + nums[j]);

            if (hashSet.has(third)) {
                const temp = [nums[i], nums[j], third];
                temp.sort((a, b) => a - b);

                set1.add(temp.join(","));
            }

            hashSet.add(nums[j]);
        }
    }

    return [...set1].map(str => str.split(",").map(Number));
};