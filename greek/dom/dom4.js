// asynchronous js


// function sync(){
//      console.log('first');
// }
// sync();
// console.log('second');
// setTimeout(function(){
//      console.log('third');
// },)



     // setTimeout(function(){
     //      console.log('third');
     // },3000)
     // function sync(){
     //      console.log('first');
     // }
     // sync();
     // console.log('second');


     //  get/post/put/delete
     // features of asyn.code
     // clean & concise
     // better error handling
     // easier bugging



     // API
// promise

// let mPromise=new Promise(function(resolve,reject){
//      setTimeout(function(){
//           console.log('i am inside promise');
//      },5000);
     
//      // resolve(1998);
//      reject(new Error('show error'));
// })
// console.log('first')
// mPromise



// p --> fulfilled
//    --> rejected

// then ()--> value
// catch() --> error


let mPromise=new Promise(function(resolve,reject){
     setTimeout(function(){
          console.log('i am inside promise');
     },5000);
     
     resolve(1998);
});
mPromise.then((value)=>{console.log(value)});