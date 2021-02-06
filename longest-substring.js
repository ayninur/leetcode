// Given a string s, find the length of the longest substring without repeating characters.

// Attempt 1 (not solved)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let hash = {};
    let counter = 0;
    let longestCount = [];

    for (let char of s) {
        if (!hash[char]) {
            hash[char] = 1;
            counter++
        } else if (hash[char]) {
            longestCount.push(counter);
            delete hash[char]
            counter = 0

        }
    }
    return longestCount

};
// Given a string s, find the length of the longest substring without repeating characters.
// "pwwkew" = s
// expected output 3

//object = to store hash map {wke}
//counter to track the length of the longest substring = 0
//longest substring = [] - returns the answer

//traverse the array (go through every el in the string)
//if char is !in the hash then we're going to put the char in
//and increment counter ++
//if the character is in the hash
//push counter sum to longestSubstring = [1, 3]
//then we empty the hash and the counter is 0 again
//return the Math.max(longestsubstring)
