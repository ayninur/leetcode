// Solution 1
const twoSum = (nums, target) => {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};

// Solution 2
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j]
            if (num1 + num2 === target) {
                return [nums.indexOf(num1), nums.indexOf(num2)]
            }
        }
    }
    return []
}

// Solution 3
var twoSum = function (nums, target) {
    let numO = {};
    for (let num of nums) {
        let potentialMatch = target - num;
        if (potentialMatch in numO) {
            return [nums.indexOf(potentialMatch), nums.indexOf(num)]
        } else {
            numO[num] = true
        }
    }

};