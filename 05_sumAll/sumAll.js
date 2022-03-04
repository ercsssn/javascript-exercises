const sumAll = function(num1,num2) {
    let finalSum = 0;
    if  (num1 < 0 || num2 < 0 ) {
        return 'ERROR';
    } 
    if (typeof num1 != "number" || typeof num2 != "number") {
        return 'ERROR';
    }

    if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            finalSum += i;
        } 
    } else if (num1 > num2) {
        for (let j = num2; j <= num1; j++) {
            finalSum += j;
        }
    } 
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
