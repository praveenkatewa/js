//varible and functions

 //type of veriale declaration
//1.let
//const
//var

//let and const block scoped

//wo sirf eak block tak he semit hai if ho ya for ho
//var is a function scoped throughout the function

//yaha function scoped ka matlab hai pure function mai variable ki scope ke scope rahegi usme agr if bhi a jaye to sirf us block mai veriable defined hoga

//example
/*
{
  let a = 10;
  console.log(a);
}
console.log(a);

 here a is not define outside the block
*/

/*
{
  var b = 20;
  console.log(b);
}
console.log(b);

here b is defined outside the block becouse var is function scoped
*/

// kise na kise ne ek function ko hide kiya hua hai
// agar hamny eak function define kiya hai to us function ke andar var ka scop rhega
//function lower level meaning hota hai stack
//there are two  types of stack in javascript //
// 1 main stack
//2 side stack


// main stack me humny ek function define kiya hai
//main pura body hai usme side stack function khelata hai



//hoisting:is udhari ka consept
//javascript mai humne ek veriable declace kiya hai to us variable ko uper lejata hai

// veriable ko declare kiye bina usko use kar lena hi hoisting ka concept hai

// example

console.log(c);
var c = 30;

// here c is undifined becouse it is hoisted to the top of the script
a(); //function hoisting

var a = () => {
  console.log(b); //veriable hoisting
}
var b = 20;

// types of function colling in javascript
// 1 function declaration or named function
//2 function expresion
// 3 immidiatly invoked function expression(IIFE)
//4 arrow function
//5 function custructor
//6 annoniomus function


// 1 function declaration and named function

// example

// function add(a,b)
// {
//     return a + b;
// }
// console.log((10, 20));

//2 function expresion me types hai

// a) using var

//  function(a, b) {
//     return a + b;
// };
var add = function (a, b) {
  return a + b;
};
add(); // add is reference to the that annoniomous function

// b) using let

let add=function (a, b) {
  return a - b;

};
//let can be reassign but not redeclaire
add(3,5)

const add = function (a, b) {
  return a - b;
};
add(3, 5);
// const can not be redeclare or reasign


//arrow function
//a)using bar
var add = (a,b) => {
  return (a + b);
}
add(3, 5);
//a)using let
let add = (a, b) => {
  return (a + b);
}
add(3, 5);

//a)using const
const add = (a,b) => {
  return (a + b);
}
add(3, 5);


// immediatly invoked function(IIFE)

var result = (function (a, b) {
  return a + b;
})(3, 5);
console.log(result);
//using let

let result = ((a, b)=> {
  return a + b;
})(2, 5);
console.log(result);
//using const

const result = ((a, b)=> {
  return a * b;

})(4, 7);
console.log(result);


//4. function cunstructer
// what is cunstroctor
//a cunstroctur is  a special method that is aoutomaticlly called when an object is created from a class
//to initialize the object
//default cunstructor  And  paramterised cunstructor and copy cunstrocter
// example

//default cunstructor
function add () {
  this.a = 3;
  this.b = 5;
  this.result = function () {
      return this.a + this.b;
  };
}
add();

// paramterised cunstructor

function sub (a,b) {
  this.a = 3;
  this.b = 5;
  this.result = function () {
      return this.a - this.b;
  };
}
sub(3,5);



// evenodd function 


function evenodd(a){
  this.a=a;
  this.result=()=>{
    if(this.a%2==0){
      return "even";

    }else{
      return "odd";
    }
  };
}
evenodd(5);



------------------------------------------------------

In JavaScript, both the rest and spread operators use the same syntax (...). However, they are used in different contexts and serve different purposes. Rest Operator
The rest operator allows you to represent an indefinite number of arguments as an array. It is used in function parameter definitions and destructuring assignments to collect remaining elements.Usage in Function Parameters
The rest operator can be used to gather all remaining arguments of a function into an array.

function sum(...numbers) 
{
return numbers.reduce((total, number) => total + number, 0); 
} 
console.log(sum(1, 2, 3, 4)); // Output: 10

Usage in Destructuring

The rest operator can also be used to collect the remaining elements of an array or properties of an object into a new array or object.




const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]



const {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: {c: 3, d: 4}

Spread Operator
The spread operator allows you to expand elements of an array or object into individual elements. It is used to spread elements in function calls, array literals, or object literals.
Usage in Function Calls
The spread operator can be used to pass elements of an array as arguments to a function.

const numbers = [1, 2, 3, 4]; 
console.log(Math.max(...numbers)); // Output: 4

Usage in Array Literals
The spread operator can be used to create a new array by spreading elements of an existing array.

1)const arr1 = [1, 2, 3]; 
  const arr2 = [...arr1, 4, 5];
  console.log(arr2); // Output: [1, 2, 3, 4, 5]


