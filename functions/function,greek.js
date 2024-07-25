
// // function declaration or funtion statement
// function greetmessage(){
//      console.log("hello form my side..")
// }
// //  calling the funtion
// greetmessage();
// //  it not show error if you call before declaration

/*
function greetmessage(name,city){     // name is called as a parameter
          console.log(`${name},hello form my side..`)
          console.log(`thank you for joining from ${city}`)
     }

     greetmessage("anuj","jaipur");   //anuj is called as an argument

     greetmessage("praveen","sirsa");
     */


     // sum of given number 1 to 10
/*
     function sum( min,  max){
          let add=0;
          for(i=min;i<=max;i++)
               {
                   add =add+i;
               }
               return add;
     }
  
     console.log(sum(1,10));
     */


////2//////////////////////////
// anonymos funtion and funtion expression
// --anonymos funtion main --funtion dont have name

/*
function(){
     console.log("hello");
}
*/
// how to call this type of function ,,,then 

let anonymosfuntion =function(){
     console.log("hello");
} 
anonymosfuntion();
console.log( typeof(anonymosfuntion));

// cannot access "anonymosfuntion" before initialization
//before initialization  it show arror ,, and typeof it show undefined




