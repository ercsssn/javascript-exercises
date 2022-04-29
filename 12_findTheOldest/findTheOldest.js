const findTheOldest = function(arr) {
    const today = new Date();
    for (i = 0; i <= arr.length-1; i++) {
        if (!('yearOfDeath' in arr[i])) {
            arr[i].yearOfDeath = today.getFullYear();
        }
    }
    
    const oldest = arr.sort(function(a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
      });
    
    return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
