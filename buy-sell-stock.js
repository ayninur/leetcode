// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let lowestPrice = Infinity;
    let profit = 0;

    for (let price of prices) {
        if (price < lowestPrice) {
            lowestPrice = price
        } else if (price - lowestPrice > profit) {
            profit = price - lowestPrice
        }
    }

    return profit


};

//no solution or no transactions === 0

//find the lowest price with a counter starting from xfinity
// loop through
//if the price is less that counter then replace counter
//once counter is at lowest else if
// price - lowestprice > profit counter
// proft is equal to price - lowestPrice
//return the profit
