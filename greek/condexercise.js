// const firstString="zzzpple";
// const secondString="banana";
// const thirdString="watermelon";
// console.log(firstString.length);
// console.log(thirdString.length);
// const lengthofFirstStr=firstString.length;
// const lengthofSecondStr=secondString.length;
// const lengthofThirdStr=thirdString.length;

// if(lengthofFirstStr<lengthofSecondStr && lengthofFirstStr<lengthofThirdStr){
//      console.log(`${firstString} is the smallest string`);
// }else if(lengthofSecondStr<lengthofFirstStr && lengthofSecondStr<lengthofThirdStr){
//      console.log(`${secondString} is the smallest string`);
// }else if(lengthofThirdStr<lengthofFirstStr && lengthofThirdStr<lengthofSecondStr){
// console.log(`${thirdString} is the smallest string`);
// }




// use of if else
// const totalmarksScored=60;

// if(totalmarksScored<40){
//      console.log("you need to work hard.");
// }else{
//      console.log("you cleared the exam.great")
// }


//  use of ternary operators
// (totalmarksScored<40)? console.log("you need to work hard"):console.log("you cleared the exam")
//  also store in variable
// const result=totalmarksScored<40?"you need to work hard":"you cleared the exam"
// console.log(result);



// nested condtion
/*
const totalmarksScored=80;
if(totalmarksScored<40){
          console.log("you need to work hard.");
     }else if(totalmarksScored<60){
          console.log("b grade");
     }else if(totalmarksScored< 75){
          console.log("a grade");
     }else if(totalmarksScored< 85){
          console.log("a+ grade");
     }else{
          console.log("genius")
     }
     */

//  ternary operation nested
/*
     const result = totalmarksScored < 40 ? "you need to work hard. ": totalmarksScored< 60 ? " b grade": totalmarksScored <75 ? "a grade":totalmarksScored<85 ? "a+ grade":"genius";
     console.log(result);
     */



     // logical operator with conditional statement
     /*
     1. OR ||    ------>   any one condition true
     2. AND &&   ----->  all condition true
     3. NOT !
     4. NULLISH COALESCING ??
     */

     // const physics=55;
     // const maths=67;
     // const chemistry=55;
     // const biology=96;

     // if(physics >50 && maths >69 && chemistry >50 ){
     //      console.log("you are eligible for engg..........")
     // }
     // else{
     //      console.log("you are  not eligible for engg..........")
     // }

     // if(physics >60 ||  maths >70 || chemistry >60 ){
     //      console.log("you are eligible for engg..........")
     // }
     // else{
     //      console.log("you are  not eligible for engg..........")
     // }
     

     //  const firstName= "";
     //  const nickName= "";
     // //  console.log(`name-${firstName}`)
     // // console.log(firstName || nickName)

     // const userName= firstName ||nickName || null|| "geek";
     // console.log(`name- ${userName}`)

     let a=12;
     let b;
     // console.log(a+b);
     console.log(a+(b||0));

