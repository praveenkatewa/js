// window    Dom   Bom

// WINDOW --> global object ,,,brower

// dom ---> document object model   // **/ js object <--- document

// bom  --->location ,communicate to brower

//  document object model(tree like sturcture)

// character-->tags --->token---->nodes----->dom

//(1) getElementbyID("heading")
// - it is called on document object
// it returns a single object  (id=unique)




// (2)  getElemntsbyClassName("head")
//(3) getElementsbyTagName('p') 
// keep in mind:
// 1) both method use document object
// 2)both return multiple items
// 3) the list returned is not an array


//************ use of $0 *******/
/* <span class="text-textpara"></span> */

// let para=$0; 
// para            // it show all value of textpara
// para.className or $0.className    // it show class name


/******** query selector ('header')***********/
// queryselector('#header')  --for id 
// queryselector('.header')  ---for class
// queryselector('#header')    --- for tag name

//  only single object output
// document.querySelector('.text')


// *****querySelectorAll ******///////
// use when required multiple output
// document.querySelectorAll('.hidden');





// ********* have a web page.... need to update existing content   /////////////////

//**  update properties

// **1)innerHTML --- get / set HTML content
//  get an element /all of it  html content
//  set an elements html content

// ex
// <div class="code-ex"></div>  
//  to get ---  code-ex.innerHTML
// TO set ---/ code-ex.innerHTML=' '     // REMOVE content


// **2).outerHTML
//* 3)textContent   ---- get /set for text content

// ex
// let company =document.querySelector('.companyANY');
//   Here  it contain tag p with class name , and some text
// if we use innerHTML --it show text 
// if we use innercontent -- it also show text

// but different is
// when we use innercontent it also show any tag use it it..like.....
//  if we use p tag,,in it use bold tag also,,then it show content on bold tag aslo
// but in innerHTML ,, IT only show p tag contain not bold text  ( it render the bold tag)

// *4)innerText

// different between innertext /inner content
// in innercontent .. if we have tag p and  have some content or more tag and also have
// one hidden dispaly  then in innercontent it show all as text
// but in innertext.. the hidden tag content are not show


// *************ADDing new element/content-**************--:
// *.createElement();

// ex
// let newchild=document.createElement('span');
// content.appendchild(newchild);
//  the new child add at the end 



// *******************creating text-node*****************:
// ex
// let mypara=document.createElement('p');
// mypara.textcontent="i am the text";
// content.appendchild(mypara);                 

//  here the new text is added... but add at the last

//***** to position any new text add *** */
// use ---    .insertAdjacentHTML()
// IT has to be called 2  argument
// location/position
// html text/content to be insert 

// position
// before begin
//  after begin
// before end
// after end


// ex
// .insertAdjacentElement('beforeBegin',nextText);


// /**** remove ****** */
//* .removechild()
// 1) a parent element
// 2) the child element to remove

// parent.removechild(childelement)

// 2) 2nd method // if not know parent
// 1-- to find parent///  child.parent
// child.parent.remove(child);



//****css  style page content change  ***********/
// .style
// .csstext
// .setattribute
// .classname
// .classlist

// ex
// let content=$0;
// content:
// <h1>element. remove()</h1> 

// content.style.color='red'
// content.style.ccsText='color:green;background-color:yellow;front-size:4rem';