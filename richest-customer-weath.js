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