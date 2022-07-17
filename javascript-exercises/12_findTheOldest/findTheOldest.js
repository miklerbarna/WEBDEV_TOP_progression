const findTheOldest = function(array) {
    let max = 0;
    let person;
    array.forEach(element => {
        if (element.yearOfDeath === undefined)
        {
            let today = new Date();
            if (today.getFullYear() - element.yearOfBirth > max)
            {
                max = today.getFullYear() - element.yearOfBirth;
                person = element;
            }
        }
        else if (element.yearOfDeath - element.yearOfBirth > max)
        {
            max = element.yearOfDeath - element.yearOfBirth;
            person = element;
        }
    });


    return person;
};

// Do not edit below this line
module.exports = findTheOldest;
