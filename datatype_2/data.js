//* data types
// ** primitive types --->Primitive types are immutable and store single values.

// * when a single value is assin to variable is know as primitive types data type

// //**dynamic typing */


//*number 
//* bigint
//* string
//* boolean
//* null  =>standalone value  // it is object
//* undefined
//* symbol => unique


// let a=10.89;
// console.log(a)
// console.log(typeof a) //*number


// let b="anuj";
// console.log(typeof b) //* string


// let c= true;    //* true or false
// console.log(typeof c)  //* boolean




// let c;
// console.log(typeof c)  //* undefined  **no give any value to variable



// let d=null;
// console.log(typeof d)  //* object



// let e= Symbol(5);
// console.log(typeof e) //* symbol


// let e= Symbol(5);
// let f= Symbol(5);
// console.log(e==f);




//* (2)  Non-Primitive (Reference) Data Types---->  These store collections of values or more complex entities.


//* object
// * it is key value pair 

// const personDetails={
//    name:"anuj",
//    age:45,
//    education:"engg"
// }

// console.log( typeof personDetails)  //*object


//*ex :
// const arrayNum=[1,2,3,4,5];
        
// console.log(typeof arrayNum) //* object
//  console.log(Array.isArray(arrayNum));  //* true ///* to check it is array


//  const fruits = ["apple", "banana", "cherry"];
// console.log(typeof fruits) //* objet bec Arrays are a type of object.

// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(typeof numbers)

// * {2}   array
//* An array is a special type of object used to store ordered collections of values. Arrays are defined using square brackets [].



// **CONCATENATION  --->Concatenation means joining two or more strings (or arrays) together.

// let username="Anuj";
// let age=25;


// let message= "my name is " + username + " and i am "+ age + " year old";

// console.log(message)


//*  now use Template literal 
//*Template literals (also called template strings) are a modern way to work with strings. They were introduced in ES6 and are enclosed by backticks (`) instead of quotes.

// let username="Anuj";
// let age=25;

// let text=`my name is ${username} and i am &{age} years old`;
// console.log(text)









////**************************************************************** */

// you tube

// "use strict";   
// treat all js code as newer version

//  alert(3+4); we are using nodejs, not browser ,show error

/*
 console.log(3+3);
 console.log("praveen")










 let name ="praveen"
 let age ="18"
 let islogged= false
 let stat;
 let state=null;
 console.log(name)
 console.log(typeof"name")
 console.log(typeof null)   // result > object
 console.log(typeof undefined);     // result > undefined
 */
/*
 const id = Symbol ('123')
 const anotherId = Symbol('123')
 
 console.log (id === anotherId)

*/
//  ========================================
//  ex of stack 
/*
let myYoutubename="praveen"

 let anothername= myYoutubename

 anothername ="anuj"
  
 console.log(myYoutubename);

 console.log(anothername);
 */

//   ex of heap


// let userOne ={
//    email:"user1@gmail.com",
//    upi :"user1@upi"
// }
// let userTwo = userOne

// userTwo.email="userTwo@gmail.com"

// console.log(userTwo)

// alert("hello");
// const num=prompt("enter a number");
// console.log(num);

// const age = prompt("enter your age");
// if(age>18){
//    alert("legal to vote");
   
// }else {
//    alert("not allowed");
// }




//****************************************************** */




