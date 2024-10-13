
/*
1. create an object name fruits which should atleast 5 keys such that fruit name, fruit price.... it should have an array as key now 
you have to pass this object in a function which will accept it in destructure format now print all the information and call a function which will going to pass the key array into another function and call one function that will pass the object as key into another 

2.  Create an object named user with at least 5 keys (e.g., userName, userAge, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.  

Product Data

3. Create an object named product with at least 5 keys (e.g., productName, productPrice, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

Order Data

4. Create an object named order with at least 5 keys (e.g., orderId, orderDate, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.
Employee Data

5. Create an object named employee with at least 5 keys (e.g., employeeName, employeeId, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

Customer Data

6. Create an object named customer with at least 5 keys (e.g., customerName, customerAddress, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

Inventory Data

7. Create an object named inventory with at least 5 keys (e.g., itemId, itemQuantity, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

Vehicle Data

8. Create an object named vehicle with at least 5 keys (e.g., vehicleModel, vehiclePrice, etc.). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

*/




/*
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

function htmlbody(obj) {
  console.log(`Hi name is ${obj.name} and I am from ${obj.location}. My age is ${obj.age}`);
  console.log(`My skills are ${obj.skills}`);
  function2(obj.skills);
  function3(obj.address);
}
htmlbody(obj);
// express mai req.body infomation nikalna, react props
*/