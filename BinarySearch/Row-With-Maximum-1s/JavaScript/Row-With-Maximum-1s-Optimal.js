/**
 * Problem: Painter's Partition Problem
 * Approach: Binary Search on Answer
 * Time Complexity: O(n * log(sum(arr) - max(arr) + 1))
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
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (countPainters(arr, mid) <= k) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}