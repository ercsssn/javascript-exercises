const fibonacci = function(number) {

    if (number <= 0) {
        return 'OOPS';
    }

    nthTerm = (1/Math.sqrt(5)) * ((((1 + Math.sqrt(5))/2 )**number) - ((1 - Math.sqrt(5))/2 )**number);

    return parseInt(nthTerm);
};

// Do not edit below this line
module.exports = fibonacci;
