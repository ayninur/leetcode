// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function (nums) {
    let zeroArr = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroArr.push(...nums.splice(i, 1))

            i--

        }
    }
    nums.push(...zeroArr)

};
console.log(moveZeroes([0, 1, 0, 3, 12]))