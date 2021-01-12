// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let x = nums.slice(0, n)
    let y = nums.slice(n)
    let shuffledArray = [];

    for (let i = 0; i < nums.length / 2; i++) {
        shuffledArray.push(x[i])
        shuffledArray.push(y[i])
    }
    return shuffledArray
};