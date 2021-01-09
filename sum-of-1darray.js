// 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

///////////////////////////////////////////
// SOLVE 1
///////////////////////////////////////////

var runningSum = function (nums) {
    let runningSum = 0;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        runningSum = runningSum + nums[i]
        result[i] = runningSum
    }
    return result
};

runningSum([1, 2, 3, 4])
runningSum([1, 1, 1, 1, 1]
)

///////////////////////////////////////////
// SOLVE 2
///////////////////////////////////////////
var runningSum = function (nums) {
    let runningSum = 0;
    let result = [];
    for (let n in nums) {
        runningSum = runningSum + nums[n]
        result[n] = runningSum
    }
    return result
};