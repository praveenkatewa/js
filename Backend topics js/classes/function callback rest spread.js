//rest operator
//rest operator is used to collect all the remaining arguments into an array

function sum(...nums) {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
}
console.log(sum(30, 20, 50, 70, 70, 80, 50, 10, 20, 30, 40, 50, 30, 40));

// spread operator
// spread operator is used to spread the elements of an array into individual elements.

// const obj = {
//   name: "sachin",
//   age: 20,
//   address: "pune",
// };

const obj = {
  name: "sachin",
  age: 20,
  city: "pune",
  skills: ["Java", "Python", "Css"],
  address: {
    street: "street 1",
    location: "pune",
    pincode: 789645,
  },
};

function function4(a) {
  let userinfo = ["prajjal", "prajjal@gmail.com", 20];
 
  // a=[...userinfo,a];
  a = [...userinfo,...a];
  // merge two arrays
  console.log(a);
}

function function3({ street, location, pincode }) {
  console.log(
    `hi my streetname is: ${street}, my location is: ${location}, and pincode is: ${pincode}`
  );
  const a = [];
  a.push(street, pincode, location);
  console.log(a);
  function4(a);
}
function function2(skills) {
  skills.forEach((skill) => {
    console.log(skill);
  });
}

function htmlbody({ name, age, location, address, skills }) {
  console.log(`Hi name is ${name} and I am from ${location}. My age is ${age}`);
  console.log(`My skills are ${skills}`);
  function2(skills);
  function3(address);
}
htmlbody(obj);
// express mai req.body infomation nikalna, react props