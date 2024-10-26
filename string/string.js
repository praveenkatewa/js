

// const name="praveen"
// const last= "katewa"
// console.log(name +  last + "value")

const { prompt } = require("readline-sync");

// console.log(`hello my name is ${name} and my last name is ${last}`);


// const gameName = new String(`praveen`)

// console.log(gameName[0]);
// console.log(gameName);
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.substring(0,3));

//  also write ,to make new string
/*
const newString =gameName.substring(0,3)
console.log(newString);
*/

// console.log(gameName.slice(-2,4));

// const newString="    anuj    "
// console.log(newString);
// console.log(newString.trim());

// const url="https://praveen.com/praveen%30"
// console.log(url.replace('%30', '-'))
// console.log(url.includes('praveen'));




// *************concat()

const str='Ahello';
const str2=' world';
let ans='';
 ans=ans.concat(str,str2);
console.log(ans)
// console.log(str.concat(' ','world'))




// ********************** padStart

const acc='456'

console.log(acc.padStart(16,'*'))

//****************padEnd */

console.log(acc.padEnd(16,'@'))


// ****************** charCodeAt
console.log(str.charCodeAt(0))


// ***************** split

let str3='my name is praveen';
  //  1)   let str4=str3.split(' ')   
    // ans --- [ 'my', 'name', 'is', 'praveen' ]


    //2)  let str4=str3.split('')    
    //ans
    //    [
    //   'm', 'y', ' ', 'n', 'a',
    //   'm', 'e', ' ', 'i', 's',
    //   ' ', 'p', 'r', 'a', 'v',
    //   'e', 'e', 'n'
    // ]


    // 3)  let str4=str3.split('a') 
    // ans------[ 'my n', 'me is pr', 'veen' ]

// console.log(str4)   



const width= prompt("enter width")
const height=prompt("enter height")


console.log(width* height)