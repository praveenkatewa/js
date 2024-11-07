// generate secret code from a given string
// input ---> praksh
// encode by chars ---->2
// output --> rtcmuj


const inputstr="prakash";

const getEncodedstr= str =>{
  let encodedstr="";
  let currentpos=0;
  for(let i=0;i<str.length;i++){
    currentpos=str.charCodeAt(i);
    console.log(currentpos);
  }
}
getEncodedstr(inputstr);
