// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

//SOlUTION 1
var defangIPaddr = function (address) {
    return address.split('').map(n => n === '.' ? `[${n}]` : n).join('')
};