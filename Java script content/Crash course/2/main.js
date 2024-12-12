// const person={
//     firstname:'kunal',
//     lastname:'sharma',
//     age:30,
//     hobbies:['music','sports','singing'],
//     address:{
//         streetno:1,
//         city:'delhi',
//         state:'delhi'

//     }
// }
//console.log(person.address,person.lastname);
// console.log(person.hobbies[1])
// console.log(person.address.city)

//creating variables

// const{firstname,lastname,address:{city}}=person;
// console.log(firstname)
// person.email='kunal@gmail.com';
// console.log(person);


//arrays

// const todos=[
//    { id:1, 
//     text:'take out trash',
//     iscompleted:true
// },
// {
//     id:2, 
//     text:'washed',
//     iscompleted:true
// },
// {
//     id:3, 
//     text:'kill a nigga',
//     iscompleted:false
// }];
//console.log(todos[1].text)

//for loops
// for(let i=0;i<10;i++){
//     console.log(`for loop number: ${i}`);
// }

//while
// let i =0;
// while(i<10){
//     console.log(`while loop number: ${i}`);
//     i++;

// }

//looping through arrays
// for(let i=0;i<todos.length;i++){
//     console.log(todos[i].text);

// }

// for(let todo of todos){
//     console.log(todo.id);
// };

//high order array methids
//foreach

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

//map-->create a new array and alwats returns a new array of the same length.

// const todocompleted=todos.filter(function(todo){
//     return todo.iscompleted===true;
// }).map(function(todo){
//     return todo.text;
// }
// )
// console.log(todocompleted);