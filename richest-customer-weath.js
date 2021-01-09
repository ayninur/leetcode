// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
///////////////////////////////////////////
// SOLVE 1
///////////////////////////////////////////
var maximumWealth = function (accounts) {
    let sum = 0;
    let newArr = [];
    for (let i = 0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce((a, b) => a + b, 0)


    }
    return accounts.reduce((a, b) => Math.max(a, b))

};

///////////////////////////////////////////
// SOLVE 2
///////////////////////////////////////////
var maximumWealth = function (accounts) {
    return accounts.map(n => n.reduce((a, b) => a + b)).reduce((a, b) => Math.max(a, b))
};