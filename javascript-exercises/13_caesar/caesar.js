const caesar = function(str,shift)
{
    if (shift < 0)
    {
        shift = 26 + (shift % 26);
    }
    let ret = '';

    for (let index = 0; index < str.length; index++) {
        ret += shifter(str[index],shift);
    }

    return ret;
};



const shifter = function(c,shift) {
    
    let code = c.charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >=97 && code <= 122))
    {
        return String.fromCharCode((code + shift - 65) % 26 + 65);   //one is 65 other is 97 !!!!!!!!!!!!!!!
    }
    else
    {
        return c;
    }
};

// Do not edit below this line
module.exports = caesar;



/*

if (shift < 0)
    {
        shift = 26 + (shift % 26);
    }
    let ret = '';
    for (let index = 0; index < str.length; index++)
    {
        if (str[index].charCodeAt(0) >= 65 && str[index].charCodeAt(0) <= 90)
        {
            ret += String.fromCharCode((str[index].charCodeAt(0) + shift - 65) % 26 + 65);   
        }
        else if (str[index].charCodeAt(0) >= 97 && str[index].charCodeAt(0) <= 122)
        {
            ret += String.fromCharCode((str[index].charCodeAt(0) + shift - 97) % 26 + 97);
        }
        else
        {
            ret += str[index];
        }
    }

    return ret;



*/
