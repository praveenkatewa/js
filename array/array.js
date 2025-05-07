/*

const arr=["apple", "bannana"];
const arr1 =new Array('apple','bannna');
console.log(arr);
console.log(arr1);
*/


/*
const arr2 =new Array(2);
console.log(arr2);
arr2.push(1);
console.log(arr2);
arr2[0  ]=1;
arr2[1]=2;
arr2[2]=3;
console.log(arr2);
*/

// array js we strore different types of data types together
 /*
const arr =[{name :"s"},1,"anuj",[1,2,3]];
console.log(arr);
console.log( arr[1]);
console.log(  typeof arr[3]);
*/
//  use of push or unshift
/*
const arr = [ "jaydesh","kuldeep",];
arr.push("shivani");
console.log(arr);
arr.unshift("javed");
console.log(arr);
*/


//  change in array replace
/*
const arr = [ "jaydesh","kuldeep",];
arr[1]="vivek";
console.log(arr);
*/


//  remove the element 

/*

const arr = [ "jaydesh","kuldeep",];
arr.pop()
//  by pop == last element remove
arr.shift();
//  by shift == first element remove
console.log(arr);

*/

//  array operations functions
 
//  (1) sort

/*
const months =["march","jan","feb","mar","apr","may"];
months.sort();
console.log( months);



const array1=[1,2,3,4,5,6,7,8];
array1.length;
console.log(array1.length);
 array1.slice(3);
 console.log(array1.slice(3));
*/

//  ARRAY YOUTUBE
 
// const myArr = [0,1,2,3,4,5,true ,"praveen"]
// console.log(myArr);

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2);
// console.log(typeof myArr2);

// const myArr2 = new Array(1,2,3,4)
// myArr2.push(5,6,7)
// console.log(myArr2);

// const fruit =[];
// fruit.push("banana","apple", "peach")
// console.log(fruit);
// console.log(fruit.length);
// fruit.pop()
// console.log(fruit);

//  unshift
/*
 const myArry3 =[1,2,3,4]
myArry3.unshift(0)
console.log(myArry3);
myArry3.shift()
console.log(myArry3);
*/


// incldes  and join

/*
const myarry4 = [1,2,3,4]
console.log(myarry4.includes(1));
console.log(myarry4.indexOf(2));

const newarry = myarry4.join()
console.log(newarry);
console.log(typeof(newarry));
*/



//**differce between array[ ] and array.indexof() */
// const myArray = [1, 2, 3];
// const booleanValue = true;
// myArray.push(booleanValue)
// console.log(typeof booleanValue)
// console.log(typeof myArray[3]); 
// console.log(typeof myArray.indexOf(3)); 

// // myArray.push(booleanValue);

// console.log(myArray); // Output: [1, 2, 3, true]



//  slice , and splice
/*
const mynary = [1,2,3,4,"anuj"]
console.log( "A" ,mynary);
const myn1 = mynary.slice(1,3)
console.log(myn1);
console.log("B", mynary);

const myn2 = mynary.splice(1,3)
console.log(myn2);
 
 console.log("C",mynary);

 */

//   push , concat , 
/*
const marvel_heros = [" thor", "Ironman" ," spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros . push (dc_heros )
console. log (marvel_heros) ;
console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);
const all_new_heros =[...marvel_heros, ...dc_heros]
console.log(all_new_heros);

*/

//  flat 
/*
const another_array = [1,2,3, [4,5,6 ],7, [6,7,8,9,[4,6]]]
const real_another_array =another_array.flat(Infinity)
console. log (real_another_array);
*/

/*
console.log(Array.isArray ("anuj"));
console.log(Array.from("anuj"));
console.log(Array.from( {name:"anuj"} ));
*/

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of (score1,score2,score3));
