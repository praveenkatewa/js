//arguments?
// 1.postional arguments
/*
function greet(name, age) {
  console.log(`Hello my name is ${name} and my age is ${age}`);
}
greet("praveen", 27); //calling
*/





// 2.default arguments
// function greet(name = "praveen", age = 27) {
//   console.log(`Hello my name is ${name} and my age is ${age}`);
// }
// greet();




// 3.Rest Paramters ===>application react mai ...prev jab useState padhenge
/*
function sum(...args) {
  let sum = 0;
  args.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(sum(3.5, 4.5, 5.5, 6.5, 7.5, 8.9, 9.3));
*/

//tab ata ek hi category ki value ho jaise sum karte wakt sabhi values numbers hi hote
//numbers , fruits ===>array ka ki dusra takira




/*
4.Object destructing ===> express mai = req.body se information object      destructure karte wakt
 ya react mai props(object) pass karte samay iska use dekha jayega

function greet({ name = "praveen", age = 27 }={}) {
  console.log(`Hello my name is ${name} and my age is ${age}`);
}
greet();//argument jo pass ho rahi hai wo ek object

*/


// 5. object destructing in function
/*
function greet(person)
{
    console.log(`Hello my name is ${person.name} and my age is ${person.age}`);
}

// if not use person then
function greet({ name, age })
{
  console.log(`hello from ${name} and my age is ${age}`);
}

const person = {
  name: "praveen",
  age: 27,
};

greet(person);
*/