// two num sum

// solution 1
function twoNumberSum(array, targetSum) {
    let results = [];

    for (let i = 0; i < array.length; i++) {
        const firstNum = array[i]
        for (let j = i + 1; j < array.length; j++) {
            const secondNum = array[j]
            if (firstNum + secondNum === targetSum) {
                return [firstNum, secondNum]
            }
        }
    }
    return []
}

// solution 2
function twoNumberSum(array, targetSum) {
    let nums = {};
    for (let num of array) {
        const potentialMatch = targetSum - num
        if (potentialMatch in nums) {
            return [potentialMatch, num]
        } else {
            nums[num] = true;
        }
    }
    return []
}


