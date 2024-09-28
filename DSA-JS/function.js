// dry  dom't  repeat  yourself

// logic to check if the number is +ve or not


//        function myNewFunctions(input1 , input2, input3){
//                                      logic
//                                      }
//                              return "value";


// function to check if the no.is even or odd

// function  isEven(num) {
//      if(num%2==0){ 
//           return true;
// }
// else{
//      return false;
// }
// }

// (1)

function  isEven(num) {
     if(num%2==0){ 
          return "even";
}
else{
     return "odd";
}

}

let x=10;
let y=20;
let z=81;

// if(isEven(x)){
//      console.log("x is even")
// }else{
//      console.log("x is odd")
// }

// if(isEven(y)){
//      console.log("x is even")
// }else{
//      console.log("x is odd")
// }

// if(isEven(z)){
//      console.log("x is even")
// }else{
//      console.log("x is odd")
// }


console.log("x is",isEven(x));
console.log("y is",isEven(y));
console.log("z is",isEven(z));


// (2)


// let x=10;
// let result =isEven(x);
// if(result==true){
//      console.log("even");
// }else{
//      console.log("odd");
// }



// (3)
// for(let i=1;i<=20;i++){
//      let result=isEven(i);
//      if(result==true){
//           console.log(i,"even");
//      }else{
//           console.log(i,"odd")
//      }
// }
