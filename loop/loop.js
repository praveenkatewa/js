// for(let x=1; x<=10; x++){
//     console.log(x);
// }    


// sum of first 10 numbers
/*
 let num=0;
for(let x=1; x<=10; x++){
    num+= x;
}
console.log(num);
*/

//  array in for loop
/*
const arr =[ "hulk", "iron man","batman","joker","thor"];
 console.log(arr[2]);
 console.log(arr[3] );
 */

// if print array by loop
/*
 const arr =[ "hulk", "iron man","batman","joker","thor"];
const length = arr.length;
 for(i =0; i<arr.length; i++){
    console.log(arr[i]);
 }
*/

//  for in loops
/*
const studentobject = {
name :"peter parker",
agr :18,
location:"ny",
school : "high",
 
}
*
//  one by one
/*
console.log(studentobject.name);
//  aslo write console.log(studentobject["name"]);
console.log(studentobject.age);
console.log(studentobject.location);
console.log(studentobject.school);
*/


//  loop for - in loop 
/*

for(let key in studentobject){

    // console.log(key);  variable only
    // console.log(studentobject[key]);  value of variable

    console.log(key+ " :"  + studentobject[key]);
    //  variable + value of variable
}
*/

//  if want to change the value

/*
 studentobject["agr"] ="20  ";
 console.log(studentobject.agr);

*/
  


// by loop
/*
for(let key in studentobject){
    if (key === "agr"){
        studentobject[key] = 20;
    }
}
console.log(studentobject.agr);
*/


//   loop for -in with string
 /*
 const str ="hello world";
 for (let  key in str)
 {
    console.log(key);
    // console.log(str[key]);
 }
*/
//  while loop 
 /*
 const status = true;
 let number =0;
 while(status===true){
    console.log("say yes");
    number++;
 }
*/

/*
let i =0;
while(i<10){
    console.log(i);
    i++;
}          */

// do while loop
/*
let status = true;
let number =0;
while(status===true){
    console.log("say yes");
    number++;
    if(number>10){
        status = false;
    }
    }
    */

    /*
    let status = false;
    let number =0;
    do{
        console.log("say yes");
    }
    while(status===true);

*/

//  do while
let y =1;
do{
    console.log(y);
    y++;

}while(y<10);