2) function multiply(a, b, c) {
  return a * b * c;
}

const numbers = [2, 3, 4];
const result = multiply(...numbers);
console.log(result); // Output: 24
Usage in Object Literals
The spread operator can be used to create a new object by spreading properties of an existing object.

const obj1 = {a: 1, b: 2}; 
const obj2 = {...obj1, c: 3}; 
console.log(obj2); // Output: {a: 1, b: 2, c: 3}

Key Differences
The rest operator is used in function parameters and destructuring assignments.
The spread operator is used in function calls, array literals, and object literals.
The rest operator collects multiple elements into an array.
The spread operator expands an array or object into individual elements.
Assignment: "Assignment Questions 27th June 2024"
REGex Software posted a new assignment: Assignment Questions 27th June 2024
Created YesterdayYesterday

Announcement: '//arguments? // 1.postional arguments…'
REGex Software
Created YesterdayYesterday
//arguments?
// 1.postional arguments
function greet(name, age) {
console.log(`Hello my name is ${name} and my age is ${age}`);
}
greet(27, "prajjal"); //calling

// 2.default arguments
function greet(name = "prajjal", age = 27) {
console.log(`Hello my name is ${name} and my age is ${age}`);
}
greet();

// 3.Rest Paramters ===>application react mai ...prev jab useState padhenge
function sum(...prajjal) {
let sum = 0;
prajjal.forEach((element) => {
  sum += element;
});
return sum;
}
console.log(sum(3.5, 4.5, 5.5, 6.5, 7.5, 8.9, 9.3));
//tab ata ek hi category ki value ho jaise sum karte wakt sabhi values numbers hi hote
//numbers , fruits ===>array ka ki dusra takira

// 4.Object destructing ===> express mai = req.body se information object      destructure karte wakt
//  ya react mai props(object) pass karte samay iska use dekha jayega

// function greet({ name = "kailash", age = 27 }={}) {
//   console.log(`Hello my name is ${name} and my age is ${age}`);
// }
// greet();//argument jo pass ho rahi hai wo ek object

// 5. object destructing in function

// function greet({name,age})
// {
//     console.log(`Hello my name is ${name} and my age is ${age}`);
// }

function greet({ name, age })
{
console.log(`hello from ${name} and my age is ${age}`);
}

const person = {
name: "prajjal",
age: 27,
};

greet(person);

----------------------------------------------------------

In JavaScript, both the rest and spread operators use the same syntax (...). However, they are used in different contexts and serve different purposes. Rest Operator
The rest operator allows you to represent an indefinite number of arguments as an array. It is used in function parameter definitions and destructuring assignments to collect remaining elements.Usage in Function Parameters
The rest operator can be used to gather all remaining arguments of a function into an array.

function sum(...numbers) 
{
return numbers.reduce((total, number) => total + number, 0); 
} 
console.log(sum(1, 2, 3, 4)); // Output: 10

Usage in Destructuring

The rest operator can also be used to collect the remaining elements of an array or properties of an object into a new array or object.




const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]



const {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: {c: 3, d: 4}

Spread Operator
The spread operator allows you to expand elements of an array or object into individual elements. It is used to spread elements in function calls, array literals, or object literals.
Usage in Function Calls
The spread operator can be used to pass elements of an array as arguments to a function.

const numbers = [1, 2, 3, 4]; 
console.log(Math.max(...numbers)); // Output: 4

Usage in Array Literals
The spread operator can be used to create a new array by spreading elements of an existing array.

1)const arr1 = [1, 2, 3]; 
  const arr2 = [...arr1, 4, 5];
  console.log(arr2); // Output: [1, 2, 3, 4, 5]


2) function multiply(a, b, c) {
  return a * b * c;
}

const numbers = [2, 3, 4];
const result = multiply(...numbers);
console.log(result); // Output: 24
Usage in Object Literals
The spread operator can be used to create a new object by spreading properties of an existing object.

const obj1 = {a: 1, b: 2}; 
const obj2 = {...obj1, c: 3}; 
console.log(obj2); // Output: {a: 1, b: 2, c: 3}

Key Differences
The rest operator is used in function parameters and destructuring assignments.
The spread operator is used in function calls, array literals, and object literals.
The rest operator collects multiple elements into an array.
The spread operator expands an array or object into individual elements.

----------------------------------------------------------------------
// 6.frequency count using reduce function
const frequencycount = (...nums) => {
return nums.reduce((count, num) => {
  if (num == 3) return count + 1;
  else return count;
}, 0);
}; 

console.log(frequencycount(1, 2, 3, 3, 3, 3, 3, 4, 5, 6));