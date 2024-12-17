"use strict";
function isPalindrome(s) {
    let filteredString = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i].toLowerCase();
        if (char.match(/[a-z0-9]/)) {
            filteredString += char;
        }
    }
    let left = 0;
    let right = filteredString.length - 1;
    while (left < right) {
        if (filteredString[left] !== filteredString[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
let s1 = "racecar";
console.log(isPalindrome(s1));
let s2 = "raceacar";
console.log(isPalindrome(s2));
let s3 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(s3));
let s4 = "hello";
console.log(isPalindrome(s4));
