
//* */ (1)  In JavaScript, a function is a block of reusable code that performs a specific task.

//**/ (2)   define a function once and call it multiple times in different parts of your program. Functions help to make code modular, easier to maintain, and more readable.

//**/(3 )  Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.




// function functionName() {
  // code to be executed
// }
// functionName();

//////*********************************************** */

//  function myName(){
//   console.log("i am praveen")
//   console.log('hello')

//  }
//  myName()

////*********************************************************** */
// function myName(name){
//   console.log(`i am  ${name}`);
//   console.log(name);
// }
// myName("praveen");

//////////////************************************************* */
// function addtwonumber(num1,num2){
//   console.log(num1+num2);

// }
// addtwonumber(3,"3")



//** */  with return 


// function add2(num1,num2){
//   let result =num1+num2;
//   return result;

// }
//   // console.log(add2(3,4))
//   const ans=add2(3,4)
//   console.log(ans)

// *********/argument pass in this function

// function gret(name){
//   return `hello ${name}`
// }

// const msg=gret("praveen")
// console.log(msg)




// function login(username){
//   return( `${username} just login in`)

// }

// console.log(login("anuj"))




// ********* use if in funtion to check 

// function login (username){
//   if(username === undefined)
//     // if(!username)        //* */ use this aslo 
//     {
//     console.log("login again");
//     return
//   }
//   return `${username} just login here`
  
// }
// console.log(login("anuj"))
//  console.log(login())      //** ans here is login again and undefined */




//***example of 2 parameters */

// function greetuser(name,city){
//   console.log(`hello, ${name} welcome to my website,thank you for joining from ${city}`)
// }

// greetuser("anuj","jaipur")



// **/cardprice   // use of rest operator in function

// function calcardprice (...num1){

//   return num1
// }

// console.log(calcardprice(200,300,400))   //*/ ans [200,300,400]


//**   use of object in function**/

// const user={
//   name:"anuj",
//   age:23
// }
// function objects(anyobject){
//   console.log (`name is ${anyobject.name} and price is ${anyobject.price}`)

//   // return (`name is ${anyobject.name} and price is ${anyobject.price}`)
// }
// objects(user)



// objects({          //**direct pass objects  */
//   name:"anuj",
//     age:23

// })

//** store function result in variable */
//  const ans=objects(user)
//  console.log(ans)


//********************************************************** */


//***pass array in function */

// const arr=[200,300,400];

// function arrfunx(getarray){

//   return getarray[1]

// }
// console.log(arrfunx(arr))
// console.log(arrfunx([100,200,300]))

//***sum of numbers  */

function sumofnumber(min,max) 
{
  let sum=0;
  for(let i=min;i<=max;i++){
    sum=sum+i;

  }
  return sum;
}
console.log(sumofnumber(1,10))+





////************************************************************ */

// {{2}          Function Expression

//** */ It is similar to a function declaration without the function name. Function expressions can be stored in a variable assignment. 




// Types of Functions in JavaScript

// Function Declaration

// This is the standard way of defining a function.




// 1)  Anonymous Function

// Anonymous functions in JavaScript are functions that do not have a name. They're commonly used in scenarios where you need a function for a short period, like in function expressions, callbacks, or event handlers.

// Anonymous Function as a Callback (setTimeout)
// setTimeout(function() {
//   console.log("This runs after 2 seconds");
// }, 2000);



// let add =function(a,b){
//   return a+b;
// };
// console.log(add(2,5));


// let subtract = function(a, b) {
//   return a - b;
// };

// console.log(subtract(5, 3));  


// let multiply = function(a, b) {
//   return a * b;
// };

// console.log(multiply(4, 5));  


// let divide = function(a, b) {
//   return a / b;
// };

// console.log(divide(10, 2));  


// let modulo = function(a, b) {
//   return a % b;
// };

// console.log(modulo(10, 3));  







//2)  Immediately Invoked Function Expressions (IIFE) 

// An IIFE is a function that is defined and executed immediately after it’s created. It’s useful for creating a local scope, avoiding pollution of the global namespace.
// (function() {
//   // code here
// })();



// (function(a, b) {
//   console.log(a + b); 
// })(3, 4);



// (function(a, b) {
//   console.log(a - b);
// })(5, 3);


// (function(a, b) {
//   console.log(a * b);
// })(4, 5);



// (function(a, b) {
//   console.log(a / b);  
// })(10, 2);




// (function(a, b) {
//   if (a > b) {
//     console.log(a + " is greater than " + b);  
//   } else {
//     console.log(a + " is less than or equal to " + b);
//   }
// })(7, 3);




// Arrow Functions in JavaScript

// const functionName = (param1, param2) => {
//   // function body
// };



// const add = (a, b) => a + b;

// console.log(add(3, 4));  




// const subtract = (a, b) => a - b;

// console.log(subtract(9, 5)); 


// const multiply = (a, b) => a * b;

// console.log(multiply(6, 7));  




// const divide = (a, b) => a / b;

// console.log(divide(8, 2));



// const compare = (a, b) => a > b ? `${a} is greater than ${b}` : `${a} is less than or equal to ${b}`;

// console.log(compare(5, 3));  








// Recursive Functions in JavaScript

