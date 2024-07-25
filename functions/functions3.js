function myfunction(msg){
     console.log(msg);
}
// myfunction();          // o/p --> undefined
myfunction("want to learn js")     // o/p --=>show o/p

// i/p  ---> parameter
//  o/p  ---> argument


// funtion -> 2 numbers,sum


// function sum(a,b){
//      console.log(a+b);

// }
// sum(5,6);

/*

function sum(a,b){
     s=a+b;
     return s;

}
 let val =sum(5,6);
console.log(val);
*/

/*
function sum(a,b){
     s=a+b;
     console.log("before return");
     return s;
     console.log("after return");
     // here after return no any value work

}
 let val =sum(5,6);
console.log(val);
*/
//************************************************************************************************* */

/*
function sum(a,b){
     // local variables -->scope
     s=a+b;
     console.log("before return");
     return s;

}
 let val =sum(5,6);
console.log(val);
*/



//   *******************     Arrow funtions /***************************************** */

 const sum=(a,b)=>{
    console.log(a+b);
}
sum(1,5);

