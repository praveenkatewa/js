// wap to delete all the vowels from a string.

const string ="the quick brown fox jumps over the lazy dog";


function gswnv(str){
  const vowels=["a","e","i","o","u"];
  let result ="";
  for(let char of str){
    if(!vowels.includes(char.toLowerCase())){
      result += char;

    }
  }
  return result;
}

const updatedStr = gswnv(string);
console.log(updatedStr);