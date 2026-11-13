/*
Problem: Trapping Rain Water Brute Force
Approach: Prefix and Suffix Maximum Arrays
Time Complexity: O(n²)
Space Complexity: O(1)
*/ 

class Solution {
    trap(height) {
        let n = height.length;
        let water = 0;

        for (let i = 0; i < n; i++) {
            let leftMax = Math.max(...height.slice(0, i + 1));
            let rightMax = Math.max(...height.slice(i));

            water += Math.min(leftMax, rightMax) - height[i];
        }

        return water;
    }
}