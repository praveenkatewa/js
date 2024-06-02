// for loop

// for(let i=0;i<10;i++){
//      console.log(i)
//      console.log("hello")
// }

// const userName="praveen";
// // console.log(userName[2])
// for(let i=0;i<userName.length;i++){
//      console.log(userName[i])
// }

// nested for loop

// for(let i=1;i<=10;i++){
//      for(let j=1;j<=12;j++){
//           let product=i*j;
//           console.log(`${i}*${j}=${product}`);

//      }
// }


// 
// const symbol="* ";
// for(let i=1;i<=5;i++){
//      console.log(symbol.repeat(i))
// }


// const symbol="* ";
// for(let i=5;i>=1;i--){
//      console.log(symbol.repeat(i))
// }


// const symbol="* ";
// for(let i=1;i<=5;i++){
//      console.log(symbol.repeat(i))
// }
// for(let i=5-1;i>=1;i--){
//           console.log(symbol.repeat(i))
//      }
 
// const userName="praveen";
// let count=0;
// for(let i=0;i<userName.length;i++){
//      count++;
// }
// console.log(count);

// let num=101;
// for(let i=1;i<=num;i++){
//      if(i%2==0){
//           console.log(i)
//      }

// }
const inputString="hello, i love GFG...";
const vowels="aeiou";

for(let i=0;i<inputString.length;i++){
     if(vowels.includes(inputString[i])){
          console.log(`${inputString[i]} is  a vowel`)
     }else{
          console.log(`${inputString[i]} is not a vowel`)
     }
}