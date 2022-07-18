let a = 'A';
console.log(String.fromCharCode(a.charCodeAt(0) + 3));


const chipher = function(str,shift)
{
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
}



console.log(chipher('Mjqqt, Btwqi!', -5));