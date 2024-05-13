// singleton       -   only one kind of
// ex >   object.create

//  object literals
/*
const mysym = Symbol("key1")

const jsuser= {
    name:"hitesh",
    "full name":"hitesh kumar",
    age: 18,
    // mysym : "mykey1",
    [mysym ]: "mykey1",

    location: "jaipur",
    email:"anuj@google.com",
    isloggedin: false,
    lastlogindays : ["monday"]
}
*/
/*
 console.log(jsuser.isloggedin);
 console.log(jsuser["email"]);
 console.log(jsuser["full name"]);
//  full name not acesses by . 
console.log(jsuser.mysym);
console.log(typeof(jsuser.mysym));
console.log(jsuser[mysym]);
console.log(typeof(mysym));

//  for change any value 
jsuser.location ="delhi"
console.log(jsuser.location);
 
 Object.freeze(jsuser)
 console.log(jsuser);
*/

/*
// Add function in object
jsuser.greeting = function() {
    console.log("hello js user");
}
//  refer a function to key -name
jsuser.greetingtwo= function() {
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
*/


const project = new object ()
console.log(project);