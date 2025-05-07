// * type conversion
//* to string
//* number
//* to boolean..







// implicit
/*
let numStr ="10";       //int 
let result =numStr + 5;     //string +int 
console.log( typeof result);  // string
console.log(result);
*/

// let score= "33"
let score = "33gh"
console.log(typeof score);
console.log(typeof (score) );
  
let valueInNumber= Number(score)   // string change to number
console.log(typeof valueInNumber); // number
console.log(valueInNumber)  // when score ="33"   > ans is number
                                               //  when score="33gh"  > ans is nan


let abhi =1
let booleanabhi = Boolean(abhi)
console.log(booleanabhi);              // ans true

/*
1 > true
0 > false
"'"  > false
"anuj" >  true
*/

// for string
/*
 let somenumber =33
 let stringNumber = String(somenumber)
 console.log(stringNumber)        // ans 33
 console.log(typeof stringNumber) //  ans string
 */

 console.log("1" + 2)
 console.log(1 + "2")
 console.log("1"+ 2+2)
 console.log(1+2+"2")
//  console.log(3+4*5% 3)
