

const blockingBtn=document.querySelector('.blocking-btn')

blockingBtn.addEventListener('click',()=>{
     const startTime = Data.now()
let currentTime = startTime

while(startTime +4000  > currentTime){
     currentTime=Date.now()
}

})

