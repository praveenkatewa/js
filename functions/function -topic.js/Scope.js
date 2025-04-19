// let a=10
// const b=20
// var c=30

// console.log(a)
// console.log(b)
// console.log(c)




// let a=100;
// var c=300;
// {
//   let a=10
//   console.log(a)
// const b=20
// var c=3000

// }

// console.log(a)    
// console.log(b)
// console.log(c)



//** scope level and mini hoisting */

function one(){
  const username= "anuj"

  function two(){
    const website="youtube"
    console.log(username)
  }
  console.log(website);
}
one()