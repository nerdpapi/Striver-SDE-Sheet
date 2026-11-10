/*
Problem: Median in a Row-Wise Sorted Matrix
Approach: Binary Search on Answer + Upper Bound
Time Complexity: O(m * log(n) * log(maxVal - minVal + 1))
Space Complexity: O(1)
*/

class Solution {
    median(mat) {
        let m = mat.length;
        let n = mat[0].length;

        const upperBound = (arr, target) => {
            let low = 0;
            let high = n - 1;
            let ans = n;

            while (low <= high) {
                let mid = Math.floor((low + high) / 2);

                if (arr[mid] > target) {
                    ans = mid;
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }

            return ans;
        };

        const countSmallEqual = (mat, x) => {
            let cnt = 0;

            for (let i = 0; i < m; i++) {
                cnt += upperBound(mat[i], x);
            }

            return cnt;
        };

        let low = Infinity;
        let high = -Infinity;

        for (let i = 0; i < m; i++) {
            low = Math.min(low, mat[i][0]);
            high = Math.max(high, mat[i][n - 1]);
        }

        let req = Math.floor((m * n) / 2);
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            let smallEqual = countSmallEqual(mat, mid);

            if (smallEqual > req) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}