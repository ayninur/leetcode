// palindrome number
// Solution 1
var isPalindrome = function (x) {
    return String(x) === String(x).split('').reverse().join('')
};