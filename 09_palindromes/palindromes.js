const palindromes = function (words) {
    let raw = words;
    
    punctuationless = raw.replace(/[.,!" "]/g,"");
    finalWord = punctuationless.toLowerCase();
    reversed = finalWord.split('').reverse().join('');
    if (finalWord == reversed) {
        return true;
    } else {
        return false;
    }

};
// Do not edit below this line
module.exports = palindromes;
