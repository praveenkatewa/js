// mask the last 4 characters with #

const str ="1234567891234";

const maskChar ="#".repeat(4);
const result =str.slice(0,str.length -4)+maskChar;
console.log(result)