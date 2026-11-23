/*
 * Problem: Subarrays with K Different Integers
 * Approach: Sliding Window + At Most Technique
 *
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

var subarraysWithKDistinct = function(nums, k) {

    function atMost(k) {
        if (k < 0) {
            return 0;
        }

        let n = nums.length;
        let left = 0;
        let count = 0;
        let freq_map = new Map();

        for (let right = 0; right < n; right++) {
            freq_map.set(
                nums[right],
                (freq_map.get(nums[right]) || 0) + 1
            );

            while (freq_map.size > k) {
                let value = nums[left];

                freq_map.set(
                    value,
                    freq_map.get(value) - 1
                );

                if (freq_map.get(value) === 0) {
                    freq_map.delete(value);
                }

                left++;
            }

            count += right - left + 1;
        }

        return count;
    }

    return atMost(k) - atMost(k - 1);
};