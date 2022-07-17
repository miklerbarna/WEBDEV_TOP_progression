const palindromes = function (p) {
    let str = removeFromArray(p.toLowerCase(),' ', '.' ,',' ,'!'); //remove unchecked characters and make everything lowercase
    let arr = [];
    for (let index = 0; index < Math.trunc(str.length / 2); index++)
    {
        arr.push(str[index]); //first half copied
    }
    let j = 0;
    for (let index = str.length - 1; index >= Math.ceil(str.length / 2); index--)
    {
        if (arr[j] != str[index])
        {
            return false;
        }
        j++;
    }

    return true;

};


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
module.exports = palindromes;
