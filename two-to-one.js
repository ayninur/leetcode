function longest(s1, s2) {
    let charObj = {};
    charMap(s1);
    charMap(s2);
    return charObj
}
function charMap(str) {
    for (let char of str) {
        !charObj[char] ? charObj[char] = 1 :
            charObj[char]++
    }

    let charObj = {};
    function longest(s1, s2) {
        charMap(s1);
        charMap(s2);
        return Object.keys(charObj).sort().join('')
    }
    function charMap(str) {
        for (let char of str) {
            charObj[char] ? charObj[char]++ : charObj[char] = 1

        }
    }