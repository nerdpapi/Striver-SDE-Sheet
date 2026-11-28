
/*
 * Problem: 45. Jump Game II
 * Approach: Optimal - Greedy + Range Expansion
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var jump = function(nums) {
    let n = nums.length;

    let jump = 0;
    let l = 0;
    let r = 0;

    while (r < n - 1) {
        let farthest = 0;

        for (let i = l; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }

        jump++;
        l = r + 1;
        r = farthest;
    }

    return jump;
};
