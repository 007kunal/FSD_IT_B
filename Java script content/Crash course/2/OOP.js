//cosntructor fucntion with prototypes
//the keyword 'this' is a special identifier that refers to the current execution context. Its value depends on how and where it is used. 
// function Person(firstname,lastname,dob){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.dob=new Date(dob);
//     this.getbirthyear=function(){
//         return this.dob.getFullYear();
//     }
//     this.getfullname=function(){
//         return `${this.firstname} ${this.lastname}`;
//     }
    
//}
// Person.prototype.getbirthyear=function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getfullname=function(){
//     return `${this.firstname} ${this.lastname}` ;
// }





///instantiate object
//  const person1=new Person('kunal','sharma','2004-10-05');
//  const person2=new Person('marry','poppins','2004-10-05');
//  console.log(person1.dob);
//  console.log(person2.dob);
//  console.log(person1.dob.getFullYear());
// console.log(person1.getbirthyear());
// console.log(person1.getfullname());




//creating classes
//class 
class Person{
    //(constructor method):runs automatically when you create a new Person object.
    constructor(firstname,lastname,dob){
        this.firstname=firstname;
     this.lastname=lastname;
    this.dob=new Date(dob);
    }

    //creating methods
    getbirthyear(){
        return this.dob.getFullYear();
    }
    getfullname(){
        return `${this.firstname} ${this.lastname}`;
    }
}

//instantiate object(creting)
const person1=new Person('kunal','sharma','2004-10-05');
const person2=new Person('marry','poppins','2004-10-05');
//using methods
console.log(person1.getfullname());
console.log(person1.getbirthyear());

console.log(person2.getfullname());
console.log(person2.getbirthyear());
