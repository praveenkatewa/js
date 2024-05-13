var readlineSync =require("readline-sync");
const number=Number(readlineSync.question("enter a number:"))

const reminder= number%2;

if(reminder===0){
     console.log(`${number} is an even number`)
     if(number%4===0){
          console.log(`${number} is divisible by 4`)

     }else {
          console.log(`${number} is not divisible by 4`)
     }
}
else{ console.log(`${number} is an odd number`)
if(number % 5 ===0){
     console.log(`${number} is divisible by 5`)
}
else{
     console.log(`${number} is not divisible by 5`)
}

}

