/*
Problem: Trapping Rain Water
Approach: Two Pointers
Time Complexity: O(n)
Space Complexity: O(1)
*/

var trap = function(height) {
    let n = height.length;

    let left = 0;
    let right = n - 1;

    let lMax = 0;
    let rMax = 0;

    let total = 0;

    while (left < right) {

        if (height[left] <= height[right]) {

            if (lMax > height[left]) {
                total += lMax - height[left];
            } else {
                lMax = height[left];
            }

            left++;

        } else {

            if (rMax > height[right]) {
                total += rMax - height[right];
            } else {
                rMax = height[right];
            }

            right--;
        }
    }

    return total;
};