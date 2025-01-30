// function today(a,b,c,d){
     

// }
// today(10,11,12,13)




//  let add =function(a,b){
//      const c=a+b;
//      console.log(c)
//  }
//  add(5,6)

// Immediately Invoked Function Expressions (IIFE) in JavaScript

// (function (){ 
//      let x=10;
//      console.log(x)
//      })();



     // (function (a,b){ 
     //      let x=a+b;
     //      console.log(x)
     //      })(5,6);
     


     // arrow function

//      const add = (a, b) => a + b;
// console.log(add(4,5));

// const sum=(a,b)=>{
//      console.log(a+b);
//  }
//  sum(1,5);


//  let a=5;
//  let b=5;

// const sum=(a,b)=>{
//     console.log (a+b);
//  }
//  sum(a,b);



//  const today=(a,b)=>{
//      let c=a+b
//      console.log(c)

//  }
//  today(10,20)




function count (num){
     if(num ===200){
          console.log("complete")
          return;
     }
     console.log(num)
     count(num+10)

}
count (100)



// let Counter = (number) => {
 
//      if(number === 0) return ; 
//      console.log(number);
//      Counter(number - 1);
//  }
// Counter(5);








 
// functions --> a block of code that fulfils a specific task

// syntax

// function printcount(){
//      console.log('counting');
// }
 
// issues -- bullky,readability bugging not reused ,redundancy ->repeat 




// function declaration
/*
function run(){
     console.log("running");
}

run();
*/
//  run(); // funtion call or invote


 // hoisting  -->Hoisting is a JavaScript feature that allows you to use functions and variables before they're declared.
//  JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code
// hoisting work in funtion declaration only not in funtion assignment
// process of moving funtion declaration to the top of file.
// done automatically  by js engine



// funtion assignment 

// (1) named function assignment
/*
let stand=function walk(){
     console.log("walking");

}
*/
// stand(); // here not direct call walk() ,,so call stand()
//  here Also not call stand() before initialization

//  let jump=stand;
//  jump();





//(2) Anonymous funtion assignment
/*
 let stand=function (){
     console.log("walking");
}

stand();
*/


/*
function sum(a,b){
     return a+b;
}
*/
// console.log(sum(1,2));
// console.log(sum(1));    // if  not provide value of b .. then it send undefined value ,,,so it give ans NaN
// console.log(sum());     //NaN 
// console.log(sum(1,2,3,4,5,6));  // it show ans 3...it take 2 value only 1,2


/// ********************  Arguments *****//////

/*
function sum(a,b){
     console.log(arguments);
     return a+b;
}
let ans= sum(1,2,3,4,5,6,7);
console.log(ans);
*/
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7 }  // here it is object ..key value pair
// 3  ans 



// ==================================================================
/*
// function sum()
function sum(a,b){        // here aslo no need to give a,b,  it run for all multiple parameters
     let total=0;
     for(let value of arguments)
          total=total+value;
     return total;
}
let ans=sum(1,2,3,4,5,6);
console.log(ans);     // ans 21
*/


 

// ***************REST operator ***********************///
// ...
/*
function sum(...args){
     console.log(args);
}
sum(1,2,3,4,5);       // it make array  ..   ans   [ 1, 2, 3, 4, 5 ]
*/

/*
function sum(num,value,...args){
     console.log(args);
     
    
}
sum(1,2,3,4,5);      // ans : here num=1,value=2   and 3,4,5 are store in array
*/



//***********  Default parameters ************************ */

// function interest(p,r,y){
//      return  p*r*y/100;

// }
// console.log(interest(1000,10,5));

// example of default parameter

// function interest(p,r=10,y=5){
//      return  p*r*y/100;

// }
// console.log(interest(1000));    // here if you not give any value then it use default value

// console.log(interest(1000,5)); // here if u try to give value 5 to y,,then it not taken,,if start default value then ,not given any value by argument

// console.log(interest(1000,undefined,6));  // it not use(not a good practice),,, here we give a undefined value to r,then it use default value ,and y use value 6



//*************         getter setter      ***************/
// getter  --> access properties
// setter ---> change or mutate properties


// let person ={
//      fname:'anuj',
//      lname:'kumar'
// };

// function fullname(){                       // this is only readonly funtion  
//      return `${person.fname} ${person.lname}`;

     
// }
// console.log(fullname());

// getter setter

// let person ={
//      fname:'anuj',
//      lname:'kumar',
//      get fullname(){
//           return `${person.fname} ${person.lname}`;
//      },
//      set fullname(value){
//           let parts =value.split(' ');
//           this.fname=parts[0];
//           this.lname=parts[1]; 
//      }
// };
// person.fname='rahul';
// person.lname='das';
// person.fullname='rahul das';
// console.log(person.fullname);




//*******************try and catch     ( error handling)          **************** */


/// **********************************  reducing an array*************************/////////////////////

// let a=[1,2,3,4];
// let total=0;
 
// for(let value of a)
//      total=total+value;
// console.log(total);


// 2nd method reducing
// let totalsum=a.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
// console.log("PRINTING TOTAL SUM:")
// console.log(totalsum);