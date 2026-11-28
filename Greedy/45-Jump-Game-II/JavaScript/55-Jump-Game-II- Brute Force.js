
/*
 * Problem: 55. Jump Game
 * Approach: Optimal - Greedy + Maximum Reachability
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var canJump = function(nums) {
    let n = nums.length;
    let maxIdx = 0;

    for (let i = 0; i < n; i++) {

        if (maxIdx < i) {
            return false;
        }

        maxIdx = Math.max(maxIdx, nums[i] + i);
    }

    return true;
};
