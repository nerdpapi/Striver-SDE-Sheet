/**
 * Problem: 15. 3Sum
 * Approach: Optimal - Sorting + Two Pointers
 *
 * Sort the array.
 * For every nums[i], use two pointers to find two numbers
 * whose sum is -nums[i].
 *
 * Skip duplicate values to avoid duplicate triplets.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) auxiliary, excluding output
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const totalSum = nums[i] + nums[left] + nums[right];

            if (totalSum === 0) {
                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);

                left++;
                right--;

                while (
                    left < right &&
                    nums[left] === nums[left - 1]
                ) {
                    left++;
                }

                while (
                    left < right &&
                    nums[right] === nums[right + 1]
                ) {
                    right--;
                }
            } else if (totalSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};