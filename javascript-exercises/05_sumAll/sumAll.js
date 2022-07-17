const sumAll = function(from, to) {
    if (from < 0 || to < 0 || typeof(from) != 'number' || typeof(to) != 'number') return 'ERROR';
    let sum = 0;
    if (from > to){
        for (let index = to; index <= from; sum += index, index++);
    }
    else
    {
        for (let index = from; index <= to; sum += index, index++);
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
