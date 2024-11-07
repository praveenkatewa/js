// generate secret code from a given string
// input ---> praksh
// encode by chars ---->2
// output --> rtcmuj


const inputstr="prakash";
const shiftByPos=2;


const getEncodedstr= (str,shiftByPos) =>{
  let encodedstr="";
  let currentpos=0,newpos=0;
  for(let i=0;i<str.length;i++){
    currentpos=str.charCodeAt(i);
    newpos=currentpos + shiftByPos;
    // console.log(currentpos);
    // console.log(newpos);
    encodedstr +=String.fromCharCode(newpos);
    
  }
  return encodedstr;
}
 console.log(getEncodedstr(inputstr,shiftByPos));
