// two num sum

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