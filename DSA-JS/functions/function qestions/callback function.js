// 1. user defined callback function banao calculator jo a,b,c and konsa function run karwana hai wo chaleyega, add, subtract,multiply divide
// 2. user defined function masterfunction banna hai jo 1 information leti hai out of username,age,rollno, aur ek function as an argument leti hai, print name mai agar username and printname function bheja gaya ho, age, printage, rollno, printrollno





function FruitsFunc(name,callthefunction){

  return callthefunction(name);

}

function printkiwi(val){

console.log(val);

}

console.log(FruitsFunc("kiwi",printkiwi))