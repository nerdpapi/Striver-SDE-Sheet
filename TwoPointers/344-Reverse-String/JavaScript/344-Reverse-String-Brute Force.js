/*
Problem: Reverse String
Approach: Brute Force - Extra Array
Time Complexity: O(n)
Space Complexity: O(n)
*/

var reverseString = function(s) {
    let n = s.length;
    let rev = [];

    for (let i = n - 1; i >= 0; i--) {
        rev.push(s[i]);
    }

    for (let i = 0; i < n; i++) {
        s[i] = rev[i];
    }
};