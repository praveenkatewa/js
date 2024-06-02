// arrays   ----> objects  ---> collection of items
// adding new elements
// finding elements
// removing elements
// splitting elements
// combining elements


// creation of array

// let number=[1,4,5,7];
// console.log(number);

// =******************************insertion*************
// end   ----.number.push(9)
// begin   -----> number.unshift(8)

// middle   -----> number.splice(2,0,'a')

// number.push(9)
// console.log(number)
// number.unshift(8)
// console.log(number)
// number.splice(2,0,'a')
// console.log(number)


// searching 
// console.log(number.indexOf(4))
// console.log(number.includes(7));



// in object indexof is not working

// let courses=[
//      {no:1,naam:'love'},
//      {no:2,naam:'rahul'}
// ];
// console.log(courses);
// console.log(courses.indexOf({no:1,naam:'love'}));
// console.log(courses.includes({no:1,naam:'love'}));

// *******************use callback functions******************
// a callback funtion is a function passed into another function as an argument, which is then involed inside the outer funtion to complete some kind of routine or action
// 
//  let course=courses.find(function(courses){
//      return courses.naam=="rahul"
// })

// console.log(course);


//*************** */ arrow function****************
// let course= courses.find(course =>course.naam==='rahul');
// console.log(course);

 



//////////////////////////////////////////
//****************** */ removing element**************************

// end     -> pop()
// beging    -> shift()
// middle   -->splice(3,1)   ----->3 =index  , 1=no.of element you want to delete

// let numbers=[1,2,3,4,5,6,7,8,9];
// numbers.pop();
// numbers.shift();
// numbers.splice(2,1)
// console.log(numbers)



// *********emptying an array******
// let numbers=[1,2,3,4,5,6,7,8,9];
// let numbers2=numbers;
// // numbers=[];
// // numbers.length=0;
// numbers.splice(0,numbers.length);
// console.log(numbers);
// console.log(numbers2);

// also use method pop() with loop
// while(numbers.length>0)
     // Numbers.pop()



// ************combining and slicing arrays*****************

// let first=[1,2,3];
// let second=[4,5,7];

// let combined=first.concat(second)
// console.log(combined)


// let sliced=combined.slice();
// let sliced=combined.slice(2);
//  let sliced=combined.slice(2,3);
//  console.log(sliced);



// /******************spread operator********************

// let first=[1,2,3];
// let second=[4,5,7];

// let combined=[...first,...second]

// let combined=[...first,'a',false, ...second,'b',true]
// console.log(combined);

// copy kaise create karu
// let another=[...combined];
// console.log(another);

// ***************iterating an array***********************


// let arr=[10,20,30,40,50];
// for(let value of arr){
//      console.log(value);
// }

// arr.forEach(function(number){
//      console.log(number)
// })


// arrow function
// arr.forEach(number=>console.log(number));


// ******************joining arrays********************

// let numbers=[10,20,30,40,50];
// console.log(numbers);
// const joined=numbers.join(',');
// console.log(joined);


// let message='this is my first message';
// let parts=message.split(' ');
// console.log(parts);


// here split convert each element in array


// let joined=parts.join('_');
// console.log(joined);

// make it ak string with add _


//////////////////////**********sorting arrays******************** */

// // sort  
// let numbers=[40,33,12,25,50];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


let numbers=[5,10,4,40];

// numbers.sort((a,b){return(a>b)});
numbers.sort((a,b) => a-b);
console.log(numbers);



////////**************filtering arrays **************************/

// let numbers=[1,2,-1,-4];
//  let filtered=numbers.filter(function(value){
//      return value>=0;

// });

// let filtered=numbers.filter(value=>value>=0);
// console.log(filtered);


//*************************mapping arrays**************************/
//  map each element of array to something else

// let numbers=[7,8,9,10];
// console.log(numbers);
// //  let items=numbers.map(function(value){
// //      return 'student_no'+  value;
// // })

// let items=numbers.map(value=>'student_no'+value);
// console.log(items);

////****************mapping with objects **************** */
// let numbers=[1,2,-6,-9];
// let filtered=numbers.filter(value=>value>=0);

// // let items=filtered.map(function(num){
// //       return {value:num};
     
// // })
// // let items=filtered.map(num=>{value:num});

// let items=numbers.filter(value=>value>=10)
// .map(num=>{value:num});
// console.log(items)


