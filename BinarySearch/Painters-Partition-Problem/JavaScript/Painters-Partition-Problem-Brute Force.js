/**
 * Problem: Painter's Partition Problem
 * Approach: Brute Force — Check Every Time Limit
 * Time Complexity: O(n * (sum(arr) - max(arr) + 1))
 * Space Complexity: O(1)
 */

class Solution {
    minTime(arr, k) {
        function countPainters(arr, maxTime) {
            let painters = 1;
            let currTime = 0;

            for (const num of arr) {
                if (currTime + num > maxTime) {
                    painters++;
                    currTime = num;
                } else {
                    currTime += num;
                }
            }

            return painters;
        }

        let low = Math.max(...arr);
        let high = arr.reduce((sum, num) => sum + num, 0);

        for (let time = low; time <= high; time++) {
            if (countPainters(arr, time) <= k) {
                return time;
            }
        }

        return -1;
    }
}