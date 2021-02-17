//* STEP 1: Verify the constraints... ask questions:
//* Q1: ARE ALL THE NUMBERS POSITIVE?
// / YES
//* Q2: ARE THERE DUPLICATE NUMBERS IN THE ARRAY
// / NO
//* Q3: WILL THERE ALWAYS BE A SOLUTION?
// / NO, THERE MAY NOT ALWAYS BE A SOLUTION
// -if there are no values that add up to the target number
// - if there is only on digit in the array or if the array is empty
//* Q4: WHAT DO WE RETURN IF THERE IS NO SOLUTION?
// - just return null
//* Q5: CAN THERE BE MULTIPLE PAIRS THAT ADD UP TO THE TARGET?
// - no only 1 pair of numbers will add up to the target

//* STEP 2: write out the test cases (with the constraints above)
//* What is the best case test case: the example given
// [1, 3, 7, 9, 2] t = 11 //=> [3,4]
// * What if the target is unattainable too high or low?
// [1, 3, 7, 9, 2] t = 25 //=> null
// * What if the array is empty?
// [] t = 1 //=> null
// * What is the array is 1 element === the target?
// [5] t = 5 //=> null
// * What if the two numbers in the array === the target?
// [1, 6] t = 7 //[0, 1]

// STEP 3: figure out a solution without code
const twoSum = (nums, target) => {
    //sort the nums array
    // nums = nums.sort((a, b) => a - b);
    //intialize two variables
    //left = 0;
    //right = length - 1
    let left = 0;
    let right = nums.length - 1;
    //while the left index is less than the right index
    while (left < right) {
        //keep trap of the two pointers' values sum
        let newSum = nums[left] + nums[right];
        //compare to target...if the same then
        if (newSum < target) {
            //return the index' in an array
            left++
        } else if (newSum > target) {
            //if less then target then left++
            right--
        } else if (newSum === target) {
            return [left, right]
        }

    }
    return null
}

console.log(twoSum([1, 3, 4, 5], 4))
