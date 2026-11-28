
/*
 * Problem: 45. Jump Game II
 * Approach: Better - Recursion + 2D Memoization
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n^2) + O(n) recursion stack
 */

var jump = function(nums) {
    let n = nums.length;

    let dp = Array.from(
        { length: n },
        () => new Array(n).fill(-1)
    );

    function jumps(index, jump) {
        if (index >= n - 1) {
            return jump;
        }

        if (dp[index][jump] !== -1) {
            return dp[index][jump];
        }

        let minJump = Infinity;

        for (let i = 1; i <= nums[index]; i++) {
            minJump = Math.min(
                minJump,
                jumps(index + i, jump + 1)
            );
        }

        dp[index][jump] = minJump;

        return dp[index][jump];
    }

    return jumps(0, 0);
};
