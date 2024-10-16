// difference bw callback and recursion
// callback is a function that is passed as an argument to another function
// recursion is a function that calls itself

function calculator(a, b, operation) {
  return operation(a, b);
}
// user defined callback function

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}

console.log(calculator(3, 5, sum));
console.log(calculator(5, 3, sub));
console.log(calculator(5, 3, mul));



// for each 
const arr = ["Java", "Python", "CSS"];

arr.forEach((it) => {
  console.log(it);
});

// javascript ke andar jitne bhi functions wo sare functions callback function hai jo ek annoynomous function as an argument lete hai