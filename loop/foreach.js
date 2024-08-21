// for each loop in arrays

// arr.forEach (callBackfunction)

//   callbackfunction ; Here , it is a Function to execute for each element in the array

// A callback is function passed as an argument to another function.


/*
arr.forEach((val)=>{
     console.log(val);
})
*/

/*

function abc(){
     console.log("hello");

}

function myfunc(abc){
     return abc;
}
     */

// ex

let arr =[1,2,3,4,5];

arr.forEach(function printval(val){
     console.log(val);

});
