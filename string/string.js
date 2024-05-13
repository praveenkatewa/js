const name="praveen"
const last= "katewa"
console.log(name +  last + "value")

console.log(`hello my name is ${name} and my last name is ${last}`);


const gameName = new String(`praveen`)

console.log(gameName[0]);
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.substring(0,3));

//  also write ,to make new string
/*
const newString =gameName.substring(0,3)
console.log(newString);
*/

// console.log(gameName.slice(-2,4));

const newString="    anuj    "
console.log(newString);
console.log(newString.trim());

const url="https://praveen.com/praveen%30"
console.log(url.replace('%30', '-'))
console.log(url.includes('praveen'));


