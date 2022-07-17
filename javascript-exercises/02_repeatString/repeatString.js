const repeatString = function(str, times) {
    if (times < 0) return 'ERROR';
    let ret = '';
    for (let index = 0; index < times; index++) {
        ret += str;
    }

    return ret;
};

// Do not edit below this line
module.exports = repeatString;
