// performance
// measure speed of code
// how to write effecient and performing code
// event loop



//  stardard way to measure how long your code takes to run --> performance.now()

// adding 100para
/*
const t1=performance.now();
for(let i=1;i<=100;i++){
let newElement= document.createElement('p');
newElement.textContent='this is para'+i;

document.body.appendChild(newElement);
}
const t2=performance.now();
console.log("this took " +(t2-t1)+"ms");
*/

// optimising a bit
/*

const t3=performance.now();
let mydiv=document.createElement('div');

for(let i=1;i<=100;i++){
     let element=document.createElement('p');
     element.textContent='this is para'+i;

     mydiv.appendChild(element);

}
document.body.appendChild(mydiv);

const t4=performance.now();

console.log("this took " +(t4-t3)+"ms");

*/

//************************** */
// reflow ----  dimission check .postion of element calcation
// repaint ----- show  display px by px 
// good practice-- fewest reflow,repaint


//********** document fragment */
// light weight document Object   
// any addition have no reflow, and no repaint

// here  all p add to document fragment
// when document fragment  add to document then 1 reflow,1 repaint
// in first case 100 p so 100 reflow.100 repaint

/*

let fragment=document.createDocumentFragment();

for(let i=1;i<=100;i++){
     let element=document.createElement('p');
     newElement.textContent='this is para'+i;

     fragment.appendChild(newElement);

}
document.body.appendChild(fragment);   // 1 reflow,1 repaint
*/




//*****************the call stack******************* */

// single threading  ---> js= single thread language
//                          = proccesing of one command at a time
//  top --> bottom

/*
function addPara(){
     let para=document.createElement('p');
     para.textContent='js is single';
     document.body.appendChild(para);


}
function appendNewMessage(){
     let para=document.createElement('p');
     para.textContent='kya haal chaal';
     document.body.appendChild(para);
}
addPara();
appendNewMessage();

*/
// observation:
// run -to-completion 
// js does not execute multiple lines/funtions at the same time.

// call stack



//********************Event loop ****** */
// synchronous= occuring at the same time

//*********************setTimeout()********* */

// setTimeout(function(){
//      console.log('h1');

// },4000);

// wherever you are tring to defer something until the stack is clear