// User se 5 input lena hai, inka maximum nikalna hai. 
// Agar maximum > 90 hota hai to ek function call karna hai,
//  jisme maximum aur ek user input ko subtract karna hai aur result return karna hai.
//   Agar result positive hai to us value ka cube return karna hai.  agar result -ve hai
//    to fir uska sqaure nikalna hai aur agar result 0 ata hai to fir apko console log karna hai : "aur nahi ho raha hai merese".


// User se 3 input lena hai, inka average nikalna hai.
//  Agar average > 40 hai to ek function call karna hai, jisme 2 input lena hai aur unka product return karna hai.
//   Agar product negative hai to absolute value return karna ha  aur uske baad uska reverse nikalna. 
//   agar product positive hai to fir check karna hai ki product prime number hai ya nahi hai.






// 1. aapko arrow function ke madad se 4 input lena hai aur uska sum calculate karna hai'
// 2. using annoymous arrow function create a function which does factorial of 5 
// 3. use the concept of hoisiting and call a factorial function without declaring it and then define after calling
// 4. use the concept of immediately invoked function to check whether a number is even or odd. 
// 5. using the concept of parameterised function constructor call factorial function






/////////////////////////////////

/*
/ User se 3 input lena hai, inka average nikalna hai. Agar average > 40 hai to ek function call karna hai, jisme 2 input lena hai aur unka product return karna hai. Agar product negative hai to absolute value return karna ha  aur uske baad uska reverse nikalna. agar product positive hai to fir check karna hai ki product prime number hai ya nahi hai.

const reverse = (n) => {
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
};

const primenumber = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

const prodof2 = () => {
  let a = -99,
    b = 66;
  return a * b;
};

const main = () => {
  let a = 93,
    b = 95,
    c = 99;
  let avg = (a + b + c) / 3;
  if (avg > 40) {
    let res = prodof2();
    if (res < 0) {
       res = Math.abs(res);
       console.log(reverse(res));
    } else if (res > 0) {
      if (primenumber(res)) console.log("Prime Number");
      else console.log("Not a Prime Number");
    }
  }
};

main();

*/
/*
Question 1
User se 4 input lena hai, inka sum nikalna hai. Agar sum > 100 hota hai to ek function call karna hai, jisme 3 input lena hai aur unka average return karna hai. Agar returned average > 50 hai to ek aur function call karke factorial nikalna hai aur check karna hai wo prime number hai ya nahi.

User se 2 input lena hai, inka product nikalna hai. Agar product < 50 hota hai to ek function call karna hai, jisme product aur ek user input ko add karna hai aur result ko return karna hai. Agar returned value odd hai to ek aur function call karke us value ko square karna hai aur result return karna hai.

Question 2
User se 6 input lena hai, inka maximum nikalna hai. Agar maximum > 75 hota hai to ek function call karna hai, jisme maximum aur 2 user inputs ko subtract karna hai aur result return karna hai. Agar result negative hai to absolute value nikal kar factorial return karna hai.
User se 3 input lena hai, inka sum nikalna hai. Agar sum 0 hota hai to ek function call karna hai aur check karna hai ki wo perfect square hai ya nahi. Agar perfect square hai to uska square root nikalna hai aur result return karna hai.

Question 3
User se 5 input lena hai, inka average nikalna hai. Agar average > 60 hai to ek function call karna hai, jisme 3 input lena hai aur unka product return karna hai. Agar product even hai to uska half return karna hai, agar odd hai to uska double return karna hai.

User se 4 input lena hai, inka minimum nikalna hai. Agar minimum < 10 hai to ek function call karna hai aur minimum ko 5 se multiply karna hai aur result return karna hai. Agar result > 50 hai to factorial nikalna hai aur result return karna hai.

Question 4
User se 3 input lena hai, unka sum nikalna hai. Agar sum > 80 hai to ek function call karna hai, jisme 2 input lena hai aur unka division result return karna hai. Agar result integer hai to us integer ka reverse return karna hai.

User se 2 input lena hai, inka difference nikalna hai. Agar difference < 0 hai to absolute value return karna hai. Agar difference even hai to ek function call karna hai aur us value ka cube return karna hai.

Question 5
User se 4 input lena hai, inka product nikalna hai. Agar product > 1000 hai to ek function call karna hai, jisme product aur ek user input ko divide karna hai aur result return karna hai. Agar result fraction hai to uska ceiling value return karna hai.

User se 3 input lena hai, inka average nikalna hai. Agar average < 25 hai to ek function call karna hai aur check karna hai ki wo prime number hai ya nahi. Agar prime hai to uska factorial return karna hai.

Question 6
User se 5 input lena hai, inka maximum nikalna hai. Agar maximum > 90 hota hai to ek function call karna hai, jisme maximum aur ek user input ko subtract karna hai aur result return karna hai. Agar result positive hai to us value ka cube return karna hai.

User se 4 input lena hai, inka sum nikalna hai. Agar sum < 50 hai to ek function call karna hai aur sum ka reverse nikalna hai aur result return karna hai. Agar reverse value even hai to uska half return karna hai.

Question 7
User se 3 input lena hai, inka average nikalna hai. Agar average > 40 hai to ek function call karna hai, jisme 2 input lena hai aur unka product return karna hai. Agar product negative hai to absolute value return karna hai.

User se 2 input lena hai, inka maximum nikalna hai. Agar maximum > 30 hai to ek function call karna hai aur check karna hai wo prime hai ya nahi. Agar prime hai to factorial return karna hai.

Question 8

User se 4 input lena hai, inka sum nikalna hai. Agar sum > 150 hai to ek function call karna hai, jisme 3 input lena hai aur unka sum return karna hai. Agar returned sum even hai to factorial nikalna hai aur result return karna hai.

User se 2 input lena hai, inka product nikalna hai. Agar product < 20 hai to ek function call karna hai aur product ko 5 se add karna hai aur result return karna hai.

Question 9
User se 6 input lena hai, inka average nikalna hai. Agar average > 70 hai to ek function call karna hai, jisme 4 input lena hai aur unka maximum return karna hai. Agar maximum > 50 hai to uska cube return karna hai.

User se 3 input lena hai, inka sum nikalna hai. Agar sum < 30 hai to ek function call karna hai aur sum ko 10 se multiply karna hai aur result return karna hai.

Question 10
User se 5 input lena hai, inka product nikalna hai. Agar product > 500 hai to ek function call karna hai, jisme product aur ek user input ko divide karna hai aur result return karna hai. Agar result integer hai to factorial nikalna hai aur result return karna hai.

User se 4 input lena hai, inka maximum nikalna hai. Agar maximum > 20 hai to ek function call karna hai aur check karna hai wo prime hai ya nahi. Agar prime hai to uska double return karna hai.

*/


