// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currMax = -Infinity;
    let globalMax = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        currMax = Math.max(nums[i], nums[i] + currMax);
        if (globalMax < currMax) {
            globalMax = currMax
        }
    }
    return globalMax

};
// c & g = ar[0]
//   [-2,1,-3,4,-1,2,1,-5,4]
// c  -2 1 -2 2  2 4 5  0 4
// g  -2 1    4 -1 2 1 =5
//                   5

//counter for current max
    //counter for globalMAx
// loop through array
    //the current max is equal to the greater of the currVal and the currentMax + currVal
    //if the currMax > max Global
    //then make the max global whatever the currMax is
    //return the max global