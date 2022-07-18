const reverseString = function(str) {
    let ret = '';
    for (let index = str.length - 1; index >= 0; index--) {
        ret += str[index];
    }

    return ret;
};

// Do not edit below this line
module.exports = reverseString;
