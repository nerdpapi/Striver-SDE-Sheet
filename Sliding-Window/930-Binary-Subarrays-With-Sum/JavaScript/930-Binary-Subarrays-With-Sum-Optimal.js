/*
 * Problem: Binary Subarrays With Sum
 * Approach: Sliding Window + At Most Technique
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var numSubarraysWithSum = function(nums, goal) {

    function atMost(goal) {
        if (goal < 0) {
            return 0;
        }

        let n = nums.length;
        let left = 0;
        let count = 0;
        let total = 0;

        for (let right = 0; right < n; right++) {
            total += nums[right];

            while (total > goal) {
                total -= nums[left];
                left++;
            }

            count += right - left + 1;
        }

        return count;
    }

    return atMost(goal) - atMost(goal - 1);
};