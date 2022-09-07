const getTheTitles = function(objs) {
    let ret = [];
    objs.forEach(element => {
        ret.push(element.title);
    });

    return ret;
};

// Do not edit below this line
module.exports = getTheTitles;
