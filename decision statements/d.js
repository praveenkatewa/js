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

// const readlineSync = require("readline-sync");
// const number = Number(readlineSync.question("enter a number ?"));

// const remafterdivisionbythree=number%3;
// const remafterdivisionbyfive=number%5;

// if(remafterdivisionbythree === 0 && remafterdivisionbyfive=== 0){
//     console.log("fizz");
// }else if (remafterdivisionbythree === 0  || remafterdivisionbyfive=== 0){
//     console.log("buzz");
// }


//******************************(2)*********************** */



// const username=prompt("enter name")
// const age=prompt("enter age")


// if value not enter then it take karan or 23
// const username=prompt("enter name") || 'karan';
// const age=prompt("enter age") || 23;


const username='raj'
const age=221

console.log(`Name: ${username}`)

console.log(`age: ${age}`)

if (age >= 0 && age <= 4) {
        console.log(`${username} is a kid.`);
        console.log('And he/she is playing.');
    } else if (age >= 5 && age <= 17) {
        console.log(`${username} is a school student.`);
        console.log('And he/she is learning science and maths.');
    } else if ( age >= 18 && age <= 24) {
        console.log(`${username} is a college student.`);
        console.log('And he/she is learning computer science.');
    } else if (age >= 25 && age <= 45) {
        console.log(`${username} is a working professional.`);
        console.log('And he/she is a web developer.');
    } else if (age > 45 && age < 121) {
        console.log(`${username} is retired.`);
        console.log('And he/she reads newspaper.');
    } else if (age >= 121) {
        console.log(`${username} is immortal.`);
        console.log('And he/she reads newspaper.');
    } else {
        console.log('Please Enter a Valid Age');
    }
    
    console.log('Program Ended!!')
