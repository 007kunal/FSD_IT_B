//ways of defining and using functions

// function addNums(num1,num2){
//     console.log(num1+num2);
// }
// addNums(69,99);


// function addNums(num1=1,num2=8){
//     return num1+num2;
// }
// console.log(addNums(5,5))



//Arrow fucntions  (param1, param2, ..., paramN) => expression

const addNums=(num1=1,num2=8)=>console.log(num1+num2)

console.log(addNums(5,6));
this
