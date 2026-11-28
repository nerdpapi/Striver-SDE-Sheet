
/*
 * Problem: 45. Jump Game II
 * Approach: Brute Force - Recursion
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 */

var jump = function(nums) {
    let n = nums.length;

    function jumps(index, jump) {
        if (index >= n - 1) {
            return jump;
        }

        let minJump = Infinity;

        for (let i = 1; i <= nums[index]; i++) {
            minJump = Math.min(
                minJump,
                jumps(index + i, jump + 1)
            );
        }

        return minJump;
    }

    return jumps(0, 0);
};
