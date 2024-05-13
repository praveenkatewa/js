
// dynamic typing

/*

let name = "this.";

console.log(name);
name=3;
console.log(name);
*/

// reference types
/*

objects
let person ={
   firstName: "anuj";
   age :30;
}

arrays


functions

*/


/*
let array=[1,2,3,4,5 ,"praveen",6,7,8,9];

console.log(array[3]);
console.log(array[5]);
//  objects
// key value pairs
let student = {
   name :"anuj",
    age :23,
    city : "jaipur"
  
}
// for complete student 
console.log(student);
//  if want only one like name
console.log(student.name);
console.log(student.age);


// funtions
 function sum(a,b){
    return a+b;

 }
 console.log(sum(2,3));
 */

// you tube

"use strict";   
// treat all js code as newer version
//  alert(3+4);
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

const age = prompt("enter your age");
if(age>18){
   alert("legal to vote");
   
}else {
   alert("not allowed");
}





