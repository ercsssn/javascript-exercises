const reverseString = function(string) {
    let arr = Array.from(string);
    let rev = [];
    let lastChar = arr.length - 1;
    
    for (let i = lastChar ; i >= 0; i--) {
        rev.push(arr[i]);
    }
    rev = rev.join('');
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
