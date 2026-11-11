/*
Problem: Reverse String
Approach: Two Pointers - In-Place
Time Complexity: O(n)
Space Complexity: O(1)
*/

var reverseString = function(s) {
    let n = s.length;

    let left = 0;
    let right = n - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
};