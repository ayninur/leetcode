// 1431. Kids With the Greatest Number of Candies

// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

///////////////////////////////////////////
// SOLVE 1
///////////////////////////////////////////

var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies)
    let newArr = [];
    for (let i = 0; i < candies.length; i++) {
        let allCandies = candies[i] + extraCandies
        newArr.push(allCandies)

    }
    return newArr.map(c => c >= max)

};

///////////////////////////////////////////
// SOLVE 2
///////////////////////////////////////////

var kidsWithCandies = function (candies, extraCandies) {
    let newArr = [];
    candies.map(c => {
        let allCandies = c + extraCandies
        newArr.push(allCandies)

    })
    return newArr.map(c => c >= Math.max(...candies))

};