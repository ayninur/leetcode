// Passed most test cases

// Solution 1
function isValidSubsequence(array, sequence) {
    // 	indeces counter
    let seqIdx = 0;
    // 	traverse the array
    for (let element of array) {
        if (seqIdx == sequence.length) break;
        if (sequence[seqIdx] == element) seqIdx++;
    }
    return sequence.length == seqIdx
}

// Solution 2

function isValidSubsequence(array, sequence) {
    let match = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < sequence.length; j++) {
            if (array[i] === sequence[j]) {
                match.push(array[i])
            }
        }
    }
    return match.length == sequence.length
}