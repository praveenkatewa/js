// palindrome string

const str="madam";

function getReversedStr(str){
  let reversedStr ="";
  for(let i=str.length-1;i>=0;i--){

    reversedStr +=str[i];

  }
  return reversedStr;
}

const result =getReversedStr(str);
if(result === str){
  console.log("string is a palindrome");
}else{
  console.log("string is not a palindrome")
}






// const arrOfChar=str.split("");
// const reversedchar =arrOfChar.reverse();
// const reversedStr = reversedchar.join("");

// console.log(reversedStr);
// console.log(reversedchar);
// console.log(arrOfChar)

// const reversedStr = str.split("").reverse().join("")

// if(str === reversedStr)
//   console.log("string is palindrome")
// else
// console.log("string is not palindrome")