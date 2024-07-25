/*
let rectangle={
     length:1,
     breadth:2,

     draw: function(){
          console.log('draw');
     }
};

console.log(rectangle.draw());

console.log(rectangle.length);

console.log(rectangle['length']);
*/


// FACTORY FUNTION

// function createRectangle(){

//      return rectangle={
//           length:1,
//           breadth:2,
     
//           draw: function(){
//                console.log('draw');
//           }
//      };
     // return rectangle;   direct use return also at place of let

// }


// 3rd way
/*
function createRectangle(){

     return rectangle={
          length:1,
          breadth:2,
     
          draw (){
               console.log('draw');
          }
     };
}
// rectangle.length;
// rectangle.draw();

let rectangleobj1=createRectangle();
console.log(rectangleobj1);
*/



// way 4
/*
function createRectangle(len,bre){

     return rectangle={
          length:len,
          breadth:bre,
     
          draw (){
               console.log('draw');
          }
     };
}
let rectangleobj1=createRectangle(5,4);
console.log(rectangleobj1);
*/

// camelcase -->numberOfStudents
// CONSTRUCTOR funtion    -> pascal notation -> first letter of every word is capital -->NumberOfStudents
// this -->reffer current obj on which work do..
// constructor funtion --> prop/methods --> intialise/define
/*
function Rectangle(len,bre){
     // this.length=1;
     // this.breadth=2;
     this.length=len;
     this.breadth=bre;
     this.draw=function (){
          console.log('drawing');
     }
}

// object creation using constrcutor funtion

// let rectangleobject= new Rectangle();
let rectangleobject= new Rectangle(4,5);
console.log(rectangleobject);
*/
// use of this



// ////////////////////////////////////////////////////////////////////////////////////
// ------> dynamic nature of objects
/*
function Rectangle(len,bre){
  
     this.length=len;
     this.breadth=bre;
     this.draw=function (){
          console.log('drawing');
     }
}

let rectangleobject= new Rectangle(4,5);
//  to add color
rectangleobject.color='yellow';
// to delete 
delete rectangleobject.length;
console.log(rectangleobject);
*/
///////////////////////////////////////////////////////////////////////////////////////

//   CONSTRUCTOR Property
//  object in js   --->objcet -->properties--->constructor


// function Rectangle(len,bre){
  
//      this.length=len;
//      this.breadth=bre;
//      this.draw=function (){
//           console.log('drawing');
//      }
// }
// let rectangleobject= new Rectangle(4,5);
// console.log(rectangleobject.constructor)

// console.log(Rectangle.constructor)
//////////////////////////////////////////////////////////////////////////////
// function is also  an object
// and the object---> constructor
/*
let Rectangle1 = new Function(
     'len','bre',
`this.length=len,
this.breadth=bre,
this.draw=function (){
     console.log('drawing');
}`);
let rect=new Rectangle1(2,1);
console.log(rect);
*/




/////////////////////////////////////////////////////////////////////////////////////
//  function are objects
//---> rectangle--object--properties
//                      --- methods
// types in js
// primitive or value types --> number string boolean undefined null
// reference types or objects --> funtions objects array

// primitive  vs  reference
// primitive -->  copy of value ,, here 2 different block a and b

// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

//  reference
// ----> address pass  here one block haveing address  /// same address pr point krte hai..

// let a={value:10};
// let b=a;
// a.value ++;
// console.log(a)
// console.log(b)

//  primitive are copied by their value ,,references are copied by their address/refernces

// let a =10;
// function inc(a){
//      a++;         //++ in function  ,,,any primitive is pass in funtion   then copy of primitive
// }
// inc(a);
// console.log(a);
// ans 10

// primite ->function call -> copy create hoti h
// obj/ref --> funtion call - same address ko different/same name ko point kr rha hota h

// let a={value:10};
// function inc(a) {
//      a.value++;
// }
// inc(a);
// console.log(a.value);

// ans 11
///////////////////////////////////////////////////////////////////////////////////

// iterating through objects.
//  for-of   ---> iterables  -- array maps
// for-in


let rectangle={
     length:2,
     breadth:4
};
// for-in loop
// for(let key in rectangle){
//      // key are reflected through key variable
//      // values are reflected through rectangle[key]
//      console.log(key,rectangle[key]);
// }

// for -of loop


// for(let key of rectangle){
//      console.log(key);
// }  //TypeError: rectangle is not iterable



// for(let key of Object.entries(rectangle)){
//      console.log(key);
// }  // use object.keys   and object.entries


// to check any key present or not

// if('colur' in rectangle){
//      console.log('present');
// }else{
//      console.log('absent');
// }




//  object cloning :
// iteration
// assign
// spread


// let a={value:10};
// let b=a;    // here not cloning  ,,, b is address on same a box



//  object cloning #1 
// let src={
//      a:10,
//      b:20,
//      c:30
// };
// let dest={};
// for(let key in src){
//      dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);



// object cloning #2

//  let src={
//      a:10,
//      b:20,
//      c:30
//  };
//  let src2={
//      value:40
//  };
//   let dest=Object.assign({},src,src2);

//   console.log(dest);


// object cloning #3


let src={
     a:10,
     b:20,
     c:30
};
let dest={...src};
console.log(dest);