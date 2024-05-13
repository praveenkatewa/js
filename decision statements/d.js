//  if  / if -else / if -else if / nested if else / switch 




// (1)  if statement  
/*
let date =22;
if(date==6 )
{
    console.log("todays date");
}else{
    console.log("some other date");
}
*/




//  ( 2)
/*
if(1==2)
{
    console.log('1==2');

}
else{
    console.log("1==1");
}
 result 1==1
*/

/*
(3)

if(1==1)
{
    console.log("1==2");

}
else{
    console.log("1==1");
}
*/


/*
(4)

if("a"=="a")    ( string)
{
    console.log("yes");

}
else{
    console.log("no");
}
*/

//   grade system
/*
    const yourscore = 82;
    if(yourscore >=  0 && yourscore<=40){
        console.log("fail");
    }
else{
    console.log("pass");
    if(yourscore >= 41 && yourscore<=60)
    {
        console.log("average" );
       }else
       {
        if(yourscore >= 61 && yourscore<=80)
        {
            console.log("good" );
        }
        else
        {
            console.log("awsome" );
        }
       }
    }
     */

/*

    //  if  ,,, else if
    const yourscore =81;

    if(yourscore >= 0 && yourscore<= 40)
    {
console.log("fail");
    }
    else if(yourscore >= 41 && yourscore<=60)
    {
        console.log("average" );
    }else if(yourscore >= 61 && yourscore<=80)
    {
        console.log("good" );
    }else 
    {
        console.log("awesome" );

    }
    */


    //  switch 
/*
    const yourscore = 40;
    const grade ="f";

    switch(grade){
    case'f':
    console.log("score is blow 40");
     break;
    case'c':
    console.log("score is blow 41 -60");
    break;
    case'b':
    console.log("score is blow 61 - 80");
    break;
    case'a':
    console.log("score is blow 81 - 100");
    break;
    default:
        console.log("bad input");
     }
     
    
*/



// dot
/*
let  marks =50;

if (marks >=90){
    console.log("a");
}
else if (marks >=80)
{
    console.log("b");
}
else if (marks >=70)
{
    console.log("c");
}
else if (marks >=60)
{
    console.log("d");
}
else {
    console.log("e");
}
*/


//  switcg case

// let num =2;
// switch (num)
// {
//     case 1 : console.log("a");
//     break;
//     case 2 : console.log("b");
//     break;
//     case 3 : console.log("c");
//     break;
//     case 4 : console.log("d");
//     break;
   
// }

const readlineSync = require("readline-sync");
const number = Number(readlineSync.question("enter a number ?"));

const remafterdivisionbythree=number%3;
const remafterdivisionbyfive=number%5;

if(remafterdivisionbythree === 0 && remafterdivisionbyfive=== 0){
    console.log("fizz");
}else if (remafterdivisionbythree === 0  || remafterdivisionbyfive=== 0){
    console.log("buzz");
}



