// 1. Find the Maximum Number in an Array
// javascript
// Copy code
/*
const findMax = (arr) => Math.max(...arr);

let numbers = [1, 5, 3, 9, 2];
let maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 9

*/


// 2. Filter Even Numbers from an Array
/*

const filterEvens = (arr) => arr.filter(num => num % 2 === 0);


let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = filterEvens(numbers);
console.log(evenNumbers); // Output: [2, 4, 6]

*/

// 3. Reverse a String

/*

const reverseString = (str) => str.split('').reverse().join('');

let originalString = "hello";
let reversed = reverseString(originalString);
console.log(reversed); // Output: "olleh"

*/

// 4. Check if a String is a Palindrome

/*
const isPalindrome = (str) => {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
};


let word = "racecar";
let result = isPalindrome(word);
console.log(result); // Output: true
it is a palindrome.

*/

// 5. Sum of an Array
/*

const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);

let numbers = [1, 2, 3, 4];
let totalSum = sumArray(numbers);
console.log(totalSum); // Output: 10

*/


