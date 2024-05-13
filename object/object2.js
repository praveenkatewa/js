/*
// const project  = new Object ()
//  aslo define
const project = { }
project.id="123abc"
project.name = "sammy"
project.isloggedin = false

// console.log(project);

const regularuser = {
    email : "some@gmai.com",
    fullname : {
        userfullname : {
            firstname:"praveen",
            lastname : "katewa"

        }

    }
}
console.log(regularuser.fullname.userfullname.firstname);
*/

const obj1 = {1: "a",  2: "b"}
const obj2 = {3 : "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);