const removeFromArray = function (array, ...args) {
    return array.filter(value => !args.includes(value));
    
};







//array.forEach( (value) => {
  //  if (!args.includes(value)){
    //    newArray.push(value);
    //}
//});
//return newArray;









    //let remove = Array.from(elements);
    //for (let i = 0; i < array.length; i++) {
        //for (let j = 0; j < remove.length; i++){
           // if (array[i] === remove[j]) {
                //array.pop(i);
            //}
        //}
    //}
    //return array;


// Do not edit below this line
module.exports = removeFromArray;
