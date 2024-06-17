// *************browser events  ***************
// inviseble event .... if want to see event-- monitorEvent()
// monitorEvents(document);  // for- turn on events    -----> it show all event work on document on the page
// unmonitorEvents(document);//   for- turn off
// 1) events
// 2) respond to event
// 3) data stored in event
// 4) stop an event
// 5) lifecycle of event



// ***/******************Eventlistner ******//

// interface --- blueprint

// Event target    <-----node <-------elements
// All properties of event are inherent in node or elements
// node have all properties of event
// element have all properties of event and node
// eventtarget -->interface -->top level entity

// interface implemented by object that can recive events and may have listener for them
// 3method in it
//1) addEventListener()     -- listner  to event/respond to event / hook into events
// 2)removeEventListener()
//3) dispatchEvent()


// pscudocode
// <event-target>. addEventListener(<event-to-listner-for>,<function-to-ren-when event happened>);

//1)event-target --> component to apply on it---document,p ,div,article,video
//2)event-type --->click,double click,scroll
// 3)funtion  --> define what to do when event happend

// ex

// document.addEventListener('click',function(){
//      console.log('i called on document');
// });
// when u click the page it print i called on document

// ex2:
/*
let content = document.querySelector('h1');

<h1>Eventtarget.addEventListener()</h1>

content.addEventListener('click',function(){
     content.style.background='red';
});
*/

// also write like this ---
// function eventfxn(){
//      console.log('i called on document');
// }
// document.addEventListener('click',eventfxn);


// *****remove event listener *****

// ==  lose equality   only check value  // it allow type cocrcion --->where js will try to convert the items beging compared to same type
// ===  strick equality    value and type both check --> prevent from type concrcion

// function ---> addEventListener
//  == exactly same function --> removeEventListener


// ex ---> 1st case
// document.addEventListener('click',function(){
//      console.log('h1');
// });

// document.removeEventListener('click',function(){
//      console.log('h1')});

// here both  function are not same ,bec, funtion are Object in JS,,, and Object are store in different address
// 2nd case

// function print(){
//      console.log("h1");
// }
// document.addEventListener('click',print);
// document.removeEventListener('click',print);

// here both function are same,bec here function as a single object ,which refere in both add or remove
// removeEventListener()  -->work when 
// 1) same target
// 2) same type
// 3) same funtion



// ******************phases of an event ************/
// 1) capturing phase
// line to line go for target
// html ->body ->div ->p -> div

// 2) at target phase
//  target to reach .p

// 3) bubbling phase
// return back by same path 
// div<--<--p <--div <--body<--html

// by default --> addEventListener -->bubbling phase  (execute in bubbling phase)

// to execute in capturing phase  
// .addEventListener('click',print(),true)

// <event.target>.addEventListener(type,listener,true)
// type--> click,doubleclick,scroll, etc
// listener --> function()-->> what should happen after event trigger
// true --> use capture for capturing phase

// here true value ,on the caturing phase


//******************************* */

// *********** the event object*******/

// when an event  occurs, addeventlistener() function
// event object --> lot of information about event


// ex

{/* <p id="wrapper"> hello everyone</p>

const content= document.querySelector('#wrapper');

content.addEventListener('click',function(event){
     console.log(event);
}); */}


//***************      the defeult action*********** */

// anchor tag ---> link open window
// to prevent action
// .preventDefault()

// ex
{/* < a href="https://www.facebook.com">facebook1</a>
< a href="https://www.facebook.com">facebook2</a>
< a href="https://www.facebook.com">facebook3</a>


let links= document.querySelectorAll('a');

let thirdlink=links[2];        // to find third link

thirdlink.addEventListener('click',function (event) {
     event.preventDefault();
     console.log("maxa aaya");
}); */}


//  ************* avoid to many event**************//
// ex case 1
/*
let myDiv=document.createElement('div');
for(let i=1;i<=100;i++){
     let newElement= document.createElement('p');
     newElement.textContent='this is para ' +i;

     newElement.addEventListener('click',function(event){
          console.log('i have clicked on para');
     });
     myDiv.appendChild(newElement);


}
document.body.appendChild(myDiv);


in this ex .the different differnet object are create 
*/
// case 2
/*

let myDiv=document.createElement('div');

function parastatus(event){
     console.log('i have clicked on para');
};


for(let i=1;i<=100;i++){
     let newElement= document.createElement('p');
     newElement.textContent='this is para ' +i;

     newElement.addEventListener('click',parastatus);
     myDiv.appendChild(newElement);


}
document.body.appendChild(myDiv);

/ in this ex. the function as object is 1.same object for every event
ans event it apply every p
addeventlistener work on element

*/

// **********
// case 3
// listener direct on div
/*
let myDiv=document.createElement('div');

function parastatus(event){
     console.log('i have clicked on para');
};

myDiv.addEventListener('click',parastatus);


for(let i=1;i<=100;i++){
     let newElement= document.createElement('p');
     newElement.textContent='this is para ' +i;

   
     myDiv.appendChild(newElement);


}
document.body.appendChild(myDiv);



but in this case...not sigle element exess
work on click on div



*/



// *************************************************************************

// case 4
/*
let myDiv=document.createElement('div');

function parastatus(event){
     console.log('para'+ event.target.textContent);
};

myDiv.addEventListener('click',parastatus);


for(let i=1;i<=100;i++){
     let newElement= document.createElement('p');
     newElement.textContent='this is para ' +i;

   
     myDiv.appendChild(newElement);


}
document.body.appendChild(myDiv);


in this export..particular para can print with use of  div

*/



// ex
/*

<article id="wrapper">
     <P>para<span>span</span></P>
     <P>para<span>span</span></P>
     <P>para <span>span</span></P>
     <P>para <span>span</span></P>
</article>
*/

// let element=document.querySelector('#wrapper');
// element.addEventListener('click',function(event){
//      console.log('span pr click kia hai'+ event.target.textContent);
// });

// here when click on span it console.log span
// and when click on para then it console.log para and span both

// when click on para then want to stop run code


//  use of .nodeName property
/*
let element=document.querySelector('#wrapper');
element.addEventListener('click',function(event){
     if(event.target.nodeName ==='span'){
     console.log('span pr click kia hai'+ event.target.textContent);
     }
});

only work on span only
*/



