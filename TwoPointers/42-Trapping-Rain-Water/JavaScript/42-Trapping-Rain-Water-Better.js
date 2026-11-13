/*
Problem: Trapping Rain Water
Approach: Prefix and Suffix Maximum Arrays
Time Complexity: O(n)
Space Complexity: O(n)
*/

var trap = function(height) {
    let n = height.length;

    if (n === 0) return 0;

    let lMax = new Array(n).fill(0);
    lMax[0] = height[0];

    for (let i = 1; i < n; i++) {
        lMax[i] = Math.max(lMax[i - 1], height[i]);
    }

    let rMax = new Array(n).fill(0);
    rMax[n - 1] = height[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        rMax[i] = Math.max(rMax[i + 1], height[i]);
    }

    let total = 0;

    for (let i = 0; i < n; i++) {
        let leftMax = lMax[i];
        let rightMax = rMax[i];

        total += Math.min(leftMax, rightMax) - height[i];
    }

    return total;
};