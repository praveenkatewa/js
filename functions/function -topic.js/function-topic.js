//  function myName(){
//   console.log("i am praveen")
//   console.log('hello')

//  }
//  myName()



// In JavaScript, a function is a block of reusable code that performs a specific task.
//   define a function once and call it multiple times in different parts of your program. Functions help to make code modular, easier to maintain, and more readable.


// function functionName() {
  // code to be executed
// }
// functionName();






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



const add = (a, b) => a + b;

console.log(add(3, 4));  // Output: 7




const subtract = (a, b) => a - b;

console.log(subtract(9, 5));  // Output: 4


const multiply = (a, b) => a * b;

console.log(multiply(6, 7));  // Output: 42




const divide = (a, b) => a / b;

console.log(divide(8, 2));  // Output: 4



const compare = (a, b) => a > b ? `${a} is greater than ${b}` : `${a} is less than or equal to ${b}`;

console.log(compare(5, 3));  // Output: 5 is greater than 3








// Recursive Functions in JavaScript

// A recursive function is a function that calls itself, either directly or indirectly, to solve a problem by breaking it down into smaller, more manageable instances of the same problem.

// For a recursive function to work correctly, it must have:

// Base case: The condition under which the function stops calling itself.
// Recursive case: The part where the function calls itself.




function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5));  // Output: 120










function fibonacci(n) {
  // Base case: Fibonacci of 0 is 0, and Fibonacci of 1 is 1
  if (n <= 1) {
    return n;
  }
  // Recursive case: Fibonacci of n is the sum of the two previous Fibonacci numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));  // Output: 8







function sumArray(arr) {
  
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5]));  






function countdown(n) {
 
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  
  console.log(n);
  countdown(n - 1);
}

countdown(5);  