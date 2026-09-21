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
    let result = [];
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {

        let seen = new Set();

        for (let j = i + 1; j < nums.length; j++) {

            let third = -(nums[i] + nums[j]);

            if (seen.has(third)) {

                let triplet = [nums[i], nums[j], third]
                    .sort((a, b) => a - b);

                let key = triplet.join(",");

                if (!set.has(key)) {
                    set.add(key);
                    result.push(triplet);
                }
            }

            seen.add(nums[j]);
        }
    }

    return result;
};