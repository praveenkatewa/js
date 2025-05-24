// * type conversion
//* to string
//* number
//* to boolean..



//* (1)  to number

// const a="1";
// const b="12";

// //* to change into number  use ----->  Number();

// const c=Number(a);
// const d=Number(b)
// console.log(typeof a);  //* string
// console.log(typeof b);  //* string
// console.log(typeof c); //* number
// console.log(typeof d);  //* number



// * to  string
// const a=1;
// const b=12;

// //* to change into string  use ----->  String();

// const c=String(a);
// const d=String(b)
// console.log(typeof c)

// *  string to boolean 

// const a="3";
// console.log(Boolean(""))  //* false  ---> empty string give false value .,,other true

// console.log(Boolean(a)) //*true


//* number to boolean

// const a=5;
// const b=0;
// console.log(Boolean(a))  //* true   -->any value other than 0 is true
// console.log(Boolean(b))//* false 


//**************************************** */
//* implicit
// *example


// * number+ number=number
// * string+ number=string

// let numStr =10      
// let result =numStr + "5";     
// console.log( typeof result);  
// console.log(result);
//************************************ */ */

//*(ex-2)

// let score="33abc"
// console.log(typeof score)  //* string
// console.log(Number(score)) //* NaN
  








//**READLINE Sync ********/
// ** install package readlineSync  ---> npm i readline-sync

const readlineSync=require("readline-sync")

// readlineSync.question("may i know your name?")

// ** aslo give to variable

const username=readlineSync.question("may i know your name?")

const userage=readlineSync.question("may i know your age?")


console.log(userage)

// console.log(username)
console.log(`welocome ${username } to jaipur`)




