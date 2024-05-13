const readlineSync = require("readline-sync");
const number = Number(readlineSync.question("enter a number ?"));

const remafterdivisionbythree=number%3;
const remafterdivisionbyfive=number%5;

if(remafterdivisionbythree === 0 && remafterdivisionbyfive=== 0){
    console.log("fizz");
} if (remafterdivisionbythree === 0  || remafterdivisionbyfive=== 0){
    console.log("buzz");
}