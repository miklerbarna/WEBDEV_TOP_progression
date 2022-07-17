const removeFromArray = function(arr, ...param) {
    if (param.length == 0) return arr;
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        //iterates through until finds object to be removed (Types must match)
        while (j < param.length && arr[i] !== param[j])
        {
            j++;
        }
        if (j == param.length) //if it didnt find any, attach to the new string
        {
            ret.push(arr[i]);
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