// A recursive function is a function that calls itself, either directly or indirectly, to solve a problem by breaking it down into smaller, more manageable instances of the same problem.

// For a recursive function to work correctly, it must have:

// Base case: The condition under which the function stops calling itself.
// Recursive case: The part where the function calls itself.




// function count (num){
//   if(num ===200){
//        console.log("complete")
//        return;
//   }
//   console.log(num)
//   count(num+10)

// }
// count (100)


// function factorial(n) {
 
//   if (n <= 1) {
//     return 1;
//   }
  
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));  










// function fibonacci(n) {
 
//   if (n <= 1) {
//     return n;
//   }
  
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(6));  
// 0112358



// function fibonacciSeries(n) {
//   let series = [];
  

//   function fibonacci(num) {
//     if (num <= 1) {
//       return num;
//     }
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
  
 
//   for (let i = 0; i <= n; i++) {
//     series.push(fibonacci(i));
//   }

//   return series;
// }

// console.log(fibonacciSeries(6));  




// function sumArray(arr) {
  
//   if (arr.length === 0) {
//     return 0;
//   }

//   return arr[0] + sumArray(arr.slice(1));
// }

// console.log(sumArray([1, 2, 3, 4, 5]));  






// function countdown(n) {
 
//   if (n <= 0) {
//     console.log("Done!");
//     return;
//   }
  
//   console.log(n);
//   countdown(n - 1);
// }

// countdown(5);  







// let a='1000xcvd'
// console.log(parseInt(a))
// 100

// console.log(+a)
// NaN





// function count(n) {

//   if(n==31){
//     return;
//   }
//   if(n%2==0){
//     console.log("even", n)
//   }else 
//   {
//     console.log("odd", n)
//   }
//   n++;
//   count(n)
  
// }

// count(20);  


// let name='aman'
// function fun(){
//   let name2='raj'

//   if(true){
//     let name3='kuldeep'

//     console.log(name3)
//   }
//   console.log(name)
//   console.log(name2)
//   // console.log(name3)
//   function fun2(){
//     console.log(name2)
//   }

//  fun2();
  
// }
// console.log(name2)

// console.log(name)
// fun();

// !isempty
// !isNoTempty





// let x=5;
//  x +=5;
//  x +=10
//  console.log(x)
//  x *=15
//  console.log(x)
//  x %=5
//  console.log(x)







//  const square= (a) => a*a;

// console.log(square(8));



// let add =function(a,b){
//   return a+b;
// };
// console.log(add(2,5));




// let multiply = function(a, b) {
//   return a * b;
// };
// console.log(multiply(4,6))






// (function() {
//   console.log("I am an IIFE!");
// })();





// function factorial(n) {
 
//   if (n <= 1) {
//     return 1;
//   }
  
//   return n * factorial(n - 1);

// }

// console.log(factorial(5));  





// function check(number) {
//   return (number % 2 === 0) ? 'Even' : 'Odd';
// }

// const num = 8; 
// console.log(check(num));


// let name='aman'
// function fun(){
//   let name2='raj'

//   if(true){
//     let name3='kuldeep'

//     console.log(name3)
//   }
//   console.log(name)
//   console.log(name2)
//    console.log(name3)
//   function fun2(){
//     console.log(name2)
//   }

//  fun2();
  
// }
//  console.log(name2)

// console.log(name)
// fun();


//  variables declared with let or const inside a block scope (like within curly braces {}) are block-scoped.  are only accessible within the block in which they are defined.



// {
//   let x=5
//   console.log(x)

// }
// console.log(x)


// {
//   const x=5
//   console.log(x)

// }
// console.log(x)


// var a = 10;
// function test() {
//     console.log(a);
//     var a = 20;
// }
// test();



// function outer(){
//   let a=5;
//   function inner(){
//     let b=10;
//     sum =a+b;
//     return(sum)
//   }
//   inner()
//   console.log(sum)


// }
// outer()


// function outer() {

// var a=5;
// let b=2;
// }
// function scope () {
//   console.log(a)
  // console.log(b)
// }
// scope()



// function outer() {
//   let a = 10;
//   function inner() {
//       console.log(a);
//   }
//   inner();
// }
// outer();

// function reassign(){
//   let a=5;
//   a=20;
//   console.log(a)
//   const b=10;
//   b=12;
//   console.log(b)

// }
// reassign()



// function operator(a,b){
//   let add=a+b;
//   let sub=a-b;
//   let multi=a*b;
//   let div=a/b;

//   let obj={add,sub,multi,div};
//   return obj;
// }
// console.log(operator(5,7))


// const person = { name: 'John', age: 30 };

// person.age = 31;  


// console.log(person); 





// const greet=(name)=>{
//   return "Hello " + name;

// } 
// console.log(greet("praveen"));




// for (var i = 0; i < 3; i++) {
//   var a= `var : ${i}`;
//   let b = `let : ${i}`;
//   const c = `const : ${i}`;
  
//   console.log('Inside loop:');
//   console.log('var:', a);
//   console.log('let:', b);
//   console.log('const:', c);
// }

// console.log('Outside loop:');
// console.log('var:', a);
//   console.log('let:', b);
//   console.log('const:', c);
